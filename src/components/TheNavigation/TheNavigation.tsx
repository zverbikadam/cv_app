import React, { useState } from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import { Link } from 'react-router-dom';
import './TheNavigation.css';

interface Props {

}

const TheNavigation = (props: Props) => {

    const [activePath, setActivePath] = useState("Home");

    // active language
    const enLanguage = useLanguage();

    // data to be rendered
    const data = enLanguage ?
        {
            home: "Home",
            projects: "Projects",
            education: "Education",
            work_experience: "Work experience",
            skills: "Skills",
            cv: "Resume",
            contact: "Contact"
        }
        :
        {
            home: "Domov",
            projects: "Projekty",
            education: "Vzdelanie",
            work_experience: "Pracovné skúsenosti",
            skills: "Vedomosti",
            cv: "Životopis",
            contact: "Kontakt"
        }


    // handleClick
    const handleClick = (event: any) => {
        setActivePath(event.target.innerText);
    }


    // template
    return (
        <nav className="the-navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link
                        className={activePath === data.home ? "active link" : "link"}
                        to="/"
                        onClick={handleClick}
                    >
                        {data.home}
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link
                        className={activePath === data.projects ? "active link" : "link"}
                        to="/projects"
                        onClick={handleClick}
                    >
                        {data.projects}
                    </Link>
                </li>
                <li className="dropdown-item">
                    <Link className="link" to="#">
                        {data.cv}
                    </Link>
                    <div className="dropdown-content">
                        <ul className="navigation-list subnav-list">
                            <li className="subnav-item">
                                <Link
                                    className={activePath === data.education ? "active link dropdown-link" : "link dropdown-link"}
                                    to="/cv/education"
                                    onClick={handleClick}
                                >
                                    {data.education}
                                </Link>
                            </li>
                            <li className="subnav-item">
                                <Link
                                    className={activePath === data.work_experience ? "active link dropdown-link" : "link dropdown-link"}
                                    to="/cv/work_exp"
                                    onClick={handleClick}
                                >
                                    {data.work_experience}
                                </Link>
                            </li>
                            <li className="subnav-item">
                                <Link
                                    className={activePath === data.skills ? "active link dropdown-link" : "link dropdown-link"}
                                    to="/cv/skills"
                                    onClick={handleClick}
                                >
                                    {data.skills}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <Link
                        className={activePath === data.contact ? "active link" : "link"}
                        to="/contact"
                        onClick={handleClick}
                    >
                        {data.contact}
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default TheNavigation;
