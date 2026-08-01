'use client';
import { useEffect, useRef, useState } from 'react';
import { useEnquiry } from './Enquiry';

export default function ServicesSection() {
  const { openEnquiry } = useEnquiry();
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const goTo = (i) => {
    const t = trackRef.current;
    if (!t || !t.children[i]) return;
    t.scrollTo({ left: t.children[i].offsetLeft - t.offsetLeft, behavior: 'smooth' });
  };
  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    const onScroll = () => {
      const first = t.children[0];
      const w = first ? first.offsetWidth + 20 : 1;
      setActive(Math.round(t.scrollLeft / w));
    };
    t.addEventListener('scroll', onScroll, { passive: true });
    return () => t.removeEventListener('scroll', onScroll);
  }, []);
  return (
  <section id="services" style={{ background: "#E9EFFB" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 126px) clamp(20px, 4vw, 40px)" }}>
      <p data-reveal style={{ margin: "0 0 22px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Our Services</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(24px, 4vw, 64px)", alignItems: "flex-end", marginBottom: "clamp(38px, 4.6vw, 62px)" }}>
        <h2 data-reveal style={{ flex: "1 1 420px", margin: "0", maxWidth: "16ch", fontSize: "clamp(34px, 4.7vw, 62px)", lineHeight: "1.04", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Comprehensive Talent &amp; Business Solutions</h2>
        <p data-reveal style={{ flex: "1 1 340px", margin: "0 0 8px", maxWidth: "46ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.62", color: "#5B6577", textWrap: "pretty" }}>At Aarniksha Solutions Private Limited, we offer end-to-end workforce and business solutions that enable organizations to grow with confidence and efficiency.</p>
      </div>

      <div ref={trackRef} className="ak-svc-track ak-track" data-track style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(258px, 1fr))", gap: "clamp(18px, 1.6vw, 24px)" }}>
        <article className="x13" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#06367E", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="15" y="15" width="18" height="18" rx="4" fill="#FFFFFF" fillOpacity=".2" /><rect x="20.5" y="20.5" width="7" height="7" rx="1.6" fill="#9CC6FA" stroke="none" /><path d="M20 15v-4M28 15v-4M20 37v-4M28 37v-4M15 20h-4M15 28h-4M37 20h-4M37 28h-4" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>IT Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Providing highly skilled technology professionals across software development, cloud, data, and infrastructure domains.</p>
            <button className="x14" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x15" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#0A4497", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 39V14a2 2 0 012-2h12a2 2 0 012 2v25" /><path d="M28 22h6a2 2 0 012 2v15" /><path d="M9 39h30" /><path d="M17 19h6M17 25h6M17 31h6" stroke="#9CC6FA" /><rect x="31" y="28" width="2.6" height="4" rx="1" fill="#9CC6FA" stroke="none" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Non-IT Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Connecting organizations with qualified professionals across finance, HR, operations, sales, and administration.</p>
            <button className="x16" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x17" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#123A86", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="19" r="9" fill="#FFFFFF" fillOpacity=".18" /><path d="M20 19.4l3 3 5-5.4" stroke="#9CC6FA" /><path d="M18.5 26.5L16 40l8-4.4 8 4.4-2.5-13.5" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Permanent Hiring</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Helping businesses recruit exceptional full-time professionals who drive long-term organizational growth.</p>
            <button className="x18" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x19" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#0B4A78", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M29 10H16a2 2 0 00-2 2v24a2 2 0 002 2h8" /><path d="M29 10l6 6v6" /><path d="M19 18h8M19 24h6" stroke="#9CC6FA" /><circle cx="31" cy="32" r="7" fill="#FFFFFF" fillOpacity=".18" /><path d="M31 29v3l2.4 1.6" stroke="#9CC6FA" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Contract Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Delivering flexible workforce solutions for project-based, short-term, and seasonal requirements.</p>
            <button className="x20" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x21" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#06367E", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="22" cy="22" r="10.5" fill="#FFFFFF" fillOpacity=".16" /><path d="M29.6 29.6L38 38" /><circle cx="22" cy="19.4" r="3.2" stroke="#9CC6FA" /><path d="M16.8 27.4a5.4 5.4 0 0110.4 0" stroke="#9CC6FA" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Executive Search</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Identifying and recruiting senior leadership professionals and niche specialists for business-critical roles.</p>
            <button className="x22" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x23" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#0A4497", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M36 20a13 13 0 00-22.4-4.6" /><path d="M12 28a13 13 0 0022.4 4.6" /><path d="M13.6 9v6.4H20M34.4 39v-6.4H28" /><circle cx="24" cy="24" r="5" fill="#9CC6FA" stroke="none" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Recruitment Process Outsourcing (RPO)</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Managing the complete recruitment lifecycle, from talent sourcing to onboarding, as an extension of your team.</p>
            <button className="x24" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x25" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#123A86", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M24 9l12 4.6v10.8c0 7.6-5 12.6-12 14.6-7-2-12-7-12-14.6V13.6L24 9z" fill="#FFFFFF" fillOpacity=".16" /><path d="M19 24.2l3.4 3.4L30 20" stroke="#9CC6FA" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Payroll &amp; Compliance Support</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Ensuring seamless payroll management and statutory compliance across every engagement.</p>
            <button className="x26" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x27" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div aria-hidden="true" style={{ background: "#0B4A78", backgroundImage: "repeating-linear-gradient(60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(-60deg, rgba(255,255,255,.09) 0 1px, transparent 1px 24px), repeating-linear-gradient(0deg, rgba(255,255,255,.07) 0 1px, transparent 1px 24px)", aspectRatio: "293 / 200", display: "grid", placeItems: "center" }}><svg width="140" height="140" viewBox="0 0 48 48" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="19" cy="18" r="5" /><path d="M11 33a8 8 0 0116 0" /><rect x="26" y="10" width="14" height="11" rx="3" fill="#FFFFFF" fillOpacity=".18" /><path d="M30 15.5h6" stroke="#9CC6FA" /><path d="M31 21l-1.4 3.6L33 21" /></svg></div>
          <div style={{ padding: "24px 22px 28px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "10px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>HR Consulting</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688" }}>Providing strategic HR advisory services, workforce planning, and organisational development support.</p>
            <button className="x28" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
      </div>
      <div className="ak-svc-dots" style={{ display: "none", justifyContent: "center", gap: "9px", marginTop: "26px" }}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <button key={i} type="button" aria-label={"Go to card " + (i + 1)} onClick={() => goTo(i)} style={{ width: active === i ? "22px" : "8px", height: "8px", padding: 0, borderRadius: "999px", border: "none", cursor: "pointer", background: active === i ? "#2F80EC" : "#C3D3EE", transition: "background .25s ease, width .25s ease" }}></button>
        ))}
      </div>
    </div>
  </section>
  );
}
