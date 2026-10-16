/** Tests the actual pre-paint script in index.html using Node's built-in runner. */
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const vm = require('node:vm');
const path = require('node:path');

const html = readFileSync(path.join(__dirname, '../index.html'), 'utf8');
const bootstrap = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
assert.ok(bootstrap, 'The theme bootstrap must be an early inline script');

test('theme bootstrap stays in the document head before the application entry', () => {
  const head = html.slice(html.indexOf('<head>'), html.indexOf('</head>'));
  assert.ok(head.includes(bootstrap));
  assert.ok(!head.includes('<polyline') && !head.includes('</svg>'), 'Favicon artwork belongs in its asset file');
});

function resolveTheme(savedValue, storageBlocked = false) {
  const root = { dataset: {}, style: {} };
  vm.runInNewContext(bootstrap, {
    document: { documentElement: root },
    localStorage: { getItem() { if (storageBlocked) throw new Error('Storage blocked'); return savedValue; } },
  });
  return root;
}

for (const saved of [null, '', 'invalid', 'DARK', 'light']) {
  test(`uses cream light for ${JSON.stringify(saved)} preference`, () => {
    const root = resolveTheme(saved);
    assert.equal(root.dataset.theme, 'light');
    assert.equal(root.style.colorScheme, 'light');
  });
}

test('restores a deliberate dark choice before React mounts', () => {
  const root = resolveTheme('dark');
  assert.equal(root.dataset.theme, 'dark');
  assert.equal(root.style.colorScheme, 'dark');
});

test('blocked storage leaves a usable light document', () => {
  const root = resolveTheme(null, true);
  assert.equal(root.dataset.theme, 'light');
  assert.equal(root.style.colorScheme, 'light');
});
