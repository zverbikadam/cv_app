import React from 'react';
import './LanguageButton.css';
import { useLanguageUpdate, useLanguage } from '../../../Context/LanguageContext';

interface Props {

}

const LanguageButton = (props: Props) => {
    const enLanguage = useLanguage()
    const toggleLanguage = useLanguageUpdate();

    return (
        <button className="button" onClick={toggleLanguage}>{enLanguage ? "SK" : "EN"}</button>
    )
}

export default LanguageButton
