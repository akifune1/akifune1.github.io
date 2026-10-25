/** Repeatable viewport entrances for App.jsx; keeps content visible and cancels offscreen work. */
import { useEffect } from 'react';

const TARGET_CLASSES = [
  'section-title', 'section-subtitle', 'timeline-item', 'project-card', 'skills-group',
  'cert-card', 'contact-email-row', 'contact-links', 'footer-main-row',
];
const TARGETS = TARGET_CLASSES.map((name) => `.${name}`).join(',');

/** Distinct entrance vocabularies share a neutral end pose and work in either scroll direction. */
export function getEntranceMotion(kind, index, fromAbove, compact = false) {
  const motion = getEditorialMotion(kind, index, fromAbove);
  if (!compact) return motion;
  // Shorter travel and playback keep quick thumb scrolling readable without changing the vocabulary.
  return {
    ...motion,
    duration: Math.round(motion.duration * .7),
    keyframes: motion.keyframes.map((frame) => ({
      ...frame,
      transform: frame.transform?.replace(/(-?\d+(?:\.\d+)?)px/g, (_, value) => `${Number(value) * .5}px`),
    })),
  };
}

/** Authored desktop motion definitions; compact adaptation is applied by getEntranceMotion. */
function getEditorialMotion(kind, index, fromAbove) {
  const direction = (index % 2 === 0 ? -1 : 1) * (fromAbove ? -1 : 1);
  if (kind === 'project-card') return {
    keyframes: [{ opacity: .6, transform: `translateX(${direction * 36}px)` }, { opacity: 1, transform: 'translateX(0)' }],
    duration: 650,
  };
  if (kind === 'skills-group') return {
    keyframes: [{ opacity: .65, transform: `translateX(${direction * 24}px) scale(.985)` }, { opacity: 1, transform: 'translateX(0) scale(1)' }],
    duration: 580,
  };
  if (kind === 'section-title') return {
    // Move a separate page-colored cover; never clip or hide the text itself.
    keyframes: [{ transform: 'scaleX(1)' }, { transform: 'scaleX(0)' }],
    duration: 520,
  };
  if (kind === 'section-subtitle') return {
    keyframes: [{ opacity: .7, transform: 'translateX(-12px)' }, { opacity: 1, transform: 'translateX(0)' }],
    duration: 480,
  };
  if (kind === 'cert-card' || kind === 'contact-links') return {
    keyframes: [{ opacity: .65, transform: `translateX(${direction * 20}px)` }, { opacity: 1, transform: 'translateX(0)' }],
    duration: 480,
  };
  return {
    keyframes: [{ opacity: .65, transform: `translateY(${fromAbove ? -16 : 16}px)` }, { opacity: 1, transform: 'translateY(0)' }],
    duration: 520,
  };
}

/** One entrance per viewport visit; late finish callbacks cannot erase a newer playback. */
export function createEntranceRegistry() {
  const visible = new Set();
  const active = new Map();
  return {
    enter(target, start) {
      if (visible.has(target)) return;
      visible.add(target);
      const animation = start();
      if (!animation) return;
      active.set(target, animation);
      animation.onfinish = () => {
        if (active.get(target) === animation) active.delete(target);
      };
    },
    leave(target) {
      visible.delete(target);
      active.get(target)?.cancel();
      active.delete(target);
    },
    clear() {
      active.forEach((animation) => animation.cancel());
      active.clear();
      visible.clear();
    },
  };
}

export function useScrollMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const compact = window.matchMedia('(max-width: 1099px)');
    const registry = createEntranceRegistry();
    let observer;

    const connect = () => {
      observer?.disconnect();
      registry.clear();
      if (preference.matches || !window.IntersectionObserver || !Element.prototype.animate) return;

      const targets = [...document.querySelectorAll(TARGETS)];
      const indices = new Map(targets.map((target, index) => [target, index]));
      observer = new IntersectionObserver((entries) => {
        entries.forEach(({ target, isIntersecting, boundingClientRect }) => {
          if (!isIntersecting) {
            registry.leave(target);
            return;
          }
          registry.enter(target, () => {
            if (document.hidden || target.contains(document.activeElement)) return null;
            const fromAbove = boundingClientRect.bottom < window.innerHeight / 2;
            const kind = [...target.classList].find((name) => TARGET_CLASSES.includes(name));
            const motion = getEntranceMotion(kind, indices.get(target), fromAbove, compact.matches);
            const animatedElement = kind === 'section-title' ? target.querySelector('.heading-wipe') : target;
            return animatedElement?.animate(motion.keyframes, {
              duration: motion.duration, easing: 'cubic-bezier(.16, 1, .3, 1)',
            });
          });
        });
      // Only a real viewport exit can cancel playback, never an inset trigger boundary.
      }, { rootMargin: '0px', threshold: 0 });
      targets.forEach((target) => observer.observe(target));
    };
    const onVisibility = () => { if (document.hidden) registry.clear(); };
    connect();
    preference.addEventListener('change', connect);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer?.disconnect();
      registry.clear();
      preference.removeEventListener('change', connect);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);
}
