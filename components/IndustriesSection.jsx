'use client';
import { useRef, useState } from 'react';

export default function IndustriesSection() {
  const trackRef = useRef(null);
  const [active, setActive] = useState('all');
  const pick = (g) => {
    setActive(g);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
  };
  const step = (dir) => {
    const t = trackRef.current;
    if (!t) return;
    const card = t.querySelector('article');
    const w = card ? card.getBoundingClientRect().width + 22 : 300;
    t.scrollBy({ left: dir * w, behavior: 'smooth' });
  };
  return (
  <section id="industries" style={{ background: "#E9EFFB" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 126px) clamp(20px, 4vw, 40px)" }}>
      <p data-reveal style={{ margin: "0 0 22px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Industries We Serve</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px, 4vw, 64px)", alignItems: "flex-start", marginBottom: "clamp(38px, 4.6vw, 58px)" }}>
        <h2 data-reveal style={{ flex: "1 1 420px", margin: "0", maxWidth: "15ch", fontSize: "clamp(34px, 4.7vw, 62px)", lineHeight: "1.04", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Delivering Talent Across Diverse Industries</h2>
        <p data-reveal style={{ flex: "1 1 340px", margin: "0", maxWidth: "46ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.62", color: "#5B6577", textWrap: "pretty" }}>At Aarniksha Solutions Private Limited, we understand that every industry has unique workforce challenges. Our domain expertise enables us to identify and deliver professionals who possess the right skills, experience, and cultural fit to help organizations succeed.</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px", marginBottom: "clamp(22px, 2.4vw, 30px)" }}>
        <div role="tablist" style={{ display: "flex", flexWrap: "wrap", gap: "9px" }}>
          <button type="button" data-group="all" onClick={() => pick("all")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "all" ? "#06367E" : "#fff", color: active === "all" ? "#fff" : "#43506A", borderColor: active === "all" ? "#06367E" : "#DCE5F5" }}>All Industries<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>10</span></button>
          <button type="button" data-group="tech" onClick={() => pick("tech")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "tech" ? "#06367E" : "#fff", color: active === "tech" ? "#fff" : "#43506A", borderColor: active === "tech" ? "#06367E" : "#DCE5F5" }}>Technology<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>2</span></button>
          <button type="button" data-group="finance" onClick={() => pick("finance")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "finance" ? "#06367E" : "#fff", color: active === "finance" ? "#fff" : "#43506A", borderColor: active === "finance" ? "#06367E" : "#DCE5F5" }}>Finance<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>1</span></button>
          <button type="button" data-group="healthcare" onClick={() => pick("healthcare")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "healthcare" ? "#06367E" : "#fff", color: active === "healthcare" ? "#fff" : "#43506A", borderColor: active === "healthcare" ? "#06367E" : "#DCE5F5" }}>Healthcare<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>1</span></button>
          <button type="button" data-group="industrial" onClick={() => pick("industrial")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "industrial" ? "#06367E" : "#fff", color: active === "industrial" ? "#fff" : "#43506A", borderColor: active === "industrial" ? "#06367E" : "#DCE5F5" }}>Industrial &amp; Energy<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>4</span></button>
          <button type="button" data-group="consumer" onClick={() => pick("consumer")} style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#fff", color: "#43506A", fontSize: "14px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "999px", padding: "11px 20px", cursor: "pointer", transition: "background .25s ease, color .25s ease, border-color .25s ease" , background: active === "consumer" ? "#06367E" : "#fff", color: active === "consumer" ? "#fff" : "#43506A", borderColor: active === "consumer" ? "#06367E" : "#DCE5F5" }}>Consumer &amp; Services<span style={{ fontSize: "11.5px", fontWeight: "700", opacity: ".6" }}>2</span></button>
        </div>
        <div style={{ display: "flex", gap: "10px", flex: "0 0 auto" }}>
          <button className="x31" type="button" aria-label="Scroll industries left" onClick={() => step(-1)} style={{ width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", color: "#06367E", fontSize: "17px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "50%", cursor: "pointer", transition: "background .25s ease, color .25s ease" }}>&#8592;</button>
          <button className="x32" type="button" aria-label="Scroll industries right" onClick={() => step(1)} style={{ width: "44px", height: "44px", display: "inline-flex", alignItems: "center", justifyContent: "center", background: "#fff", color: "#06367E", fontSize: "17px", fontWeight: "700", border: "1px solid #DCE5F5", borderRadius: "50%", cursor: "pointer", transition: "background .25s ease, color .25s ease" }}>&#8594;</button>
        </div>
      </div>

      <div ref={trackRef} className="ak-track" data-track style={{ display: "flex", gap: "clamp(16px, 1.4vw, 22px)", overflowX: "auto", scrollSnapType: "x mandatory", scrollbarWidth: "none", scrollBehavior: "smooth", padding: "4px 4px 12px", margin: "0 -4px" }}>
        <article className="x33" data-reveal data-group="tech" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "tech") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Information Technology (IT)</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Software Development</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Cloud Computing</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>AI &amp; ML</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Cybersecurity</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Data Analytics</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>ERP</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>DevOps</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Infrastructure</li>
          </ul>
        </article>
        <article className="x34" data-reveal data-group="finance" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "finance") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Banking, Financial Services &amp; Insurance (BFSI)</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Banking</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Financial Services</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Insurance</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>FinTech</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Risk &amp; Compliance</li>
          </ul>
        </article>
        <article className="x35" data-reveal data-group="healthcare" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "healthcare") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Healthcare &amp; Life Sciences</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Hospitals</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Pharmaceuticals</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Medical Devices</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Healthcare Services</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Clinical Research</li>
          </ul>
        </article>
        <article className="x36" data-reveal data-group="industrial" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "industrial") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Engineering &amp; Manufacturing</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Automotive</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Industrial Manufacturing</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Heavy Engineering</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Process Industries</li>
          </ul>
        </article>
        <article className="x37" data-reveal data-group="tech" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "tech") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Telecom &amp; Digital Services</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Telecommunications</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Network Operations</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Digital Transformation</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>ITES</li>
          </ul>
        </article>
        <article className="x38" data-reveal data-group="consumer" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "consumer") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Retail &amp; E-Commerce</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Retail Chains</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Online Marketplaces</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Supply Chain</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Customer Experience</li>
          </ul>
        </article>
        <article className="x39" data-reveal data-group="industrial" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "industrial") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Logistics &amp; Supply Chain</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Warehousing</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Transportation</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Procurement</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Inventory Management</li>
          </ul>
        </article>
        <article className="x40" data-reveal data-group="industrial" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "industrial") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Infrastructure, Construction &amp; Real Estate</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Construction</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>EPC</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Smart Infrastructure</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Facility Management</li>
          </ul>
        </article>
        <article className="x41" data-reveal data-group="industrial" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "industrial") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Energy &amp; Utilities</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Power</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Renewable Energy</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Oil &amp; Gas</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Utilities</li>
          </ul>
        </article>
        <article className="x42" data-reveal data-group="consumer" style={{ flex: "0 0 clamp(246px, 24vw, 300px)", scrollSnapAlign: "start", background: "#F8FAFE", border: "1px solid #DCE5F5", borderRadius: "16px", padding: "26px 22px 28px", transition: "transform .3s ease, box-shadow .3s ease, border-color .3s ease" , display: (active === "all" || active === "consumer") ? undefined : "none" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", lineHeight: "1.2", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Education &amp; Corporate Services</h3>
          <ul style={{ margin: "0", padding: "0", listStyle: "none", display: "flex", flexDirection: "column", gap: "7px", fontSize: "14.5px", lineHeight: "1.5", color: "#6B7688" }}>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Education</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>HR</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Administration</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Legal</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Sales &amp; Marketing</li>
            <li style={{ position: "relative", paddingLeft: "15px" }}><span style={{ position: "absolute", left: "0", top: ".62em", width: "5px", height: "5px", borderRadius: "50%", background: "#2F80EC" }}></span>Business Operations</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
  );
}
