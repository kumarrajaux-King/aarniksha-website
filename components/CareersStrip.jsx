const arrow = (
  <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 10h11M11 5.5l4.5 4.5L11 14.5" /></svg>
);

const FEATURED = [
  { title: "Lead AI Architect \u2013 LLMOps", meta: "10\u201312 years \u00B7 Hyderabad" },
  { title: "Salesforce Commerce Cloud (SFCC) Developer", meta: "6\u20137 years \u00B7 Chennai" },
  { title: "Senior ServiceNow Developer \u2013 SPM", meta: "7\u20138 years \u00B7 Remote" },
  { title: "Azure & Power Platform Administrator", meta: "5\u20138 years \u00B7 Remote" },
  { title: "Java Full Stack Developer", meta: "3\u20138 years \u00B7 Hyderabad" },
  { title: "Broadband Operations / Network Domain SME", meta: "10\u201312 years \u00B7 Bangalore" }
];

export default function CareersStrip() {
  return (
    <section id="careers" style={{ background: "#F6F9FE", borderTop: "1px solid #E3EAF6" }}>
      <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 118px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(32px, 5vw, 76px)" }}>
        <div style={{ flex: "1 1 420px", minWidth: "0" }}>
          <p data-reveal style={{ margin: "0 0 18px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Careers</p>
          <h2 data-reveal style={{ margin: "0 0 20px", maxWidth: "19ch", fontSize: "clamp(32px, 4.2vw, 56px)", lineHeight: "1.03", letterSpacing: "-.034em", fontWeight: "800", color: "#101B33" }}>We are hiring across Salesforce, ServiceNow, AI and cloud</h2>
          <p data-reveal style={{ margin: "0 0 clamp(26px, 3vw, 34px)", maxWidth: "50ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.66", color: "#6B7688", textWrap: "pretty" }}>28 open mandates across Salesforce, ServiceNow, AI, cloud, data, SAP and embedded engineering &#8212; in Hyderabad, Bangalore, Mumbai, Chennai and remote. Apply by email and our consultants take it from there.</p>
          <a data-reveal href="/careers#openroles" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#06367E", color: "#fff", fontSize: "15.5px", fontWeight: "700", borderRadius: "999px", padding: "16px 28px", boxShadow: "0 14px 32px rgba(2,16,42,.18)" }}>View all 28 open roles{arrow}</a>
        </div>
        <div data-reveal style={{ flex: "1 1 340px", minWidth: "0", background: "#fff", border: "1px solid #E3EAF6", borderRadius: "22px", padding: "clamp(24px, 2.6vw, 34px)" }}>
          <p style={{ margin: "0 0 14px", fontSize: "11.5px", fontWeight: "800", letterSpacing: ".12em", textTransform: "uppercase", color: "#8A94A6" }}>Featured openings</p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {FEATURED.map((r, i) => (
              <a key={r.title} href="/careers#openroles" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderBottom: i < FEATURED.length - 1 ? "1px solid #EEF3FB" : "none", textDecoration: "none" }}>
                <span style={{ display: "grid", gap: "3px", minWidth: "0" }}>
                  <span style={{ fontSize: "15.5px", fontWeight: "700", letterSpacing: "-.015em", lineHeight: "1.3", color: "#101B33" }}>{r.title}</span>
                  <span style={{ fontSize: "12.5px", fontWeight: "600", color: "#8A94A6" }}>{r.meta}</span>
                </span>
                <span aria-hidden="true" style={{ flex: "0 0 auto", color: "#2F80EC", display: "inline-flex" }}>{arrow}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
