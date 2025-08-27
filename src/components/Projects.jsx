// src/components/Projects.js
import React from "react";
import Section from "./Section";


// {
//     title: "JP Morgan Code For Good (Loadstar)",
//     about:
//       "Full-stack web/mobile app to help in-field staff manage home-visit workflows and safety.",
//     tags: ["Next.js", "React", "TypeScript", "Tailwind", "Express.js", "Node.js"],
//     code: "#",
//     demo: "#"
//   },

const featured = [
];



export default function Projects() {
  return (
    <>
      <Section id="projects" title="Projects"
        subtitle="Honing technical skills through real-world applications">
        <div className="grid grid--3">
          {featured.map((p, i) => (
            <article key={i} className="card card--project">
              <div className="card__body">
                <h3 className="card__title">{p.title}</h3>
                <p className="card__text">{p.about}</p>
                <div className="pills">
                  {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>
              <div className="card__actions">
                <a className="btn btn--ghost" href={p.code}>Code</a>
                <a className="btn" href={p.demo}>Demo</a>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <div className="center">
          <a className="btn btn--outline" href="https://github.com/poojito" aria-label="View all projects on GitHub">
            View All Projects on GitHub
          </a>
        </div>
    </>
  );
}
