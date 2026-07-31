export default function Commitment() {
  return (
  <section style={{ background: "#2F80EC" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(64px, 8vw, 108px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(30px, 4vw, 64px)", alignItems: "center" }}>
      <div style={{ flex: "1 1 340px", minWidth: "0" }}>
        <p data-reveal style={{ margin: "0 0 18px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.82)" }}>Our Commitment</p>
        <h2 data-reveal style={{ margin: "0", maxWidth: "11ch", fontSize: "clamp(38px, 5vw, 66px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>Our Commitment</h2>
      </div>
      <div style={{ flex: "2 1 520px", minWidth: "0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))", gap: "clamp(14px, 1.4vw, 20px)" }}>
        <div className="x43" data-reveal style={{ background: "rgba(255,255,255,.11)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "16px", padding: "24px 22px 26px", transition: "background .3s ease, transform .3s ease" }}>
          <p style={{ margin: "0 0 34px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", color: "rgba(255,255,255,.7)" }}>01</p>
          <h3 style={{ margin: "0 0 12px", fontSize: "19px", lineHeight: "1.25", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Trusted Partnerships</h3>
          <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "rgba(255,255,255,.86)" }}>We build long-term relationships based on integrity, transparency, and mutual success.</p>
        </div>
        <div className="x44" data-reveal style={{ background: "rgba(255,255,255,.11)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "16px", padding: "24px 22px 26px", transition: "background .3s ease, transform .3s ease" }}>
          <p style={{ margin: "0 0 34px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", color: "rgba(255,255,255,.7)" }}>02</p>
          <h3 style={{ margin: "0 0 12px", fontSize: "19px", lineHeight: "1.25", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Quality-First Approach</h3>
          <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "rgba(255,255,255,.86)" }}>Every candidate and every client engagement reflects our commitment to excellence.</p>
        </div>
        <div className="x45" data-reveal style={{ background: "rgba(255,255,255,.11)", border: "1px solid rgba(255,255,255,.2)", borderRadius: "16px", padding: "24px 22px 26px", transition: "background .3s ease, transform .3s ease" }}>
          <p style={{ margin: "0 0 34px", fontSize: "12px", fontWeight: "800", letterSpacing: ".1em", color: "rgba(255,255,255,.7)" }}>03</p>
          <h3 style={{ margin: "0 0 12px", fontSize: "19px", lineHeight: "1.25", letterSpacing: "-.015em", fontWeight: "700", color: "#fff" }}>Dedicated Support</h3>
          <p style={{ margin: "0", fontSize: "14.5px", lineHeight: "1.6", color: "rgba(255,255,255,.86)" }}>Our team works closely with clients and candidates to ensure a smooth and successful recruitment experience.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
