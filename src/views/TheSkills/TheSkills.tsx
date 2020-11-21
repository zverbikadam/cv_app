import React from "react";
import { useLanguage } from "../../Context/LanguageContext";
import "./TheSkills.css";

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
        other: "Ine znalosti",
        skills: ["Elektrická gitara", "Akustická gitara", "Klasická gitara"],
      };

  return (
    <div className="skills-card">
      <div className="skills-advanced">
        <h4>{skills.advanced}</h4>
        <ul className="skills-list">
          <li className="skills-list-item">React.js</li>
          <li className="skills-list-item">C#/.NET</li>
          <li className="skills-list-item">MySQL</li>
          <li className="skills-list-item">HTML</li>
          <li className="skills-list-item">CSS</li>
        </ul>
      </div>
      <div className="skills-basic">
        <h4>{skills.basic}</h4>
        <ul className="skills-list">
          <li className="skills-list-item">Linux</li>
          <li className="skills-list-item">Python</li>
        </ul>
      </div>
      <div className="skills-other">
        <h4>{skills.other}</h4>
        <ul className="skills-list">
          <li className="skills-list-item">Ableton Live 10</li>
          <li className="skills-list-item">Sony Vegas Pro</li>
          {skills.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TheSkills;
