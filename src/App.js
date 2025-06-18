import React from "react";
import "./App.css";

const projects = [
  {
    title: "Personal Finance Tracker",
    description: "Track expenses and income using Python and Tkinter.",
    image: "/images/FinanceTracker.jpg",
  },
  {
    title: "Review Aggregator",
    description: "Scrapes and analyzes product reviews using Python and sentiment analysis.",
    image: "/images/ReviewAggregator.jpg",
  },
  {
    title: "Quote Scraper",
    description: "Beginner project to practice web scraping techniques.",
    image: "/images/QuoteScraper.jpg",
  },
  {
    title: "News Aggregator",
    description: "Scrapes top news stories and summarizes them for quick reading.",
    image: "/images/NewsAggregator.jpg",
  },
  {
    title: "Sprint Start",
    description: "Mobile app to help sprinters improve reaction time.",
    image: "/images/SprintStart.jpg",
  },
  {
    title: "Track Tracker",
    description: "Large-scale app for tracking workouts, meals, injuries, and progress.",
    image: "/images/TrackTracker.jpg",
  },
];

export default function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Zachary Kralec</h1>
        <p>Computer Science Student @ St. Mary's College of Maryland</p>
        <p className="tagline">
          Passionate about building meaningful software that solves real problems.
        </p>
        <hr className="divider" />
        <p>
          Explore my projects below and get in touch to collaborate or chat about technology.
        </p>
        <a
          href="/Zachary-Kralec-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="resume-button"
        >
          Download My Resume
        </a>
      </header>

      <section className="about">
        <h2>About Me</h2>
          <p>
            Hi! I'm Zachary, a senior studying Computer Science. I enjoy building projects with
            Python, Swift, React, and more. I'm always trying to learn and improve my development skills.
          </p>
          <p>
            I take on all types of projects — whether it's a mobile app, a desktop tool, or even a
            script to automate something. I enjoy the challenge and the chance to learn
            something new. I try to approach each project with a clean and methodical mindset,
            always aiming to solve the core problem first, while still keeping the user experience
            in mind.
          </p>
          <p>
            One of my favorite projects so far has been <i>Sprint Start</i>, an app I made to help
            sprinters improve their reaction time. I use it myself during training for the track
            team at St. Mary's College of Maryland, and I know it’s something other athletes on my
            team find helpful too.
          </p>
          <p>
            I’m currently looking to grow as a software developer — I’m open to any role where I can
            write code, build useful things, and continue learning. I also enjoy writing and sharing
            what I’ve learned, whether that’s through documentation, code comments, or explaining
            ideas to others.
          </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              {project.image ? <img src={project.image} alt={project.title} /> : <div className="placeholder">Image Coming Soon</div>}
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zkralec@icloud.com">zkralec@icloud.com</a></p>
        <p>GitHub: <a href="https://github.com/zkralec" target="_blank" rel="noreferrer">github.com/zkralec</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zack-kralec-8b5a7a263/" target="_blank" rel="noreferrer">linkedin.com/in/zack-kralec</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Zachary Kralec. All rights reserved.</p>
      </footer>
    </div>
  );
} 
