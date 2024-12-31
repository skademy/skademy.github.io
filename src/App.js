import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Saboor Khan</h1>
        <p>Software Developer | Flutter & React Enthusiast</p>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Saboor Khan, a passionate developer specializing in mobile and
          web development. I create efficient and user-friendly applications.
        </p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="project">
          <h3>Project 1</h3>
          <p>A Flutter app for task management.</p>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>A Node.js-based real-time chat application.</p>
        </div>
      </section>

      <footer>
        <p>
          Connect with me: <a href="https://linkedin.com/in/saboor">LinkedIn</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
