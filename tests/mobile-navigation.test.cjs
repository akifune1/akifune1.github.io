/** Non-browser checks for dock destinations, selection, and its separate theme-control group. */
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { transformSync } = require('esbuild');
const { SECTIONS } = require('../src/hooks/useActiveSection.js');

const code = transformSync(readFileSync(path.join(__dirname, '../src/components/MobileBottomNav.jsx'), 'utf8'), {
  loader: 'jsx', format: 'cjs',
}).code;

function loadDock(navigate) {
  const module = { exports: {} };
  vm.runInNewContext(code, {
    module, exports: module.exports,
    require(id) {
      if (id === 'lucide-react') return new Proxy({}, { get: () => () => null });
      if (id === './ThemeToggle') return () => React.createElement('button', { 'aria-label': 'Dark mode' });
      if (id.includes('useActiveSection')) return { SECTIONS };
      if (id.includes('scrollToSection')) return { scrollToSection: navigate };
      if (id.endsWith('.css')) return {};
      return require(id);
    },
  });
  return module.exports.default;
}

test('each section has exactly one current location and a matching selection position', () => {
  const Dock = loadDock(() => {});
  SECTIONS.forEach(({ id, label }, index) => {
    const html = renderToStaticMarkup(React.createElement(Dock, { activeSection: id }));
    const navigation = html.match(/<nav\b[\s\S]*?<\/nav>/)?.[0];
    assert.ok(navigation);
    assert.equal((navigation.match(/<button\b/g) || []).length, SECTIONS.length);
    assert.equal((html.match(/aria-current="location"/g) || []).length, 1);
    assert.ok(html.includes(`--active-index:${index}`));
    assert.ok(html.includes(`data-placement="${id === 'hero' ? 'top' : 'bottom'}"`));
    assert.match(html, new RegExp(`aria-label="${label}"[^>]*aria-current="location"`));
  });
});

test('all dock buttons keep their full accessible labels and navigate to their section', () => {
  const visited = [];
  const Dock = loadDock((id) => visited.push(id));
  const element = Dock({ activeSection: 'hero' });
  const navigation = React.Children.toArray(element.props.children).find((child) => child.type === 'nav');
  const buttons = React.Children.toArray(navigation.props.children).filter((child) => child.type === 'button');
  buttons.forEach((button, index) => {
    assert.equal(button.props['aria-label'], SECTIONS[index].label);
    button.props.onClick();
  });
  assert.deepEqual(visited, SECTIONS.map(({ id }) => id));
});

test('theme control is a sibling group beside section navigation', () => {
  const Dock = loadDock(() => {});
  const html = renderToStaticMarkup(React.createElement(Dock, { activeSection: 'hero' }));
  assert.match(html, /<\/nav><div class="mobile-theme-control"><button aria-label="Dark mode"/);
  assert.equal((html.match(/<button\b/g) || []).length, SECTIONS.length + 1);
});
