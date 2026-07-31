import IndustriesSection from '../../components/IndustriesSection';
import CtaBand from '../../components/CtaBand';

export const metadata = {
  title: "Industries | Aarniksha Solutions",
  description: "Recruitment across IT, finance, healthcare, manufacturing, retail, energy, logistics, education and more."
};

export default function IndustriesPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <img src="/assets/industries-hero.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "60% 60%" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(4,26,66,.94) 0%, rgba(6,54,126,.82) 34%, rgba(6,54,126,.44) 70%, rgba(6,54,126,.3) 100%)" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(4,26,66,.45) 0%, rgba(4,26,66,0) 44%, rgba(4,26,66,.4) 100%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(84px, 10vw, 152px) clamp(20px, 4vw, 40px) clamp(88px, 11vw, 164px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#9CC6FA" }}>Industries We Serve</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "19ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff", textShadow: "0 2px 24px rgba(2,22,56,.4)" }}>Delivering talent across diverse industries</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.86)", textWrap: "pretty" }}>Every industry has its own workforce challenges. Our domain expertise lets us deliver professionals with the right skills, experience, and cultural fit.</p>
    </div>
  </section>

      <IndustriesSection />
      <CtaBand />
    </>
  );
}
