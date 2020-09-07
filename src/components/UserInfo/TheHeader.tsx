import React from 'react';

// style
import './TheHeader.css'
import { useLanguage, useLanguageUpdate } from '../../Context/LanguageContext';

interface Props {
    user: any
}

const UserInfo = (props: Props) => {
    const { firstname, surname } = props.user;

    const enLanguage = useLanguage();

    const toggleLanguage = useLanguageUpdate();

    // template
    return (
        <div className="the-header">
            <div className="col">
                <h1 className="user-name">{`${firstname} ${surname}`}</h1>
            </div>
            <div className="col" id="button">
                <button className="button" onClick={toggleLanguage}>{enLanguage ? "SK" : "EN"}</button>
            </div>
        </div>
    )
}

export default UserInfo;
