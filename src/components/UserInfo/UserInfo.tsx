import React from 'react';
import UserPhoto from './../../assets/images/foto.png';

// style
import './UserInfo.css'
import { useLanguage } from '../../Context/LanguageContext';

interface Props {
    user: any
}

const UserInfo = (props: Props) => {
    const { user } = props;
    const enLanguage = useLanguage();
    const data = enLanguage ?
        // english language
        {
            birth: "Date of birth",
            nationality: "Nationality",
            gender: "Gender",
            contact: "Contact"
        }
        : // slovak language
        {
            birth: "Dátum narodenia",
            nationality: "Národnosť",
            gender: "Pohlavie",
            contact: "Kontakt"
        }



// template
return (
    <div>
        <div className="col">
            <img className="user-photo" src={UserPhoto} alt="UserPhoto" />
        </div>
        <div className="col">
            <h2>{`${user.title} ${user.firstname} ${user.surname}`}</h2>
            <hr />
            <h5>{data.birth}</h5>
            <p>{user.birth_date}</p>
            <h5>{data.nationality}</h5>
            <p>{user.nationality}</p>
            <h5>{data.gender}</h5>
            <p>{user.gender}</p>
            <h5>{data.contact}</h5>
            <p>{user.phone}</p>
            <p>{user.email}</p>
            <hr></hr>
            <p>
                {`${user.address}, ${user.zip_code}, ${user.city}, ${user.country}`}
            </p>
        </div>
    </div>
)
}

export default UserInfo;
