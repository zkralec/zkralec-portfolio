import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const projects = [
  {
    title: "Stride Lab",
    language: "JavaScript, HTML, CSS",
    type: "personal",
    description: "StrideLab is a web app I built that creates personalized training plans for track and field athletes. It uses Firebase for user accounts and OpenAI's GPT to generate detailed, structured workouts based on the athlete's info. Athletes can pick their events, training goals, which days they’re available, and whether they want weight training included. The GPT returns a clean JSON object with warmups, workouts, and cooldowns — all based on real track and field logic (not random sets or reps).",
    image: "/images/StrideLab.jpg",
    link: "https://github.com/zkralec/StrideLab"
  },
  {
    title: "AI Interview Platform",
    language: "JavaScript, HTML, CSS",
    type: "personal",
    description: "An AI‑powered behavioral interviewer built with React, Tailwind, and Node. The app guides users through a simulated job interview by asking questions, recording responses (both text and voice), and providing constructive feedback. It uses the OpenAI API (gpt‑4o‑mini) to generate context‑aware questions and actionable feedback, making it an ideal practice tool for polishing interview skills.",
    image: "/images/AIInterviewPlatform.jpg",
    link: "https://github.com/zkralec/AIInterviewPlatform"
  },
  {
    title: "AI Fake News Detector",
    language: "Python",
    type: "personal",
    description: "A machine learning model that classifies political statements as either fake or real using the LIAR dataset. I built a full pipeline in Python using pandas and scikit-learn — preprocessing the data, vectorizing the text with TF-IDF, and training a logistic regression model that reached about 62% accuracy. I also started experimenting with TensorFlow to explore deep learning versions of the project.",
    image: "/images/AIFakeNewsDetector.jpg",
    link: "https://github.com/zkralec/AIFakeNewsDetector"
  },
  {
    title: "Review Aggregator",
    language: "Python",
    type: "personal",
    description: "This tool scrapes customer reviews from Trustpilot for any website — including brands like Amazon, Nike, and Temu. It calculates the average star rating using custom scraping and parsing logic. It was a fun way to combine web scraping and simple sentiment analysis in a practical way.",
    image: "/images/ReviewAggregator.jpg",
    link: "https://github.com/zkralec/ReviewAggregator"
  },
  /*{
    title: "News Aggregator",
    language: "Python",
    type: "personal",
    description: "A multi-source scraper that collects and summarizes top headlines from NPR, TechCrunch, Hacker News, and BBC. Each article pulls a quick summary (or full text if needed) for fast reading. This project helped me explore how to extract meaningful content from real-world HTML structures.",
    image: "/images/NewsAggregator.jpg",
    link: "https://github.com/zkralec/NewsAggregator"
  },*/
  /*{
    title: "Personal Finance Tracker",
    language: "Python",
    type: "personal",
    description: "A Python desktop app for managing income and creating custom budgets. Users can input their salary, generate suggested budgets, and track purchases using dynamic tables. I built this to strengthen my skills in Tkinter and Matplotlib while learning how to structure a real-world Python project.",
    image: "/images/FinanceTracker.jpg",
    link: "https://github.com/zkralec/FinanceTracker"
  },*/
  {
    title: "Sprint Start",
    language: "Swift",
    type: "personal",
    description: "A Swift mobile app that simulates a race start with adjustable audio cues. It’s built to train sprinters’ reaction times with customizable settings for sound type, timing variability, and more. I use it during my own training to improve starts and block reaction time.",
    image: "/images/SprintStart.jpg",
    link: "https://github.com/zkralec/SprintStart"
  },
  {
    title: "Track Tracker",
    language: "Swift",
    type: "personal",
    description: "A full-featured Swift app for track athletes. Users can log in via Firebase and track workouts, weights, injuries, and PRs for any event. The app also suggests meals, includes a simplified sprint start trainer, and saves data persistently across sessions. I built this as a passion project and pushed myself to tie everything together in a single app.",
    image: "/images/TrackTracker.jpg",
    link: "https://github.com/zkralec/TrackTracker"
  },
  {
    title: "PDQ Software & Browser Extension Audit Automation",
    language: "Python, PowerShell, PDQ Deploy",
    type: "professional",
    description: "Designed a resumable automation workflow to inventory installed software and browser extensions across 100+ enterprise endpoints. Normalized results into audit-ready CSVs and flagged potentially risky software/extensions to support internal security reviews and compliance.",
    image: "",
    link: "",
    organization: "Resource Management Concepts, Inc.",
    disclaimer: "Synopsis only. Implementation details, configurations, and source code are proprietary and not publicly shared.",
  },
  {
    title: "OpenVPN Client Auto-Update & Validation Tool",
    language: "Python, PowerShell, PDQ Deploy",
    type: "professional",
    description: "Built an automated workflow to detect outdated OpenVPN client installations, perform controlled updates, and validate successful installation post-update. Improved version consistency across managed endpoints and reduced VPN-related support overhead.",
    image: "",
    link: "",
    organization: "Resource Management Concepts, Inc.",
    disclaimer: "Synopsis only. Implementation details, configurations, and source code are proprietary and not publicly shared.",
  },
];

const professionalProjects = projects.filter((p) => p.type === "professional");
const personalProjects = projects.filter((p) => p.type === "personal");

const badges = [
  {
    title: "Intro to Generative AI",
    image: "/images/genai-intro-badge.png"
  },
  {
    title: "Gemini for DevOps Engineers",
    image: "/images/devops-badge.png"
  },
  {
    title: "Encoder-Decoder Architecture",
    image: "/images/encoder-decoder-badge.png"
  },
  {
    title: "MLOps for Generative AI",
    image: "/images/mlops-badge.png"
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="header-content">
          <div className="header-text">
            <h1 className="animated-name">Zachary Kralec</h1>
            <p className="subheading">Computer Science Student @ St. Mary's College of Maryland</p>
            <p className="intro">
              Explore my projects below and get in touch to talk about my skills, interests, or what I could bring as an employee.
            </p>
          </div>
          <div className="header-action">
            <a
              href="/Zachary-Kralec-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="resume-button"
            >
              Download My Resume
            </a>
          </div>
        </div>
        <div className="header-accent" aria-hidden="true"></div>
      </header>

      <section className="about">
        <h2>About Me</h2>
          <p>
            Hi, I’m Zachary. I’m a senior studying Computer Science with a strong interest in 
            software, automation, and systems. I enjoy building things that are practical and well 
            thought out, whether that’s a full application or a small tool that quietly makes 
            something easier or more reliable.
          </p>
          <p>
            My background spans software development, internal tooling, and IT-focused automation. 
            I’ve worked with full-stack web technologies, scripting, CI/CD pipelines, and system 
            administration, and I’m comfortable moving between code and infrastructure depending 
            on what the problem needs. I like understanding how systems work as a whole, not just 
            writing code in isolation.
          </p>
          <p>
            I tend to approach problems methodically. I focus on the core issue first, keep 
            solutions simple where possible, and think about how real people will use and maintain 
            what I build. I value clarity, reliability, and learning something new with every project.
          </p>
          <p>
            I’m currently looking to grow as a software engineer in roles where I can build useful 
            things, take on real responsibility, and continue developing my technical depth.
          </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>

        <h3 className="section-subtitle">Professional / Internal Projects (Synopsis)</h3>

        {professionalProjects.map((project, index) => (
          <div className="project-card professional" key={`pro-${index}`}>
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="placeholder">Synopsis Only</div>
              )}
            </div>

            <div className="project-info">
              <span className="tech-badge">{project.language}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <p className="work-note">
                <strong>{project.organization}</strong>
                <br />
                {project.disclaimer}
              </p>
            </div>
          </div>
        ))}

        <h3 className="section-subtitle">Personal Projects</h3>

        {personalProjects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={`personal-${index}`}
          >
            <div className="project-image">
              {project.image ? (
                <img src={project.image} alt={project.title} />
              ) : (
                <div className="placeholder">Image Coming Soon</div>
              )}
            </div>

            <div className="project-info">
              <span className="tech-badge">{project.language}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}

        <div className="project-archive-link">
          <a
            href="https://github.com/zkralec"
            target="_blank"
            rel="noopener noreferrer"
          >
            View full project archive on GitHub →
          </a>
        </div>
      </section>

      <section className="badges">
        <h2>Badges/Certifications</h2>
        <div className="badge-grid">
          {badges.map((badge, index) => (
            <div key={index} className="badge-card">

              <img src={badge.image} alt={badge.title} className="badge-image" />
              <p className="badge-title">{badge.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zkralec@icloud.com">zkralec@icloud.com</a></p>
        <p>GitHub: <a href="https://github.com/zkralec" target="_blank" rel="noreferrer">github.com/zkralec</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zachary-kralec-8b5a7a263/" target="_blank" rel="noreferrer">linkedin.com/zachary-kralec</a></p>
      </section>

      <footer className="footer">
        <p>© 2026 Zachary Kralec. All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  );
} 

export default App;
