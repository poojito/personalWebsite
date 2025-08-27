import React from "react";
import Section from "./Section";

const jobs = [
  {
    company: "ADP",
    title: "Software Engineer Intern",
    dates: "Jun 2024 – Aug 2024",
    location: "Florham Park, CA",
    bullets: [
      "Implemented React-Query support to enhance in-production API frameworks within app architectures and support developers across other agile teams resulting in minimizing API requests to a high-use client application by 20%.",
      "Implemented a Jenkins pipeline tool into multiple DevOps production cycles to automatically update meta packages upon new pull requests with updated packages to codebases, improving code deployment time by 30%.",
      "Developed and fixed 10 automation unit tests for key requirements across two application business flows, owned by multiple stakeholders, to ensure accuracy and compliance for newly updated application website UIs.",
      "Worked on several Jira stories across an application delivery lifecycle and collaboratively defined functional/non-functional requirements as part of the Agile software development process."
    ]
  },
];

export default function Experience() {
  return (
    <Section id="experience" title="Experience" subtitle="">
      <div className="timeline">
        {jobs.map((j, i) => (
          <article key={i} className="card card--row">
            <div className="card__meta">
              <div className="badge">{j.company.split(" ")[0]}</div>
              <div className="meta__row">
                <span>{j.dates}</span>
                <span>•</span>
                <span>{j.location}</span>
              </div>
            </div>
            <div className="card__body">
              <h3 className="card__title">{j.title}</h3>
              <ul className="list">
                {j.bullets.map((b, k) => <li key={k}>{b}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
