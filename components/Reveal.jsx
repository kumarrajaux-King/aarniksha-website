'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const vh = window.innerHeight || 800;
    const pending = [];
    document.querySelectorAll('[data-reveal]').forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.92) return;
      el.style.opacity = '0';
      el.style.transform = 'translateY(26px)';
      el.style.transition = 'opacity .7s cubic-bezier(.2,.7,.3,1), transform .7s cubic-bezier(.2,.7,.3,1)';
      pending.push(el);
    });
    if (!pending.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.hasAttribute && c.hasAttribute('data-reveal')) : [];
        el.style.transitionDelay = Math.min(Math.max(0, sibs.indexOf(el)) * 70, 350) + 'ms';
        el.style.opacity = '1';
        el.style.transform = 'none';
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });
    pending.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
