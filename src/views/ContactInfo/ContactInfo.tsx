import React from "react";
import "../TheCard.css";
import "./ContactInfo.css";

interface Props {}

const ContactInfo = (props: Props) => {
  return (
    <div className="card">
      <main className="card-main">
        <ul>
          <li>
            <a
              href="www.linkedin.com/in/zverbikadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zverbikadam"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>zverbik.a@gmail.com</li>
        </ul>
      </main>
    </div>
  );
};

export default ContactInfo;
