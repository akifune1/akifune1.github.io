/** Non-browser tests for repeatable motion direction and neutral ending poses. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createEntranceRegistry, getEntranceMotion } from '../src/hooks/useScrollMotion.js';

test('project entries alternate horizontally and reverse when returning upward', () => {
  const first = getEntranceMotion('project-card', 0, false);
  const next = getEntranceMotion('project-card', 1, false);
  const returning = getEntranceMotion('project-card', 0, true);
  assert.match(first.keyframes[0].transform, /translateX\(-/);
  assert.doesNotMatch(next.keyframes[0].transform, /translateX\(-/);
  assert.doesNotMatch(returning.keyframes[0].transform, /translateX\(-/);
  assert.deepEqual(first.keyframes.at(-1), returning.keyframes.at(-1));
});

test('sections, skills, and experience use distinct motion vocabularies', () => {
  assert.equal(getEntranceMotion('section-title', 0, false).keyframes[0].transform, 'scaleX(1)');
  assert.match(getEntranceMotion('skills-group', 0, false).keyframes[0].transform, /translateX.*scale/);
  assert.match(getEntranceMotion('timeline-item', 0, false).keyframes[0].transform, /translateY/);
});

test('every entrance restores visibility and leaves no permanent animation fill', () => {
  for (const kind of ['section-title', 'section-subtitle', 'project-card', 'skills-group', 'cert-card', 'contact-links', 'timeline-item']) {
    const motion = getEntranceMotion(kind, 0, false);
    const end = motion.keyframes.at(-1);
    assert.ok(end.opacity === undefined || end.opacity === 1);
    assert.ok(end.clipPath === undefined || end.clipPath === 'inset(0 0 0 0)');
    assert.ok(motion.duration > 0 && motion.duration <= 800);
    assert.equal(motion.fill, undefined);
  }
});

test('heading wipes always reveal from the text edge, regardless of parity or scroll direction', () => {
  const reference = getEntranceMotion('section-title', 0, false).keyframes;
  assert.equal(reference[0].transform, 'scaleX(1)');
  assert.equal(reference.at(-1).transform, 'scaleX(0)');
  for (const index of [0, 1, 2, 3]) {
    for (const fromAbove of [false, true]) {
      assert.deepEqual(getEntranceMotion('section-title', index, fromAbove).keyframes, reference);
    }
  }
});

test('a visible target does not restart or cancel during its current viewport visit', () => {
  const registry = createEntranceRegistry();
  const target = {};
  let starts = 0;
  let cancellations = 0;
  const animation = { cancel: () => cancellations++ };
  const start = () => { starts++; return animation; };
  registry.enter(target, start);
  registry.enter(target, start);
  animation.onfinish();
  registry.enter(target, start);
  assert.equal(starts, 1);
  assert.equal(cancellations, 0);
  registry.leave(target);
  registry.enter(target, start);
  assert.equal(starts, 2);
});

test('return scrolling replays safely even if an earlier finish callback arrives late', () => {
  const registry = createEntranceRegistry();
  const target = {};
  let oldCancelled = 0;
  let newCancelled = 0;
  const previous = { cancel: () => oldCancelled++ };
  const current = { cancel: () => newCancelled++ };
  registry.enter(target, () => previous);
  registry.leave(target);
  registry.enter(target, () => current);
  previous.onfinish();
  registry.leave(target);
  assert.equal(oldCancelled, 1);
  assert.equal(newCancelled, 1);
});

test('cleanup cancels active work and permits a clean new visit', () => {
  const registry = createEntranceRegistry();
  const target = {};
  let cancellations = 0;
  let starts = 0;
  const start = () => { starts++; return { cancel: () => cancellations++ }; };
  registry.enter(target, start);
  registry.clear();
  registry.enter(target, start);
  assert.equal(cancellations, 1);
  assert.equal(starts, 2);
});
