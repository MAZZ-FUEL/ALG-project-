import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          setTimeout(() => el.classList.add('visible'), Number(el.dataset.delay || 0));
        }
      });
    }, { threshold: 0.12 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => {
      const parent = el.parentElement;
      const siblings = Array.from(parent?.querySelectorAll('.reveal') || []);
      const elHtml = el as HTMLElement;
      elHtml.dataset.delay = String(siblings.indexOf(el) * 120);
      revealObserver.observe(el);
    });

    return () => {
      elements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);
}
