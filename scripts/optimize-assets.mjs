/** Generates delivery assets from untouched public originals; run with npm run optimize:assets. */
import { readFile, readdir, mkdir, writeFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import subsetFont from 'subset-font';

const root = fileURLToPath(new URL('../', import.meta.url));
const publicDir = path.join(root, 'public');
const sizes = { heroesBefore: 0, heroesAfter: 0, badgesBefore: 0, badgesAfter: 0, fontsBefore: 0, fontsAfter: 0 };

for (const theme of ['light', 'dark']) {
  const input = path.join(publicDir, 'images', `hero_${theme}.jpg`);
  sizes.heroesBefore += (await stat(input)).size;
  for (const width of [960, 1920]) {
    const output = path.join(publicDir, 'images', `hero_${theme}-${width}.webp`);
    await sharp(input).rotate().resize({ width, withoutEnlargement: true }).webp({ quality: 82, effort: 6 }).toFile(output);
    sizes.heroesAfter += (await stat(output)).size;
  }
}

const badgeDir = path.join(publicDir, 'badges');
await mkdir(path.join(badgeDir, 'optimized'), { recursive: true });
for (const filename of (await readdir(badgeDir)).filter((name) => name.endsWith('.png'))) {
  const input = path.join(badgeDir, filename);
  const output = path.join(badgeDir, 'optimized', filename.replace(/\.png$/, '.webp'));
  // 300px preserves detail on high-density screens; lossless WebP retains white details and alpha.
  await sharp(input).resize({ width: 300, height: 300, fit: 'inside', withoutEnlargement: true }).webp({ lossless: true, effort: 6 }).toFile(output);
  sizes.badgesBefore += (await stat(input)).size;
  sizes.badgesAfter += (await stat(output)).size;
}

// Keep broad Latin coverage for future edits, plus every character in the current source.
let characters = '';
for (const [start, end] of [[0x20, 0x24f], [0x1e00, 0x1eff], [0x2000, 0x206f], [0x20a0, 0x20cf]]) {
  for (let code = start; code <= end; code++) characters += String.fromCodePoint(code);
}
async function collectCharacters(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) await collectCharacters(filename);
    else if (/\.(jsx?|css)$/.test(entry.name)) characters += await readFile(filename, 'utf8');
  }
}
await collectCharacters(path.join(root, 'src'));
characters += await readFile(path.join(root, 'index.html'), 'utf8');
for (const style of ['roman', 'italic']) {
  const input = await readFile(path.join(publicDir, 'fonts', `junicode-${style}.woff2`));
  const output = await subsetFont(input, characters, {
    targetFormat: 'woff2', preserveNameIds: [0, 7, 8, 9, 13, 14],
    // Retain normal shaping and kerning; unused historical/stylistic alternates dominate Junicode's size.
    keepFeatures: ['ccmp', 'locl', 'rlig', 'liga', 'clig', 'calt', 'kern', 'mark', 'mkmk'],
  });
  await writeFile(path.join(publicDir, 'fonts', `junicode-${style}-subset.woff2`), output);
  sizes.fontsBefore += input.length;
  sizes.fontsAfter += output.length;
}

console.log(JSON.stringify(sizes, null, 2));
