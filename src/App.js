import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", maxWidth: 900, margin: "auto", padding: 20 }}>
      <header style={{ textAlign: "center", marginBottom: 40 }}>
        <h1>Zachary Kralec</h1>
        <p>Senior Computer Science Student | Portfolio</p>
      </header>

      <section id="about" style={{ marginBottom: 40 }}>
        <h2>About Me</h2>
        <p>
          Hi! I'm Zachary, a senior studying Computer Science at St. Mary's College of Maryland. I
          enjoy building projects with Python, Swift, React, and more. I am constantly learning new
          technologies and languages.
        </p>
      </section>

      <section id="projects" style={{ marginBottom: 40 }}>
        <h2>Projects</h2>
        <ul>
          <li><b>Project 1:</b> React Portfolio Website — to showcase my projects and skills</li>
          <li><b>Project 2:</b> Personal Finance Tracker — allows finance tracking and built with Python and Tkinter</li>
          <li><b>Project 3:</b> Review Aggregator — scrapes reviews and performs analysis on them</li>
          <li><b>Project 4:</b> Quote Scraper - beginner program to learn about website scraping</li>
          <li><b>Project 5:</b> News Aggregator - scrapes the top news stories and provides summaries for each</li>
          <li><b>Project 6:</b> Sprint Start — allows track and field sprinters to work on their reaction time when alone</li>
          <li><b>Project 7:</b> Track Tracker — larger app to allow tracking of track workouts, weights, injuries, meals, etc</li>
        </ul>
      </section>

      <section id="contact" style={{ marginBottom: 40 }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:zkralec@icloud.com">zkralec@icloud.com</a></p>
        <p>GitHub: <a href="https://github.com/zkralec" target="_blank" rel="noreferrer">github.com/zkralec</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/zack-kralec-8b5a7a263/" target="_blank" rel="noreferrer">linkedin.com/zkralec</a></p>
      </section>

      <footer style={{ textAlign: "center", marginTop: 40, fontSize: 14, color: "#555" }}>
        <p>© 2025 Zachary Kralec. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
