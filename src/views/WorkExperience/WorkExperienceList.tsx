import React from 'react'
import WorkExperienceCard from './WorkExperienceCard';

interface Props {
    data: any
}

const WorkExperienceList = (props: Props) => {
    const { data } = props;

    return (
        data.map((data: any, index: number) => <WorkExperienceCard key={index} data={data} />)
    )
}

export default WorkExperienceList
