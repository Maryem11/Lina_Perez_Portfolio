import React from "react";
import "./App.css";
import SkillsFlow from "./components/SkillsFlow";
import ContactLinks from "./components/ContactLinks";
import { selectedProjects } from "./data/skillsData";
import colombia from "./colombia.jpg";

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main">
        <section
          className="tree-section"
          id="skills"
          aria-labelledby="tree-title"
        >
          <div className="intro">
            <p className="eyebrow">Business & Data Analytics</p>
            <h1 id="tree-title">Lina Perez-Romero</h1>
            <p>Rooted in curiosity. Growing through data.</p>
          </div>
          <SkillsFlow />
        </section>
        <section
          className="about section-wrap"
          id="about"
          aria-labelledby="about-title"
        >
          <figure>
            <img
              src={colombia}
              alt="Mountain landscape in Colombia"
              loading="lazy"
            />
            <figcaption>Colombia / where my story begins</figcaption>
          </figure>
          <div>
            <p className="eyebrow">01 / The roots</p>
            <h2 id="about-title">A little about Lina.</h2>
            <p className="lead">
              Business analytics graduate. Data enthusiast. Adventure seeker.
            </p>
            <p>
              Originally from Colombia, I bring diverse perspectives and
              cultural adaptability to data-driven problem solving.
            </p>
            <p>
              I hold an MS in Business Analytics from San Francisco State
              University, with 5+ years of experience in data analysis, business
              intelligence, and predictive modeling across finance, healthcare,
              and e-commerce.
            </p>
            <p>
              My focus spans machine learning, business intelligence, data
              visualization, and predictive analytics. I’m seeking Data
              Scientist and Data Analyst opportunities to apply these skills to
              complex business challenges.
            </p>
          </div>
        </section>
        <section
          className="projects section-wrap"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / Selected work</p>
              <h2 id="projects-title">Ideas put into practice.</h2>
            </div>
            <p>
              From understanding patterns
              <br />
              to informing decisions.
            </p>
          </div>
          <ol className="project-list">
            {selectedProjects.map((project, index) => (
              <li key={project.link}>
                <span className="project-number">0{index + 1}</span>
                <div>
                  <p className="eyebrow">{project.tag}</p>
                  <h3>
                    <a href={project.link}>
                      {project.title}
                      <span aria-hidden="true"> →</span>
                    </a>
                  </h3>
                  <p>{project.summary}</p>
                </div>
                <a
                  className="repo-link"
                  href={project.link}
                  aria-label={`View ${project.title} repository`}
                >
                  View repository <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ol>
        </section>
        <section
          className="contact section-wrap"
          id="contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">03 / Get in touch</p>
          <h2 id="contact-title">Let’s grow something together.</h2>
          <p className="contact-intro">
            Have an opportunity, a project, or a question about my work?
            I’d love to hear from you.
          </p>
          <ContactLinks />
        </section>
      </main>
      <footer className="section-wrap">
        <p>
          Lina Perez-Romero<span>Curiosity, from root to leaf.</span>
        </p>
        <a href="https://github.com/Maryem11">
          Explore my GitHub <span aria-hidden="true">→</span>
        </a>
      </footer>
    </>
  );
}
export default App;
