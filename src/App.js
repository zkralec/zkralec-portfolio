import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedProject from './components/FeaturedProject';
import ProjectGrid from './components/ProjectGrid';
import CapabilitiesSection from './components/CapabilitiesSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import {
  architectureSteps,
  capabilities,
  contactLinks,
  featuredProject,
  heroContent,
  heroNotes,
  navItems,
  selectedWork,
  techStack,
} from './data/portfolioData';

function App() {
  return (
    <div className="min-h-screen bg-page-glow text-ink">
      <div className="app-shell">
        <Navigation items={navItems} />
        <main>
          <HeroSection hero={heroContent} notes={heroNotes} />
          <FeaturedProject project={featuredProject} nodes={architectureSteps} />
          <ProjectGrid projects={selectedWork} />
          <CapabilitiesSection areas={capabilities} />
          <TechStackSection categories={techStack} />
          <ContactSection links={contactLinks} />
        </main>
        <footer className="px-6 pb-8 text-center text-sm text-slate-500 lg:px-10">
          © 2026 Zachary Kralec. Built with React, Tailwind, and Framer Motion.
        </footer>
      </div>
      <Analytics />
    </div>
  );
}

export default App;
