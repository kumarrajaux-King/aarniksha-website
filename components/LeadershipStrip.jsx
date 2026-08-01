export default function LeadershipStrip() {
  return (
  <section style={{ position: "relative", background: "linear-gradient(140deg, #04255A 0%, #06367E 52%, #0A4497 100%)", overflow: "hidden" }}>
    <span aria-hidden="true" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", fontSize: "clamp(120px, 20vw, 320px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-.06em", color: "rgba(255,255,255,.028)", whiteSpace: "nowrap", pointerEvents: "none" }}>LEADERSHIP</span>
    <div aria-hidden="true" style={{ position: "absolute", top: "-40%", right: "-12%", width: "48vw", height: "48vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.06)", pointerEvents: "none" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(72px, 9vw, 124px) clamp(20px, 4vw, 40px)", display: "flex", flexWrap: "wrap", gap: "clamp(36px, 5vw, 80px)", alignItems: "center" }}>
      <div style={{ flex: "1 1 380px", minWidth: "0" }}>
        <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#7EAEF6" }}>Leadership</p>
        <h2 data-reveal style={{ margin: "0 0 22px", maxWidth: "16ch", fontSize: "clamp(34px, 4.4vw, 58px)", lineHeight: "1.02", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>Guided by Vision. Grounded in Integrity.</h2>
        <p data-reveal style={{ margin: "0 0 clamp(26px, 3vw, 36px)", maxWidth: "46ch", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.76)", textWrap: "pretty" }}>Arjun Laknepally and Sneha Rampalli lead Aarniksha Solutions with a shared commitment to integrity, innovation and client-centric delivery.</p>
        <a data-reveal href="/leadership" style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#06367E", fontSize: "15.5px", fontWeight: "700", borderRadius: "999px", padding: "16px 28px", boxShadow: "0 14px 32px rgba(2,16,42,.34)", transition: "transform .25s ease, box-shadow .25s ease" }}>Meet the directors <span style={{ fontSize: "13px" }}>&#8599;</span></a>
      </div>
      <div style={{ flex: "1 1 440px", minWidth: "0", display: "flex", flexWrap: "wrap", gap: "clamp(18px, 2.4vw, 32px)", justifyContent: "flex-end" }}>

        <article data-reveal style={{ position: "relative", flex: "1 1 260px", maxWidth: "320px", transform: "translateY(0)" }}>
          <span aria-hidden="true" style={{ position: "absolute", top: "-26px", left: "-6px", fontSize: "clamp(56px, 6vw, 86px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-.05em", color: "rgba(255,255,255,.07)" }}>01</span>
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 60px rgba(2,16,42,.42)" }}>
            <img src="/assets/leader-arjun.png" alt="Arjun Laknepally, Director at Aarniksha Solutions" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "50% 20%" }} />
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(6,54,126,0) 42%, rgba(4,26,66,.9) 100%)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px" }}>
              <p style={{ margin: "0 0 3px", fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: "1.16", letterSpacing: "-.02em", fontWeight: "800", color: "#fff" }}>Arjun Laknepally</p>
              <p style={{ margin: "0", fontSize: "11.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#9CC6FA" }}>Director</p>
            </div>
          </div>
        </article>

        <article data-reveal style={{ position: "relative", flex: "1 1 260px", maxWidth: "320px", transform: "translateY(clamp(0px, 4vw, 46px))" }}>
          <span aria-hidden="true" style={{ position: "absolute", top: "-26px", left: "-6px", fontSize: "clamp(56px, 6vw, 86px)", lineHeight: "1", fontWeight: "800", letterSpacing: "-.05em", color: "rgba(255,255,255,.07)" }}>02</span>
          <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: "0 24px 60px rgba(2,16,42,.42)" }}>
            <img src="/assets/leader-sneha.png" alt="Sneha Rampalli, Director at Aarniksha Solutions" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "50% 20%" }} />
            <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(6,54,126,0) 42%, rgba(4,26,66,.9) 100%)", pointerEvents: "none" }}></div>
            <div style={{ position: "absolute", left: "20px", right: "20px", bottom: "18px" }}>
              <p style={{ margin: "0 0 3px", fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: "1.16", letterSpacing: "-.02em", fontWeight: "800", color: "#fff" }}>Sneha Rampalli</p>
              <p style={{ margin: "0", fontSize: "11.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#9CC6FA" }}>Director</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
  );
}
