import React from "react";
import "../TheCard.css";

interface Props {
  data: any;
}

const WorkExperienceCard = (props: Props) => {
  // props
  const { data } = props;

  return (
    <div className="card">
      <header className="card-header">
        <h2 className="card-name">{data.name}</h2>
      </header>
      <main className="card-main">
        <p className="card-year">{`${data.year} - ${data.city}, ${data.country}`}</p>
        {data.title?.length > 0 && (
          <article>
            <h4 className="card-heading">{data.title}</h4>
          </article>
        )}
      </main>
    </div>
  );
};

export default WorkExperienceCard;
