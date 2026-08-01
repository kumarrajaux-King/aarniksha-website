export default function AboutStrip() {
  return (
  <section id="about" style={{ position: "relative", background: "#1D6AE3", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: "-30%", right: "-12%", width: "46vw", height: "46vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", pointerEvents: "none" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 128px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 80px)" }}>
      <div style={{ flex: "1 1 380px", minWidth: "0" }}>
        <h2 data-reveal style={{ margin: "0", fontSize: "clamp(46px, 6vw, 80px)", lineHeight: ".98", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>About Us</h2>
        <div data-reveal style={{ position: "relative", marginTop: "clamp(18px, 2.2vw, 30px)", marginLeft: "calc(-1 * clamp(20px, 4vw, 40px))", marginRight: "-6%" }}>
          <img src="/assets/about-network.png" alt="A project team reviewing work together, linked to a wider network of professionals" loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
      </div>
      <div style={{ flex: "1 1 460px", minWidth: "0", display: "flex", flexDirection: "column", gap: "22px" }}>
        <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.62", color: "rgba(255,255,255,.92)", textWrap: "pretty" }}>Aarniksha Solutions Private Limited is a leading IT Services, Consulting, and Talent Solutions company dedicated to helping businesses achieve sustainable growth through technology, innovation, and skilled professionals.</p>
        <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.62", color: "rgba(255,255,255,.92)", textWrap: "pretty" }}>We partner with organizations of all sizes to deliver cutting-edge IT consulting, software development, cloud solutions, digital transformation, AI-driven solutions, and IT staffing services. Our focus is on understanding each client's unique business challenges and providing customized, scalable, and cost-effective solutions that drive measurable results.</p>
        <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.62", color: "rgba(255,255,255,.92)", textWrap: "pretty" }}>At Aarniksha Solutions, we believe technology is more than a tool&#8212;it is a catalyst for business transformation. By combining technical expertise with industry knowledge, we help our clients stay competitive in an ever-evolving digital landscape.</p>
        <a className="x12" data-reveal href="/services" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: "10px", marginTop: "14px", paddingBottom: "9px", borderBottom: "1.5px solid rgba(255,255,255,.75)", color: "#fff", fontSize: "15.5px", fontWeight: "700", transition: "gap .25s ease, border-color .25s ease" }}>Explore <span style={{ fontSize: "13px" }}>&#8599;</span></a>
      </div>
    </div>
  </section>
  );
}
