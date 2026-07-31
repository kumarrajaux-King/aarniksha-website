'use client';
import { useState } from 'react';

export default function WhyChooseUs() {
  const [open, setOpen] = useState([true, true, true, true, true, true]);
  const toggleItem = (e) => {
    const i = parseInt(e.currentTarget.getAttribute('data-idx'), 10);
    if (isNaN(i)) return;
    setOpen((s) => s.map((v, j) => (j === i ? !v : v)));
  };
  return (
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: "-18%", right: "-22%", width: "58vw", height: "58vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.07)", pointerEvents: "none" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", bottom: "-30%", right: "-8%", width: "40vw", height: "40vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.06)", pointerEvents: "none" }}></div>
    <div className="ak-why-art" aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "min(58%, 760px)", pointerEvents: "none", overflow: "hidden" }}>
      <img src="/assets/why-choose-tech.png" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 50%", mixBlendMode: "screen", opacity: ".62", filter: "saturate(1.05) contrast(1.02)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 22%, #000 62%), linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)", maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.35) 22%, #000 62%), linear-gradient(180deg, transparent 0%, #000 26%, #000 74%, transparent 100%)", WebkitMaskComposite: "source-in", maskComposite: "intersect" }} />
      <div style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.82) 26%, rgba(6,54,126,.28) 62%, rgba(6,54,126,.42) 100%)" }}></div>
    </div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 124px) clamp(20px, 4vw, 40px)" }}>
      <p data-reveal style={{ margin: "0 0 clamp(30px, 3.6vw, 46px)", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#7EAEF6" }}>Why Choose Us</p>
      <div style={{ maxWidth: "560px" }}>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="0" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>01</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Industry Expertise</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[0] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[0] ? "400px" : "0px"), opacity: (open[0] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>Our experienced recruitment professionals understand diverse industries, technologies, and business requirements, enabling us to identify the right talent for every role.</p>
          </div>
        </div>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="1" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>02</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Quality-Driven Hiring</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[1] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[1] ? "400px" : "0px"), opacity: (open[1] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>Every candidate undergoes a comprehensive screening and evaluation process to ensure the best fit for your organization.</p>
          </div>
        </div>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="2" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>03</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Faster Hiring Process</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[2] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[2] ? "400px" : "0px"), opacity: (open[2] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>Our streamlined recruitment methodology reduces hiring timelines, helping you secure top talent quickly without compromising on quality.</p>
          </div>
        </div>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="3" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>04</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Customized Workforce Solutions</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[3] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[3] ? "400px" : "0px"), opacity: (open[3] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>Every organization is unique. We tailor our staffing and recruitment strategies to align with your business objectives and workforce needs.</p>
          </div>
        </div>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="4" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>05</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Integrity &amp; Transparency</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[4] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[4] ? "400px" : "0px"), opacity: (open[4] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>We believe in honest communication, ethical business practices, and complete transparency throughout every stage of the recruitment process.</p>
          </div>
        </div>
        <div data-reveal style={{ borderTop: "1px solid rgba(255,255,255,.16)", borderBottom: "1px solid rgba(255,255,255,.16)" }}>
          <button type="button" data-idx="5" onClick={toggleItem} style={{ width: "100%", display: "flex", alignItems: "flex-start", gap: "28px", background: "transparent", border: "none", padding: "26px 0 0", cursor: "pointer", textAlign: "left" }}>
            <span style={{ flex: "0 0 auto", width: "26px", fontSize: "12px", fontWeight: "800", letterSpacing: ".08em", color: "#7EAEF6", paddingTop: "6px" }}>06</span>
            <span style={{ flex: "1", fontSize: "clamp(18px, 1.4vw, 21px)", lineHeight: "1.3", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Long-Term Partnerships</span>
            <span style={{ flex: "0 0 auto", color: "#7EAEF6", fontSize: "18px", fontWeight: "700", transition: "transform .35s ease", transform: `rotate(${(open[5] ? "45deg" : "0deg")})` }}>&#43;</span>
          </button>
          <div style={{ overflow: "hidden", transition: "max-height .45s cubic-bezier(.4,0,.2,1), opacity .3s ease", maxHeight: (open[5] ? "400px" : "0px"), opacity: (open[5] ? 1 : 0) }}>
            <p style={{ margin: "0", padding: "10px 0 30px 54px", fontSize: "15.5px", lineHeight: "1.62", color: "rgba(255,255,255,.72)", textWrap: "pretty" }}>Our focus is not just on filling positions but on building trusted, long-lasting relationships that contribute to the sustained growth of our clients and candidates.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
