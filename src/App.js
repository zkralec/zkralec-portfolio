import React from "react";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

const projects = [
  {
    title: "Stride Lab",
    language: "JaveScript, HTML, CSS",
    description: "StrideLab is a web app I built that creates personalized training plans for track and field athletes. It uses Firebase for user accounts and OpenAI's GPT to generate detailed, structured workouts based on the athlete's info. Athletes can pick their events, training goals, which days they’re available, and whether they want weight training included. The GPT returns a clean JSON object with warmups, workouts, and cooldowns — all based on real track and field logic (not random sets or reps).",
    image: "/images/StrideLab.jpg",
    link: "https://github.com/zkralec/StrideLab"
  },
  {
    title: "AI Interview Platform",
    language: "JavaScript, HTML, CSS",
    description: "An AI‑powered behavioral interviewer built with React, Tailwind, and Node. The app guides users through a simulated job interview by asking questions, recording responses (both text and voice), and providing constructive feedback. It uses the OpenAI API (gpt‑4o‑mini) to generate context‑aware questions and actionable feedback, making it an ideal practice tool for polishing interview skills.",
    image: "/images/AIInterviewPlatform.jpg",
    link: "https://github.com/zkralec/AIInterviewPlatform"
  },
  {
    title: "AI Fake News Detector",
    language: "Python",
    description: "A machine learning model that classifies political statements as either fake or real using the LIAR dataset. I built a full pipeline in Python using pandas and scikit-learn — preprocessing the data, vectorizing the text with TF-IDF, and training a logistic regression model that reached about 62% accuracy. I also started experimenting with TensorFlow to explore deep learning versions of the project.",
    image: "/images/AIFakeNewsDetector.jpg",
    link: "https://github.com/zkralec/AIFakeNewsDetector"
  },
  {
    title: "Review Aggregator",
    language: "Python",
    description: "This tool scrapes customer reviews from Trustpilot for any website — including brands like Amazon, Nike, and Temu. It calculates the average star rating using custom scraping and parsing logic. It was a fun way to combine web scraping and simple sentiment analysis in a practical way.",
    image: "/images/ReviewAggregator.jpg",
    link: "https://github.com/zkralec/ReviewAggregator"
  },
  {
    title: "News Aggregator",
    language: "Python",
    description: "A multi-source scraper that collects and summarizes top headlines from NPR, TechCrunch, Hacker News, and BBC. Each article pulls a quick summary (or full text if needed) for fast reading. This project helped me explore how to extract meaningful content from real-world HTML structures.",
    image: "/images/NewsAggregator.jpg",
    link: "https://github.com/zkralec/NewsAggregator"
  },
  {
    title: "Personal Finance Tracker",
    language: "Python",
    description: "A Python desktop app for managing income and creating custom budgets. Users can input their salary, generate suggested budgets, and track purchases using dynamic tables. I built this to strengthen my skills in Tkinter and Matplotlib while learning how to structure a real-world Python project.",
    image: "/images/FinanceTracker.jpg",
    link: "https://github.com/zkralec/FinanceTracker"
  },
  {
    title: "Sprint Start",
    language: "Swift",
    description: "A Swift mobile app that simulates a race start with adjustable audio cues. It’s built to train sprinters’ reaction times with customizable settings for sound type, timing variability, and more. I use it during my own training to improve starts and block reaction time.",
    image: "/images/SprintStart.jpg",
    link: "https://github.com/zkralec/SprintStart"
  },
  {
    title: "Track Tracker",
    language: "Swift",
    description: "A full-featured Swift app for track athletes. Users can log in via Firebase and track workouts, weights, injuries, and PRs for any event. The app also suggests meals, includes a simplified sprint start trainer, and saves data persistently across sessions. I built this as a passion project and pushed myself to tie everything together in a single app.",
    image: "/images/TrackTracker.jpg",
    link: "https://github.com/zkralec/TrackTracker"
  },
];

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
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
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
      </section>

      <section className="badges">
        <h2>Badges/Certifications</h2>
        <div className="badge-grid">
          {badges.map((badge, index) => (
            <a
              href={badge.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-card"
            >
              <img src={badge.image} alt={badge.title} className="badge-image" />
              <p className="badge-title">{badge.title}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zkralec@icloud.com">zkralec@icloud.com</a></p>
        <p>GitHub: <a href="https://github.com/zkralec" target="_blank" rel="noreferrer">github.com/zkralec</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zack-kralec-8b5a7a263/" target="_blank" rel="noreferrer">linkedin.com/zack-kralec</a></p>
      </section>

      <footer className="footer">
        <p>© 2025 Zachary Kralec. All rights reserved.</p>
      </footer>
      <Analytics />
    </div>
  );
} 

export default App;
