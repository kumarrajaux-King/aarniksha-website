'use client';
import { useEnquiry } from './Enquiry';

export default function Footer() {
  const { openEnquiry } = useEnquiry();
  return (
  <footer style={{ background: "#fff" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(56px, 6.4vw, 92px) clamp(20px, 4vw, 40px) 36px", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 4vw, 56px)" }}>
      <div style={{ flex: "1 1 240px", minWidth: "0" }}>
        <div style={{ width: "116px", height: "116px", background: "#fff", border: "1px solid #EDF1F8", borderRadius: "22px", padding: "10px", boxShadow: "0 10px 28px rgba(16,27,51,.07)" }}>
          <img src="/assets/logo.png" alt="Aarniksha Solutions" style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
        </div>
        <p style={{ margin: "24px 0 0", maxWidth: "20ch", fontSize: "17px", lineHeight: "1.35", letterSpacing: "-.015em", fontWeight: "700", color: "#06367E" }}>Technology that moves business forward.</p>
      </div>
      <div style={{ flex: "3 1 620px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "clamp(24px, 3vw, 40px)" }}>
        <div>
          <p style={{ margin: "0 0 20px", fontSize: "12px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#2F80EC" }}>Company</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            <a className="x52" href="/about" style={{ fontSize: "15.5px", color: "#43506A" }}>About Us</a>
            <a className="x53" href="/industries" style={{ fontSize: "15.5px", color: "#43506A" }}>Industries</a>
            <a className="x54" href="/insights" style={{ fontSize: "15.5px", color: "#43506A" }}>How We Work</a>
            <a className="x55" href="/services" style={{ fontSize: "15.5px", color: "#43506A" }}>Training Partnership</a>
            <a className="x56" href="/insights" style={{ fontSize: "15.5px", color: "#43506A" }}>Insights</a>
            <a className="x57" href="/careers" style={{ fontSize: "15.5px", color: "#43506A" }}>Careers</a>
          </div>
        </div>
        <div>
          <p style={{ margin: "0 0 20px", fontSize: "12px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#2F80EC" }}>Start Here</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "13px", alignItems: "flex-start" }}>
            <button className="x58" type="button" onClick={openEnquiry} style={{ background: "none", border: "none", padding: "0", fontSize: "15.5px", color: "#43506A", cursor: "pointer" }}>Start a Project</button>
            <button className="x59" type="button" onClick={openEnquiry} style={{ background: "none", border: "none", padding: "0", fontSize: "15.5px", color: "#43506A", cursor: "pointer" }}>Hire Talent</button>
            <a className="x60" href="/contact" style={{ fontSize: "15.5px", color: "#43506A" }}>Contact Us</a>
          </div>
        </div>
        <div>
          <p style={{ margin: "0 0 20px", fontSize: "12px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#2F80EC" }}>Connect / Socials</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
            <a className="x61" href="#top" style={{ fontSize: "15.5px", color: "#43506A" }}>LinkedIn</a>
            <a className="x62" href="#top" style={{ fontSize: "15.5px", color: "#43506A" }}>Instagram</a>
          </div>
        </div>
      </div>
    </div>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(20px, 4vw, 40px)" }}>
      <div style={{ height: "1px", background: "#E9EDF5" }}></div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "space-between", alignItems: "center", padding: "26px 0 34px" }}>
        <p style={{ margin: "0", fontSize: "14px", color: "#7A859A" }}>&#169; 2026 Aarniksha Solutions. All rights reserved.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(18px, 2vw, 34px)" }}>
          <a className="x63" href="/legal#privacy" style={{ fontSize: "14px", color: "#7A859A" }}>Privacy Policy</a>
          <a className="x64" href="/legal#terms" style={{ fontSize: "14px", color: "#7A859A" }}>Terms of Use</a>
          <a className="x65" href="/legal#refund" style={{ fontSize: "14px", color: "#7A859A" }}>Refund Policy</a>
        </div>
      </div>
    </div>
  </footer>
  );
}
