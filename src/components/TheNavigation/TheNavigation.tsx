import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import { Link } from 'react-router-dom';
import './TheNavigation.css';

interface Props {

}

const TheNavigation = (props: Props) => {
    // active language
    const enLanguage = useLanguage();

    const data = enLanguage ?
        {
            home: "Home",
            projects: "Projects",
            education: "Education",
            skills: "Skills",
            cv: "Resume",
            contact: "Contact"
        }
        :
        {
            home: "Domov",
            projects: "Projekty",
            education: "Vzdelanie",
            skills: "Skúsenosti",
            cv: "Životopis",
            contact: "Kontakt"
        }

    return (
        <div className="the-navigation">
            <Link className="link" to="/">{data.home}</Link>
            <Link className="link" to="/education">{data.education}</Link>
            <Link className="link" to="/skills">{data.skills}</Link>
            <Link className="link" to="/projects">{data.projects}</Link>
            <Link className="link" to="/cv">{data.cv}</Link>
            <Link className="link" to="/contact">{data.contact}</Link>
        </div>
    )
}

export default TheNavigation;
