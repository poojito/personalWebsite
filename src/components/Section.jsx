// src/components/Section.js
import React from "react";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section">
      {title && (
        <header className="section__header">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
