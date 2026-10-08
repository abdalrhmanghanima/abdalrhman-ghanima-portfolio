import { useEffect } from 'react';

/**
 * Lightweight, performant IntersectionObserver-based scroll reveal hook.
 * Adds 'is-revealed' class once when elements enter the viewport, then unobserves them.
 * Respects prefers-reduced-motion and avoids layout shifts.
 */
export const useScrollReveal = () => {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const elements = document.querySelectorAll<HTMLElement>(
      '[data-reveal], .reveal-fade-up, .reveal-scale'
    );

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Unobserve so animation never replays unnecessarily
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
};
