// src/components/Contact.js
import React from "react";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="Connect With Me">
      <div className="grid grid--3 contact-grid">
        <a className="card card--link" href="https://www.linkedin.com/in/poojit-tumm/">
          <strong>LinkedIn</strong>
          <span className="muted">poojit-tumm</span>
        </a>
        <a className="card card--link" href="https://github.com/poojito">
          <strong>GitHub</strong>
          <span className="muted">@poojito</span>
        </a>
        <a className="card card--link" href="mailto:careerpoojittummalapalli@gmail.com">
          <strong>Email</strong>
          <span className="muted">careerpoojittummalapalli@gmail.com</span>
        </a>
      </div>

      <div className="cta">
        <a className="btn" href="#" download>Download Resume</a>
      </div>
    </Section>
  );
}
