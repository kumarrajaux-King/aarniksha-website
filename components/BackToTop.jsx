'use client';
import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow((window.pageYOffset || 0) > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
  <button className="x66" type="button" onClick={scrollTop} aria-label="Back to top" style={{ position: "fixed", right: "clamp(16px, 2vw, 30px)", bottom: "clamp(16px, 2vw, 30px)", width: "50px", height: "50px", borderRadius: "50%", background: "#06367E", color: "#fff", border: "none", fontSize: "17px", cursor: "pointer", opacity: show ? 1 : 0, pointerEvents: show ? "auto" : "none", transform: show ? "none" : "translateY(10px)", transition: "opacity .3s ease, transform .3s ease, background .25s ease", boxShadow: "0 12px 28px rgba(2,22,56,.3)", zIndex: "70" }}>&#8593;</button>
  );
}
