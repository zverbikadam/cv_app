import React from "react";
import { useLanguage } from "../../Context/LanguageContext";
import Education from "./../../data/education-data.json";
import TheEducationList from "./TheEducationList";

interface Props {}

const TheEducation = (props: Props) => {
  // active language
  const enLanguage = useLanguage();

  const data = enLanguage ? Education.en : Education.sk;

  // template
  return (
    <div className="the-education">
      <main>
        <TheEducationList data={data} />
      </main>
    </div>
  );
};

export default TheEducation;
