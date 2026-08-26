import OpenRoles from '../../components/OpenRoles';
import JobSeekers from '../../components/JobSeekers';
import CtaBand from '../../components/CtaBand';

export const metadata = {
  title: "Careers | Aarniksha Solutions",
  description: "Open roles in Hyderabad &#8212; Java Full Stack, AI/ML, DevOps, Data Engineering and ServiceNow. Full-time and contract to hire."
};

export default function CareersPage() {
  return (
    <>
  <section style={{ position: "relative", background: "#06367E", overflow: "hidden" }}>
    <img src="/assets/careers-hero.jpg" alt="" aria-hidden="true" style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "62% 40%" }} />
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(90deg, rgba(4,26,66,.95) 0%, rgba(6,54,126,.84) 34%, rgba(6,54,126,.46) 70%, rgba(6,54,126,.3) 100%)" }}></div>
    <div aria-hidden="true" style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg, rgba(4,26,66,.48) 0%, rgba(4,26,66,0) 44%, rgba(4,26,66,.42) 100%)" }}></div>
    <div style={{ position: "relative", maxWidth: "1240px", margin: "0 auto", padding: "clamp(56px, 6vw, 92px) clamp(20px, 4vw, 40px) clamp(58px, 6.4vw, 96px)" }}>
      <p data-reveal style={{ margin: "0 0 20px", fontSize: "12.5px", fontWeight: "800", letterSpacing: ".14em", textTransform: "uppercase", color: "#9CC6FA" }}>Careers</p>
      <h1 data-reveal style={{ margin: "0 0 22px", maxWidth: "20ch", fontSize: "clamp(38px, 5.6vw, 78px)", lineHeight: "1", letterSpacing: "-.035em", fontWeight: "800", color: "#fff", textShadow: "0 2px 24px rgba(2,22,56,.4)" }}>Find the team where you belong</h1>
      <p data-reveal style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(15px, 1.05vw, 18.5px)", lineHeight: "1.66", color: "rgba(255,255,255,.86)", textWrap: "pretty" }}>Whether you are building a team or planning your next career move, our consultants work closely with you at every stage.</p>
      <a data-reveal href="#openroles" style={{ marginTop: "clamp(24px, 2.6vw, 34px)", display: "inline-flex", alignItems: "center", gap: "10px", background: "#fff", color: "#06367E", fontSize: "15.5px", fontWeight: "700", letterSpacing: "-.01em", borderRadius: "999px", padding: "15px 27px", boxShadow: "0 14px 34px rgba(2,16,42,.26)" }}>See all 28 open roles <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M10 4.5v11M5.5 11l4.5 4.5L14.5 11" /></svg></a>
    </div>
  </section>

      <OpenRoles />
      <JobSeekers />
      <CtaBand />
    </>
  );
}
