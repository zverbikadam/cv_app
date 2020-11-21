import React from "react";
import { useLanguage } from "../../Context/LanguageContext";
import "../../views/TheCard.css";

interface Props {
  repo: any;
}

const ReposCard = (props: Props) => {
  const { repo } = props;
  const enLanguage = useLanguage();
  const button_text = enLanguage ? "Open in github" : "Otvoriť v github";

  return (
    <div className="card">
      <header className="card-header">
        <h2 className="card-name">{repo.name}</h2>
      </header>
      <main className="card-name">
          <p className="repos-text">{repo.description}</p>
          <a
            className="repos-button"
            href={repo.html}
            target="_blank"
            rel="noopener noreferrer"
          >
            {button_text}
          </a>
      </main>
    </div>
  );
};

export default ReposCard;
