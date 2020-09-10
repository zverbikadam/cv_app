import React from 'react'
import { useLanguage } from '../Context/LanguageContext';

interface Props {
    repo: any;
}

const ReposCard = (props: Props) => {
    const { repo } = props;
    const enLanguage = useLanguage();
    const button_text = enLanguage ? "Open in github" : "Otvoriť v github"

    return (
        <div>
            <header>
                <h2>{repo.name}</h2>
            </header>
            <main>
                <p>{repo.description}</p>
                <a href={repo.html} target="_blank" rel="noopener noreferrer">{button_text}</a>
            </main>
        </div>
    )
}

export default ReposCard;
