import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import json_data from './../../data/work-experience.json';
import WorkExperienceList from './WorkExperienceList';


interface Props {
    
}

const WorkExperience = (props: Props) => {
    // active language
    const enLanguage = useLanguage();

    const data = enLanguage ? json_data.en : json_data.sk;
   

    // template
    return (
        <div className="the-WorkExperience">
            <main>
                <WorkExperienceList data={data} />
            </main>
        </div>
    )
}

export default WorkExperience
