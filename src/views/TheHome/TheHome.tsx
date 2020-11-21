import React from "react";
import "./TheHome.css";
import { useLanguage } from "../../Context/LanguageContext";
import Image from "./../../assets/images/photo.jpg";

interface Props {}

const TheHome = (props: Props) => {
  const enLanguage = useLanguage();

  const data = enLanguage
    ? {
        heading: "Hi, I'm Adam!",
        content:
          "I study information and automation in industry in Trnava, but I live in Brno. I love programming, fitness and I am passionate guitar player.",
        note:
          "This web app was developed using React.js with TypeScript template and it is not finished yet.",
      }
    : {
        heading: "Ahoj, volám sa Adam!",
        content:
          "Študujem informatiku a automatizáciu v priemysle v Trnave, ale žijem a bývam v Brne. Baví ma programovanie, fitness a som vášnivý hráš na gitare.",
        note:
          "Táto web appka je vyvíjaná v Reacte s TypeScript template-om a zatiaľ nie je dokončená.",
      };

  return (
    <div className="the-home">
      <img className="home-image" src={Image} alt="img" />
      <h3 className="home-heading">{data.heading}</h3>
      <p className="home-content">{data.content}</p>
      <p className="home-content">{data.note}</p>
    </div>
  );
};

export default TheHome;
