import React from "react";

export default function Intro() {
  return (
    <div className="intro">
      <h1 className="intro__title">Hey, I'm Poojit</h1>
      <h3 className="intro__tagline">Computer Science Student</h3>

      <p className="intro__blurb">
        Hey — I'm Poojit. I am a software engineer with interests spanning ML/AI, application development, and algorithmic trading. 
      </p>

      <p className="intro__blurb">
        Explore my website to view my qualifications, projects, and chat with my assistant to learn how I can make an impact at your company.
      </p>

      <div className="pills">
        {["Python", "Java", "JavaScript", "C++", "C", "Go", "SQL", "HTML", "CSS", "R", "Scala", "Bash"].map((t) => (
          <span key={t} className="pill">{t}</span>
        ))}
      </div>

      <div className="pills pills--tools">
        {[
            "Node.js", "Express.js", "Flask", "Spring Boot", "GraphQL", "gRPC",
            "Postman", "React.js", "Next.js", "Cypress", "Selenium", "LangChain",
            "LLaVA", "Ollama", "Hugging Face Transformers", "PyTorch", "Keras",
            "Scikit-Learn", "Pandas", "NumPy", "BeautifulSoup", "MongoDB", "Redis",
            "SAP ECC", "SAP CPI/BTP", "AWS ECS", "Vercel", "Kubernetes", "Docker",
            "Jenkins"
        ].map((t) => (
          <span key={t} className="pill pill--ghost">{t}</span>
        ))}
      </div>
    </div>
  );
}

