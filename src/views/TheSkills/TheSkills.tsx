import React from "react";
import { useLanguage } from "../../Context/LanguageContext";
import "../TheCard.css";

interface Props {}

const TheSkills = (props: Props) => {
  const language = useLanguage();

  const skills = language
    ? {
        advanced: "Intermediate knowledge",
        basic: "Basic knowledge",
        other: "Other knowledge",
        skills: ["Electric guitar", "Acoustic guitar", "Classic guitar"],
      }
    : {
        advanced: "Pokročilé znalosti",
        basic: "Základné znalosti",
        other: "Ostatné znalosti",
        skills: ["Elektrická gitara", "Akustická gitara", "Klasická gitara"],
      };

  return (
    <div>
      <div className="card">
        <header className="card-header">
          <h2 className="card-name">{skills.advanced}</h2>
        </header>
        <main className="card-main">
          <ul className="skills-list">
            <li className="skills-list-item">React.js</li>
            <li className="skills-list-item">C#/.NET</li>
            <li className="skills-list-item">MySQL</li>
            <li className="skills-list-item">HTML</li>
            <li className="skills-list-item">CSS</li>
          </ul>
        </main>
      </div>
      <div className="card">
        <header className="card-header">
          <h2 className="card-name">{skills.basic}</h2>
        </header>
        <main className="card-main">
          <ul className="skills-list">
            <li className="skills-list-item">Linux</li>
            <li className="skills-list-item">Python</li>
          </ul>
        </main>
      </div>
      <div className="card">
        <header className="card-header">
          <h2 className="card-name">{skills.other}</h2>
        </header>
        <main className="card-main">
          <ul className="skills-list">
            <li className="skills-list-item">Ableton Live 10</li>
            <li className="skills-list-item">Sony Vegas Pro</li>
            {skills.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default TheSkills;
