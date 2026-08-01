'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const on = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled((window.pageYOffset || 0) > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <header style={{ position: "sticky", top: "0", zIndex: "60", background: "#06367E", transition: "box-shadow .3s ease, padding .3s ease", boxShadow: scrolled ? "0 10px 30px rgba(2,22,56,.22)" : "none" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(18px, 3.2vw, 40px)", height: "clamp(76px, 6vw, 100px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
      <a href="/" aria-label="Aarniksha Solutions home" style={{ display: "block", flex: "0 0 auto", width: "clamp(56px, 4.4vw, 74px)", height: "clamp(56px, 4.4vw, 74px)", background: "#fff", borderRadius: "16px", padding: "6px", boxShadow: "0 6px 20px rgba(2, 22, 56, .28)" }}>
        <img src="/assets/logo.png" alt="Aarniksha Solutions" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
      </a>

      <nav className="ak-nav" style={{ display: "flex", alignItems: "center", gap: "clamp(18px, 2.4vw, 40px)" }}>
        <a className="x1" href="/" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/") ? "1" : ".72", borderBottomColor: on("/") ? "#6FA8F5" : "transparent" }}>Home</a>
        <a className="x2" href="/about" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/about") ? "1" : ".72", borderBottomColor: on("/about") ? "#6FA8F5" : "transparent" }}>About Us</a>
        <a className="x3" href="/services" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/services") ? "1" : ".72", borderBottomColor: on("/services") ? "#6FA8F5" : "transparent" }}>Services</a>
        <a className="x4" href="/industries" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/industries") ? "1" : ".72", borderBottomColor: on("/industries") ? "#6FA8F5" : "transparent" }}>Industries</a>
        <a className="x5" href="/insights" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/insights") ? "1" : ".72", borderBottomColor: on("/insights") ? "#6FA8F5" : "transparent" }}>Insights</a>
        <a className="x6" href="/careers" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/careers") ? "1" : ".72", borderBottomColor: on("/careers") ? "#6FA8F5" : "transparent" }}>Careers</a>
        <a className="x7" href="/contact" style={{ color: "#fff", fontSize: "16px", fontWeight: "600", letterSpacing: "-.01em", padding: "6px 0", borderBottom: "2px solid transparent", opacity: on("/contact") ? "1" : ".72", borderBottomColor: on("/contact") ? "#6FA8F5" : "transparent" }}>Contact</a>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "12px", flex: "0 0 auto" }}>
        <a className="x8" href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "transparent", color: "#fff", fontSize: "15px", fontWeight: "700", border: "1px solid rgba(255,255,255,.38)", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, border-color .25s ease, transform .25s ease" }}>Contact Us <span style={{ fontSize: "13px" }}>&#8599;</span></a>
        <button className="ak-burger" type="button" onClick={toggleMenu} aria-label="Open menu" style={{ display: "none", width: "46px", height: "46px", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.24)", borderRadius: "12px", cursor: "pointer", padding: "0" }}>
          <span style={{ display: "block", width: "20px", height: "10px", borderTop: "2px solid #fff", borderBottom: "2px solid #fff" }}></span>
        </button>
      </div>
    </div>

    <div className="ak-drawer" style={{ display: menuOpen ? "block" : "none", borderTop: "1px solid rgba(255,255,255,.12)", background: "#06367E", padding: "10px clamp(18px, 3.2vw, 40px) 24px" }}>
      <a href="/about" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>About Us</a>
      <a href="/services" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>Services</a>
      <a href="/industries" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>Industries</a>
      <a href="/insights" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>Insights</a>
      <a href="/careers" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0", borderBottom: "1px solid rgba(255,255,255,.1)" }}>Careers</a>
      <a href="/contact" onClick={closeMenu} style={{ display: "block", color: "#fff", fontSize: "17px", fontWeight: "600", padding: "15px 0" }}>Contact</a>
    </div>
  </header>
  );
}
