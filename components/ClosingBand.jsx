export default function ClosingBand() {
  return (
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: "-40%", right: "-16%", width: "62vw", height: "62vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.08)", pointerEvents: "none" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", bottom: "-70%", right: "4%", width: "44vw", height: "44vw", borderRadius: "50%", background: "radial-gradient(circle at 50% 30%, rgba(47,128,236,.28), rgba(47,128,236,0) 70%)", pointerEvents: "none" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", top: "0", right: "0", bottom: "0", width: "min(52%, 700px)", pointerEvents: "none", overflow: "hidden" }}>
      <img src="/assets/service-permanent-hiring.jpg" alt="" loading="lazy" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "55% 45%", mixBlendMode: "luminosity", opacity: ".3", filter: "blur(.3px)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.22) 34%, #000 78%), linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)", maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,.22) 34%, #000 78%), linear-gradient(180deg, transparent 0%, #000 22%, #000 78%, transparent 100%)", WebkitMaskComposite: "source-in", maskComposite: "intersect" }} />
      <div style={{ position: "absolute", inset: "0", background: "radial-gradient(90% 120% at 100% 50%, rgba(47,128,236,.16), rgba(6,54,126,0) 62%), linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.82) 34%, rgba(6,54,126,.5) 74%, rgba(6,54,126,.66) 100%)" }}></div>
    </div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(64px, 8vw, 112px) clamp(20px, 4vw, 40px) clamp(80px, 9vw, 130px)" }}>
      <h2 data-reveal style={{ margin: "0 0 clamp(26px, 3vw, 40px)", maxWidth: "20ch", fontSize: "clamp(38px, 5.6vw, 76px)", lineHeight: ".98", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>Building Trust. Delivering Excellence.</h2>
      <p data-reveal style={{ margin: "0", maxWidth: "62ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.78)", textWrap: "pretty" }}>Your success is our mission. Let's shape the future of work&#8212;together. Contact us today and discover how Aarniksha Solutions can help your business grow with the right people.</p>
    </div>
  </section>
  );
}
