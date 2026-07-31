import ContactSection from '../../components/ContactSection';

export const metadata = {
  title: "Contact | Aarniksha Solutions",
  description: "Tell us what you need and a member of our team will come back to you within one business day."
};

export default function ContactPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#071A3C", overflow: "hidden" }}>
    <img src="/assets/contact-hero.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "64% 50%" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(7,26,60,.92) 0%, rgba(6,54,126,.72) 34%, rgba(6,54,126,.34) 70%, rgba(6,54,126,.22) 100%)" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(7,26,60,.45) 0%, rgba(7,26,60,0) 44%, rgba(7,26,60,.4) 100%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(84px, 10vw, 152px) clamp(20px, 4vw, 40px) clamp(88px, 11vw, 164px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#9CC6FA" }}>Contact Us</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "20ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff", textShadow: "0 2px 24px rgba(2,22,56,.4)" }}>Let's talk about your next hire</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.86)", textWrap: "pretty" }}>Tell us what you need and a member of our team will come back to you within one business day.</p>
    </div>
  </section>

      <ContactSection hideHeading />
    </>
  );
}
