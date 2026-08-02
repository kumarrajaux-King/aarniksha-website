const arrow = (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 10h11M11 5.5l4.5 4.5L11 14.5" /></svg>
);

export default function CareersStrip() {
  return (
    <section id="careers" style={{ background: "#F6F9FE", borderTop: "1px solid #E3EAF6" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 118px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px, 5vw, 76px)" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0" }}>
          <p data-reveal style={{ margin: "0 0 18px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Careers</p>
          <h2 data-reveal style={{ margin: "0 0 20px", maxWidth: "17ch", fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: "1.03", letterSpacing: "-.034em", fontWeight: "800", color: "#101B33" }}>We are hiring across engineering, cloud and data</h2>
          <p data-reveal style={{ margin: "0 0 clamp(26px, 3vw, 34px)", maxWidth: "48ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.66", color: "#6B7688", textWrap: "pretty" }}>Five open mandates in Hyderabad right now — full-time and contract to hire. Apply by email and our consultants take it from there.</p>
          <a data-reveal href="/careers" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#06367E", color: "#fff", fontSize: "15.5px", fontWeight: "700", borderRadius: "999px", padding: "16px 28px", boxShadow: "0 14px 32px rgba(2,16,42,.18)" }}>View open roles{arrow}</a>
        </div>
        <div data-reveal style={{ flex: "1 1 340px", minWidth: "0", background: "#fff", border: "1px solid #E3EAF6", borderRadius: "22px", padding: "clamp(24px, 2.6vw, 34px)" }}>
          <p style={{ margin: "0 0 18px", fontSize: "11.5px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#8A94A6" }}>Open positions</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <a key="Java Full Stack Developer" href="/careers" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "15px 0", borderBottom: "1px solid #EEF3FB", fontSize: "16px", fontWeight: "700", letterSpacing: "-.015em", color: "#101B33", textDecoration: "none" }}>Java Full Stack Developer<span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span></a>
            <a key="AI / ML Engineer" href="/careers" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "15px 0", borderBottom: "1px solid #EEF3FB", fontSize: "16px", fontWeight: "700", letterSpacing: "-.015em", color: "#101B33", textDecoration: "none" }}>AI / ML Engineer<span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span></a>
            <a key="DevOps / Cloud Engineer" href="/careers" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "15px 0", borderBottom: "1px solid #EEF3FB", fontSize: "16px", fontWeight: "700", letterSpacing: "-.015em", color: "#101B33", textDecoration: "none" }}>DevOps / Cloud Engineer<span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span></a>
            <a key="Data Engineer" href="/careers" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "15px 0", borderBottom: "1px solid #EEF3FB", fontSize: "16px", fontWeight: "700", letterSpacing: "-.015em", color: "#101B33", textDecoration: "none" }}>Data Engineer<span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span></a>
            <a key="ServiceNow Developer / GRC" href="/careers" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "15px 0", fontSize: "16px", fontWeight: "700", letterSpacing: "-.015em", color: "#101B33", textDecoration: "none" }}>ServiceNow Developer / GRC<span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
