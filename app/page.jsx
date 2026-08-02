import HomeHero from '../components/HomeHero';
import AboutStrip from '../components/AboutStrip';
import WhoWeAre from '../components/WhoWeAre';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ProcessSection from '../components/ProcessSection';
import CtaBand from '../components/CtaBand';
import IndustriesSection from '../components/IndustriesSection';
import CareersStrip from '../components/CareersStrip';
import LeadershipStrip from '../components/LeadershipStrip';
import Commitment from '../components/Commitment';
import ContactSection from '../components/ContactSection';
import ClosingBand from '../components/ClosingBand';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutStrip />
      <WhoWeAre />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <CtaBand />
      <IndustriesSection />
      <CareersStrip />
      <LeadershipStrip />
      <Commitment />
      <ContactSection />
      <ClosingBand />
    </>
  );
}

