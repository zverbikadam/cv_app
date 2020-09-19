import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import { NavLink as Link } from 'react-router-dom';
import './TheNavigation.css';

interface Props {

}

const TheNavigation = (props: Props) => {

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


    // template
    return (
        <nav className="the-navigation">
            <ul className="navigation-list">
                <li className="navigation-item">
                    <Link
                        className="link"
                        activeClassName="active"
                        to="/" exact
                    >
                        {data.home}
                    </Link>
                </li>
                <li className="navigation-item">
                    <Link
                        className="link"
                        activeClassName="active"
                        to="/projects"
                    >
                        {data.projects}
                    </Link>
                </li>
                <li className="dropdown-item">
                    <Link
                        className="link"
                        activeClassName="active"
                        to="/cv"
                        aria-disabled
                    >
                        {data.cv}
                    </Link>
                    <div className="dropdown-content">
                        <ul className="navigation-list subnav-list">
                            <li className="subnav-item">
                                <Link
                                    className="link dropdown-link"
                                    activeClassName="active"
                                    to="/cv/education"
                                >
                                    {data.education}
                                </Link>
                            </li>
                            <li className="subnav-item">
                                <Link
                                    className="link dropdown-link"
                                    activeClassName="active"
                                    to="/cv/work_exp"
                                >
                                    {data.work_experience}
                                </Link>
                            </li>
                            <li className="subnav-item">
                                <Link
                                    className="link dropdown-link"
                                    activeClassName="active"
                                    to="/cv/skills"
                                >
                                    {data.skills}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="navigation-item">
                    <Link
                        className="link"
                        activeClassName="active"
                        to="/contact"
                    >
                        {data.contact}
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export default TheNavigation;
