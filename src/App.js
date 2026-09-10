import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturedProject from './components/FeaturedProject';
import ProjectGrid from './components/ProjectGrid';
import CapabilitiesSection from './components/CapabilitiesSection';
import ExperienceSection from './components/ExperienceSection';
import TechStackSection from './components/TechStackSection';
import ContactSection from './components/ContactSection';
import {
  architectureSteps,
  professionalSystems,
  contactLinks,
  featuredProject,
  heroContent,
  heroNotes,
  navItems,
  selectedWork,
  techStack,
  experience,
  certification,
  cmmcScreenshots,
  resume,
} from './data/portfolioData';

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navigation items={navItems} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection
          hero={heroContent}
          notes={heroNotes}
          links={contactLinks}
          resume={resume}
        />
        <FeaturedProject
          project={featuredProject}
          nodes={architectureSteps}
          screenshots={cmmcScreenshots.filter((item) => item.available)}
        />
        <CapabilitiesSection areas={professionalSystems} />
        <ProjectGrid projects={selectedWork} />
        <ExperienceSection roles={experience} />
        <TechStackSection
          categories={techStack}
          certification={certification}
        />
        <ContactSection links={contactLinks} resume={resume} />
      </main>
      <footer className="container site-footer">
        <p>© {new Date().getFullYear()} Zachary Kralec</p>
        <p>Systems. Automation. Evidence.</p>
        <a href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </div>
  );
}

export default App;
