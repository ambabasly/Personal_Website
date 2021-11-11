import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://github.com/ambabasly">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sylvester-arikhan-367381157/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/ambabasly">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Sylvester Arikhan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full-Stack Developer 💻",
                    1000,
                    "MERN Stack Dev 🖥",
                    1000,
                    "Test Driven Development ✔️",
                    1000,
                    "React Native Mobile App 📲",
                    1000,
                    "Project Management 🛠",
                    1000,
                    "SAP (ERP) ✊",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            I am a Full-Stack Developer.
            </span>
            <a href="https://github.com/ambabasly">
                <button className="btn highlighted-btn">Check My Code</button>
              </a>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="/slycv.pdf" download="Sylvester CV.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
