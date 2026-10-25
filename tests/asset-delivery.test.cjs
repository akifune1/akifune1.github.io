/** Checks initial theme-specific hero markup and generated image delivery without a browser. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, readdirSync, statSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { transformSync } = require('esbuild');
const sharp = require('sharp');

const root = path.join(__dirname, '..');
const hero = transformSync(readFileSync(path.join(root, 'src/components/Hero.jsx'), 'utf8'), {
  loader: 'jsx', format: 'cjs', define: { 'import.meta.env.BASE_URL': '"/portfolio/"' },
}).code;

for (const theme of ['light', 'dark']) {
  test(`initial ${theme} hero only requests its own responsive scenery`, () => {
    const module = { exports: {} };
    vm.runInNewContext(hero, {
      module, exports: module.exports,
      require(id) {
        if (id === './ThemeToggle') return { useTheme: () => ({ theme }) };
        if (id === 'lucide-react') return new Proxy({}, { get: () => () => null });
        if (id.includes('portfolioData')) return { personalInfo: { name: 'Kolby Hernandez', socials: { resume: '/cv.pdf' } } };
        if (id.includes('scrollToSection')) return { scrollToSection() {} };
        if (id.endsWith('.css')) return {};
        return require(id);
      },
    });
    const html = renderToStaticMarkup(React.createElement(module.exports.default));
    const images = html.match(/<img\b[^>]*>/g) || [];
    assert.equal(images.length, 1);
    assert.ok(images[0].includes(`/portfolio/images/hero_${theme}-1920.webp`));
    assert.ok(images[0].includes(`/portfolio/images/hero_${theme}-960.webp 960w`));
    assert.ok(images[0].includes('fetchpriority="high"'));
    assert.ok(!html.includes(`hero_${theme === 'dark' ? 'light' : 'dark'}-`));
  });
}

test('responsive hero derivatives are smaller and match their declared widths', async () => {
  for (const theme of ['light', 'dark']) {
    const original = statSync(path.join(root, 'public/images', `hero_${theme}.jpg`)).size;
    for (const width of [960, 1920]) {
      const filename = path.join(root, 'public/images', `hero_${theme}-${width}.webp`);
      const image = await sharp(filename).metadata();
      assert.equal(image.width, width);
      assert.equal(image.format, 'webp');
      assert.ok(statSync(filename).size < original / 4);
    }
  }
});

test('badge derivatives retain transparency and are bounded for high-density displays', async () => {
  let originalBytes = 0;
  let optimizedBytes = 0;
  for (const name of readdirSync(path.join(root, 'public/badges')).filter((file) => file.endsWith('.png'))) {
    const input = path.join(root, 'public/badges', name);
    const output = path.join(root, 'public/badges/optimized', name.replace(/\.png$/, '.webp'));
    const original = await sharp(input).metadata();
    const optimized = await sharp(output).metadata();
    assert.equal(optimized.hasAlpha, original.hasAlpha, name);
    assert.ok(optimized.width <= 300 && optimized.height <= 300, name);
    originalBytes += statSync(input).size;
    optimizedBytes += statSync(output).size;
  }
  assert.ok(optimizedBytes < originalBytes / 2);
});

test('font preload and stylesheet use the same smaller Junicode subsets', () => {
  const html = readFileSync(path.join(root, 'index.html'), 'utf8');
  const css = readFileSync(path.join(root, 'src/styles/index.css'), 'utf8');
  assert.ok(html.includes('fonts/junicode-roman-subset.woff2'));
  for (const style of ['roman', 'italic']) {
    const name = `junicode-${style}-subset.woff2`;
    assert.ok(css.includes(name));
    const output = path.join(root, 'public/fonts', name);
    assert.equal(readFileSync(output).toString('ascii', 0, 4), 'wOF2');
    assert.ok(statSync(output).size < statSync(path.join(root, 'public/fonts', `junicode-${style}.woff2`)).size / 2);
  }
});
