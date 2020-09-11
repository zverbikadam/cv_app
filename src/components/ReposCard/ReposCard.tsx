import React from 'react'
import { useLanguage } from '../../Context/LanguageContext';
import './ReposCard.css';

interface Props {
    repo: any;
}

const ReposCard = (props: Props) => {
    const { repo } = props;
    const enLanguage = useLanguage();
    const button_text = enLanguage ? "Open in github" : "Otvoriť v github"

    return (
        <div className="repos-card">
            <header className="repos-header">
                <h2 className="repos-title">{repo.name}</h2>
            </header>
            <div className="repos-body">
                <p className="repos-text">{repo.description}</p>
                <a className="repos-button" href={repo.html} target="_blank" rel="noopener noreferrer">{button_text}</a>
            </div>
        </div>
    )
}

export default ReposCard;
