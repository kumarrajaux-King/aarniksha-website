'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = Math.max(1, (doc.scrollHeight || 0) - window.innerHeight);
      setPct(Math.min(100, ((window.pageYOffset || 0) / max) * 100));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  return (
  <div style={{ position: "fixed", top: "0", left: "0", height: "3px", width: pct + "%", background: "linear-gradient(90deg, #2F80EC, #6FA8F5)", zIndex: "90" }}></div>
  );
}
