export const metadata = {
  title: 'Legal | Aarniksha Solutions',
  description: 'Privacy policy, terms of use and refund policy for Aarniksha Solutions.',
};

export default function LegalPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <div aria-hidden="true" style={{ position: "absolute", top: "-60%", right: "-10%", width: "52vw", height: "52vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,.08)", pointerEvents: "none" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(52px, 6.4vw, 96px) clamp(20px, 4vw, 40px) clamp(56px, 7vw, 104px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#7EAEF6" }}>Legal</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "22ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff" }}>Policies</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "60ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.78)", textWrap: "pretty" }}>Our privacy, terms, and refund policies. Send us your approved policy copy and we will place it here verbatim.</p>
    </div>
  </section>

  <section id="privacy" style={{ background: "#fff" }}>
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)", borderBottom: "1px solid #E9EDF5" }}>
      <h2 data-reveal style={{ margin: "0 0 18px", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: "1.06", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Privacy Policy</h2>
      <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.7", color: "#5B6577", textWrap: "pretty" }}>Add your approved privacy policy copy here — what data you collect from candidates and clients, how it is stored, how long you retain it, and how someone can request deletion.</p>
    </div>
  </section>

  <section id="terms" style={{ background: "#fff" }}>
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)", borderBottom: "1px solid #E9EDF5" }}>
      <h2 data-reveal style={{ margin: "0 0 18px", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: "1.06", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Terms of Use</h2>
      <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.7", color: "#5B6577", textWrap: "pretty" }}>Add your approved terms of use here — acceptable use of this site, intellectual property, limitation of liability, and governing law.</p>
    </div>
  </section>

  <section id="refund" style={{ background: "#fff" }}>
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "clamp(56px, 7vw, 96px) clamp(20px, 4vw, 40px)", borderBottom: "1px solid #E9EDF5" }}>
      <h2 data-reveal style={{ margin: "0 0 18px", fontSize: "clamp(28px, 3.4vw, 44px)", lineHeight: "1.06", letterSpacing: "-.028em", fontWeight: "800", color: "#101B33" }}>Refund Policy</h2>
      <p data-reveal style={{ margin: "0", fontSize: "clamp(15px, 1.02vw, 17.5px)", lineHeight: "1.7", color: "#5B6577", textWrap: "pretty" }}>Add your approved refund policy here — replacement guarantees, invoicing terms, and the conditions under which fees are refunded.</p>
    </div>
  </section>

    </>
  );
}
