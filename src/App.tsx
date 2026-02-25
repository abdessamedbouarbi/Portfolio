import './App.css';
import { Navbar, Footer, ParticleBackground } from '@/components/layout';
import HomeSection from '@/sections/HomeSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';
import MyService from './sections/MyService';


function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <HomeSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <MyService />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
