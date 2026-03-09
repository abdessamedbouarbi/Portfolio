import './App.css';
import { lazy, Suspense } from 'react';
import { Navbar, Footer } from '@/components/layout';
import HomeSection from '@/sections/HomeSection';
import SkillsSection from '@/sections/SkillsSection';
import ProjectsSection from '@/sections/ProjectsSection';
import EducationSection from '@/sections/EducationSection';
import ContactSection from '@/sections/ContactSection';
import { Routes, Route } from 'react-router-dom';
import MyService from './sections/MyService';
import AllProjectsPage from '@/pages/AllProjectsPage';
import FloatingLines from '@/components/FloatingLines';

const ParticleBackground = lazy(() => import('@/components/layout/ParticleBackground').then(m => ({ default: m.default })));

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-white overflow-x-hidden">
      {/* Floating Lines Animated Background */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
        <FloatingLines
          linesGradient={["#E945F5","#E945F5"]}
          animationSpeed={1}
          interactive={false}
          bendRadius={5}
          bendStrength={-0.4}
          mouseDamping={0.08}
          parallax
          parallaxStrength={0.3}
        />
      </div>

      {/* Particle Background - lazy loaded to improve LCP */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={
            <>
              <HomeSection />
              <SkillsSection />
              <ProjectsSection />
              <EducationSection />
              <MyService />
              <ContactSection />
            </>
          } />
          <Route path="/projects" element={<AllProjectsPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
