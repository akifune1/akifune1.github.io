/** Accessible document navigation shared by portfolio header, footer, hero, and rails. */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (!target) return;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  target.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth', block: 'start' });
  // Keep keyboard users at their destination without causing a second scroll.
  target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}
