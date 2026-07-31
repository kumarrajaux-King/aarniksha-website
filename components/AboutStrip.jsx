export default function AboutStrip() {
  return (
  <section id="about" style={{ position: "relative", background: "#2F80EC", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: "-30%", right: "-12%", width: "46vw", height: "46vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.12)", pointerEvents: "none" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 128px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(32px, 5vw, 80px)" }}>
      <div style={{ flex: "1 1 380px", minWidth: "0" }}>
        <h2 data-reveal style={{ margin: "0", fontSize: "clamp(46px, 6vw, 80px)", lineHeight: ".98", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>About Us</h2>
        <div data-reveal style={{ marginTop: "clamp(28px, 3.4vw, 46px)", background: "#fff", borderRadius: "22px", padding: "10px", boxShadow: "0 26px 60px rgba(2,22,56,.22)" }}>
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "14px" }}>
            <img className="x11" src="https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg" alt="Recruitment team meeting with a new hire" loading="lazy" style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block", transition: "transform .7s cubic-bezier(.2,.7,.3,1)" }} />
          </div>
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
