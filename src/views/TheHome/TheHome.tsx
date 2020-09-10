import React from 'react';
import './TheHome.css';
import { useLanguage } from '../../Context/LanguageContext';
import Image from './../../assets/images/photo.jpg';

interface Props {

}

const TheHome = (props: Props) => {
    const enLanguage = useLanguage();

    const data = enLanguage ?
        {
            heading: "Hi, I'm Adam!",
            content: "I study information and automation in industry in Trnava, but I live in Brno."
        }
        :
        {
            heading: "Ahoj, volám sa Adam!",
            content: "Študujem informatiku a automatizáciu v priemysle v Trnave, ale žijem a bývam v Brne."
        }

    return (
        <div className="the-home">
            <img className="home-image" src={Image} alt="img" width="30%" />
            <h3 className="home-heading">{data.heading}</h3>
            <p className="home-content">{data.content}</p>
        </div>
    )
}

export default TheHome
