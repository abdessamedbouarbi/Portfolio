import './App.css';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from '@/components/layout';
import HomeSection from '@/sections/HomeSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';
import MyService from './sections/MyService';

const ParticleBackground = lazy(() => import('@/components/layout/ParticleBackground').then(m => ({ default: m.default })));

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white overflow-x-hidden">
      {/* Particle Background - lazy loaded to improve LCP */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

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
