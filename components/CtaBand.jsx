'use client';
import { useEnquiry } from './Enquiry';

export default function CtaBand() {
  const { openEnquiry } = useEnquiry();
  return (
  <section style={{ position: "relative", background: "#2F80EC", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", bottom: "-60%", right: "-6%", width: "46vw", height: "46vw", borderRadius: "50%", background: "radial-gradient(circle at 40% 40%, rgba(255,255,255,.14), rgba(255,255,255,0) 70%)", pointerEvents: "none" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 118px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }}>
      <div style={{ flex: "1 1 400px", minWidth: "0" }}>
        <p data-reveal style={{ margin: "0 0 20px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.82)" }}>Ready to Build Your Dream Team?</p>
        <h2 data-reveal style={{ margin: "0", maxWidth: "14ch", fontSize: "clamp(38px, 5.4vw, 72px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>Let's Build Success Together</h2>
      </div>
      <div style={{ flex: "1 1 420px", minWidth: "0" }}>
        <p data-reveal style={{ margin: "0 0 32px", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.62", color: "rgba(255,255,255,.94)", textWrap: "pretty" }}>Whether you're a startup, a growing business, or a large enterprise, Aarniksha Solutions Private Limited is here to help you find the right talent and build high-performing teams. From sourcing exceptional professionals to delivering end-to-end recruitment solutions, we are committed to supporting your business at every stage of its growth journey.</p>
        <button className="x29" data-reveal type="button" onClick={openEnquiry} style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#06367E", fontSize: "16px", fontWeight: "700", border: "none", borderRadius: "999px", padding: "18px 32px", cursor: "pointer", boxShadow: "0 12px 28px rgba(2,22,56,.18)", transition: "transform .25s ease, box-shadow .25s ease" }}>Talk to an Expert <span style={{ fontSize: "13px" }}>&#8599;</span></button>
      </div>
    </div>
  </section>
  );
}
