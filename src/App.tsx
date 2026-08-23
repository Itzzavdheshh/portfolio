import { HeroSection } from './sections/HeroSection';
import { MarqueeSection } from './sections/MarqueeSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { PhilosophySection } from './sections/PhilosophySection';
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { ContactSection } from './sections/ContactSection';
import { FloatingContact } from './components/FloatingContact';

function App() {
  return (
    <div className="main-wrapper w-full bg-[#0C0C0C]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <PhilosophySection />
      <FeaturedProjectsSection />
      <ProjectsSection />
      <ContactSection />
      <FloatingContact />
    </div>
  );
}

export default App;
