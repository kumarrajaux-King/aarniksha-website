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
          <img src="/assets/service-it-staffing.jpg" alt="IT Staffing" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>IT Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Providing highly skilled technology professionals across software development, cloud, data, and infrastructure domains.</p>
            <button className="x14" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x15" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <img src="/assets/service-non-it-staffing.jpg" alt="Non-IT Staffing" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Non-IT Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Connecting organizations with qualified professionals across finance, HR, operations, sales, and administration.</p>
            <button className="x16" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x17" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <img src="/assets/service-permanent-hiring.jpg" alt="Permanent Hiring" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Permanent Hiring</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Helping businesses recruit exceptional full-time professionals who drive long-term organizational growth.</p>
            <button className="x18" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x19" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <img src="/assets/service-contract-staffing.jpg" alt="Contract Staffing" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Contract Staffing</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Delivering flexible workforce solutions for project-based, short-term, and seasonal requirements.</p>
            <button className="x20" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x21" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div style={{ position: "relative" }}>
            <img src="https://cdn.pixabay.com/photo/2015/01/09/11/08/startup-594090_1280.jpg" alt="Executive Search" loading="lazy" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Executive Search</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Identifying and recruiting senior leadership professionals and niche specialists for business-critical roles.</p>
            <button className="x22" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x23" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div style={{ position: "relative" }}>
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/11/laptops-593296_1280.jpg" alt="Recruitment Process Outsourcing" loading="lazy" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Recruitment Process Outsourcing (RPO)</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Managing the complete recruitment lifecycle, from talent sourcing to onboarding, as an extension of your team.</p>
            <button className="x24" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x25" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div style={{ position: "relative" }}>
            <img src="https://cdn.pixabay.com/photo/2018/03/03/20/02/laptop-3196481_1280.jpg" alt="Payroll and Compliance Support" loading="lazy" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>Payroll &amp; Compliance Support</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Ensuring seamless payroll management and statutory compliance across every engagement.</p>
            <button className="x26" type="button" onClick={openEnquiry} style={{ alignSelf: "flex-start", marginTop: "14px", background: "#2F80EC", color: "#fff", fontSize: "14px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "13px 24px", cursor: "pointer", transition: "background .25s ease, transform .25s ease" }}>Know more</button>
          </div>
        </article>
        <article className="x27" data-reveal style={{ flex: "0 0 78%", scrollSnapAlign: "start", background: "#fff", borderRadius: "18px", overflow: "hidden", boxShadow: "0 10px 30px rgba(16,27,51,.06)", display: "flex", flexDirection: "column", transition: "transform .3s ease, box-shadow .3s ease" }}>
          <div style={{ position: "relative" }}>
            <img src="https://cdn.pixabay.com/photo/2015/01/09/11/09/meeting-594091_1280.jpg" alt="HR Consulting" loading="lazy" style={{ width: "100%", aspectRatio: "293 / 186", objectFit: "cover", display: "block" }} />
          </div>
          <div style={{ padding: "22px 22px 26px", display: "flex", flexDirection: "column", gap: "12px", flex: "1" }}>
            <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.22", letterSpacing: "-.02em", fontWeight: "700", color: "#101B33" }}>HR Consulting</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#6B7688", display: "-webkit-box", WebkitLineClamp: "2", WebkitBoxOrient: "vertical", overflow: "hidden" }}>Providing strategic HR advisory services, workforce planning, and organisational development support.</p>
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
