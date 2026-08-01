import WhoWeAre from '../../components/WhoWeAre';
import AboutStrip from '../../components/AboutStrip';
import WhyChooseUs from '../../components/WhyChooseUs';
import Commitment from '../../components/Commitment';
import CtaBandLight from '../../components/CtaBandLight';

export const metadata = {
  title: "About Us | Aarniksha Solutions",
  description: "Aarniksha Solutions is a talent and business solutions partner combining industry expertise, technology-driven recruitment and a deep understanding of client needs."
};

export default function AboutPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <img src="/assets/about-team.png" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "68% 46%" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, #06367E 0%, rgba(6,54,126,.92) 26%, rgba(6,54,126,.55) 56%, rgba(6,54,126,.1) 100%)" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(6,54,126,.4) 0%, rgba(6,54,126,0) 42%, rgba(6,54,126,.34) 100%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(84px, 10vw, 152px) clamp(20px, 4vw, 40px) clamp(88px, 11vw, 164px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#7EAEF6" }}>About Us</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "20ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff", textShadow: "0 2px 24px rgba(2,22,56,.35)" }}>Built on trust. Measured by outcomes.</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.86)", textWrap: "pretty" }}>We help organizations build exceptional teams &#8212; combining industry expertise, technology-driven recruitment, and a deep understanding of what each client actually needs.</p>
    </div>
  </section>

      <WhoWeAre />
      <AboutStrip />
      <WhyChooseUs />
      <Commitment />
      <CtaBandLight />
    </>
  );
}
