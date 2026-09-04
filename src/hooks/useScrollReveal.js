/**
 * @file src/hooks/useScrollReveal.js
 * @description React hook that initializes an IntersectionObserver to animate elements into view.
 * Attaches to all elements with the `.reveal` class, toggling `.active` when scrolled into viewport.
 * Used globally in App.jsx and individual section components.
 */

import { useEffect } from 'react';

/**
 * Custom hook to activate scroll-triggered reveal animations on page elements.
 * Automatically handles DOM observation and cleanup on unmount.
 *
 * @param {Object} options - IntersectionObserver configuration options.
 * @param {number} [options.threshold=0.15] - Viewport entry percentage to trigger animation.
 * @param {string} [options.rootMargin='0px 0px -40px 0px'] - Offsets to trigger slightly before bottom.
 */
export function useScrollReveal(options = {}) {
  useEffect(() => {
    // Default observer options optimized for desktop and mobile scroll speeds
    const observerOptions = {
      threshold: options.threshold !== undefined ? options.threshold : 0.12,
      rootMargin: options.rootMargin || '0px 0px -40px 0px',
    };

    /**
     * Observer callback that adds the 'active' class when an element enters the viewport.
     */
    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // Once animated into view, stop observing to conserve CPU cycles
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Query all elements marked with the .reveal class across the page
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount or re-render
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [options]);
}
