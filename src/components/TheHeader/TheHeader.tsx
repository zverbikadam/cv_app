import React from 'react';

// children component
import LanguageButton from './LanguageButton/LanguageButton';

// style
import './TheHeader.css';

interface Props {
    user: any
}

const UserInfo = (props: Props) => {
    const { firstname, surname } = props.user;

    // template
    return (
        <div className="the-header">
            <div className="col">
                <h1 className="user-name">{`${firstname} ${surname}`}</h1>
            </div>
            <div className="col" id="button">
                <LanguageButton />
            </div>
        </div>
    )
}

export default UserInfo;
