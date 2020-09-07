import React from 'react'
import TheEducationCard from './TheEducationCard';

interface Props {
    data: any
}

const TheEducationList = (props: Props) => {
    const { data } = props;

    return (
        data.map((data: any, index: number) => <TheEducationCard key={index} data={data} />)
    )
}

export default TheEducationList
