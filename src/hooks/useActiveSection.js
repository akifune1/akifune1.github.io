/** Tracks the six mounted sections for App.jsx's desktop and mobile navigation. */
import { useEffect, useState } from 'react';

export const SECTIONS = [
  { id: 'hero', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export function useActiveSection() {
  const [active, setActive] = useState('hero');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
        setActive('contact');
        return;
      }
      const current = [...SECTIONS].reverse().find(({ id }) =>
        (document.getElementById(id)?.getBoundingClientRect().top ?? Infinity) <= 150);
      setActive(current?.id ?? 'hero');
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);
  return active;
}
