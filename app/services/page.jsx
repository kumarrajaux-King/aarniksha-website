import ServicesSection from '../../components/ServicesSection';
import CtaBand from '../../components/CtaBand';

export const metadata = {
  title: "Services | Aarniksha Solutions",
  description: "IT and non-IT staffing, permanent and contract hiring, executive search, RPO, payroll compliance and HR consulting."
};

export default function ServicesPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#04142F", overflow: "hidden" }}>
    <img src="/assets/services-hero.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 50%" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, #04142F 0%, rgba(4,20,47,.9) 32%, rgba(6,54,126,.42) 66%, rgba(6,54,126,.28) 100%)" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(4,20,47,.5) 0%, rgba(4,20,47,0) 42%, rgba(4,20,47,.45) 100%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(84px, 10vw, 152px) clamp(20px, 4vw, 40px) clamp(88px, 11vw, 164px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#7EAEF6" }}>Our Services</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "20ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff", textShadow: "0 2px 24px rgba(0,0,0,.4)" }}>Workforce solutions built around your business</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.84)", textWrap: "pretty" }}>From IT and non-IT staffing to executive search, RPO, payroll compliance, and HR consulting &#8212; engage us for a single hire or your entire recruitment lifecycle.</p>
    </div>
  </section>

      <ServicesSection />
      <CtaBand />
    </>
  );
}
