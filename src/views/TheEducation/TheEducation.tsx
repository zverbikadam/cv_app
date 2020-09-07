import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import TheEducationCard from './TheEducationCard';
import './TheEducation.css';
import Education from './../../data/education-data.json';
import TheEducationList from './TheEducationList';


interface Props {
    
}

const TheEducation = (props: Props) => {
    // active language
    const enLanguage = useLanguage();

    const data = enLanguage ? Education.en : Education.sk;
   

    // template
    return (
        <div className="the-education">
            <header className="education-header">
                <TheEducationCard data={data.current} />
            </header>
            <main>
                <TheEducationList data={data.previous} />
            </main>
        </div>
    )
}

export default TheEducation
