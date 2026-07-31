export default function WhoWeAre() {
  return (
  <section style={{ background: "#fff" }}>
    <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 126px) clamp(20px, 4vw, 40px)" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(20px, 4vw, 56px)", alignItems: "flex-end" }}>
        <p data-reveal style={{ flex: "0 0 auto", margin: "0 0 10px", fontSize: "13px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#2F80EC" }}>Who We Are</p>
        <h2 data-reveal style={{ flex: "1 1 520px", margin: "0", maxWidth: "20ch", fontSize: "clamp(34px, 4.7vw, 62px)", lineHeight: "1.04", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Your Trusted Talent &amp; Business Solutions Partner</h2>
      </div>

      <div style={{ height: "1px", background: "#E5EAF3", margin: "clamp(34px, 4vw, 54px) 0 clamp(34px, 4vw, 52px)" }}></div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 84px)" }}>
        <div data-reveal style={{ flex: "1 1 400px", minWidth: "0", display: "flex", gap: "18px" }}>
          <span aria-hidden="true" style={{ flex: "0 0 auto", fontSize: "54px", lineHeight: ".8", fontWeight: "800", color: "#2F80EC" }}>&#8220;</span>
          <p style={{ margin: "0", fontSize: "clamp(24px, 2.5vw, 35px)", lineHeight: "1.22", letterSpacing: "-.022em", fontWeight: "700", color: "#06367E", textWrap: "pretty" }}>At Aarniksha Solutions, we don't just fill positions&#8212;we build relationships, strengthen businesses, and create opportunities for people to succeed.</p>
        </div>
        <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
          <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18px)", lineHeight: "1.66", color: "#5B6577", textWrap: "pretty" }}>Aarniksha Solutions Private Limited is a dynamic recruitment, staffing, and business solutions company dedicated to helping organizations build exceptional teams and achieve sustainable growth.</p>
          <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18px)", lineHeight: "1.66", color: "#5B6577", textWrap: "pretty" }}>With a strong commitment to professionalism, integrity, and excellence, we deliver customized workforce solutions that meet the evolving needs of businesses across diverse industries. From startups to large enterprises, we partner with our clients to identify, attract, and retain the right talent.</p>
          <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18px)", lineHeight: "1.66", color: "#5B6577", textWrap: "pretty" }}>Our approach combines industry expertise, technology-driven recruitment, and a deep understanding of client requirements to ensure every hiring decision creates long-term value.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
