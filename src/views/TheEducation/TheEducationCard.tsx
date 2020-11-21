import React from 'react'
import '../TheCard.css';
import { useLanguage } from '../../Context/LanguageContext';


interface Props {
    data: any
}

const TheEducationCard = (props: Props) => {
    // props
    const { data } = props;

    const enLanguage = useLanguage();

    const description = enLanguage ?
        {
            field_of_study: "Field of study",
            thesis: "Thesis",
            final_examination: "Final examination"
        }
        :
        {
            field_of_study: "Študijný odbor",
            thesis: "Téma",
            final_examination: "Záverečná skúška"
        }


    return (
        <div className="card">
            <header className="card-header">
                <h2 className="card-name">{data.faculty?.length ? `${data.name}, ${data.faculty}` : data.name}</h2>
            </header>
            <main className="card-main">
                <p className="card-year">{`${data.year} - ${data.city}, ${data.country}`}</p>
                {
                    data.field_of_study &&
                    <article>
                        <h4 className="card-heading">{`${description.field_of_study}: `}</h4>
                        <p className="card-p">
                            {`${data.field_of_study} - ${data.degree}`}
                        </p>
                    </article>
                }
                {
                    data.final_examination?.length > 0 &&
                    <article>
                        <h4 className="card-heading">{`${description.final_examination}: `}</h4>
                        <p className="card-p">
                            {`${data.final_examination}`}
                        </p>
                    </article>
                }
                 {
                    data.thesis?.length > 0 &&
                    <article>
                        <h4 className="card-heading">{`${description.thesis}: `}</h4>
                        <p className="card-p">
                            {`${data.thesis}`}
                        </p>
                    </article>
                }
            </main>
        </div>
    )
}

export default TheEducationCard
