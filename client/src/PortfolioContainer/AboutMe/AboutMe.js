// eslint-disable-next-line
import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "I am a Full-Stack Web Developer with experience in JavaScript MERN stack and building responsive web and mobile application and a background in science. Working as a chemist, has provided me the ability to performing quality/assurance, working in a team environment, and putting our customers at the forefront of everything I do. When I started to become a Developer, I came to realize that these skills really help to make a difference in the field. Now I am very interested in learning about Project Management, new technologies and new languages. keeping up team spirit to achieve organisational goals and keep a lasting legacy. I'm currently available for full-time, part-time and freelance work.",
    highlights: {
      bullets: [
        "Full Stack web and mobile development",
        "MERN Stack",
        "Test Driven Development",
        "Building REST API",
        "SAP (ERP)",
        "Web Ethics and Data Security",
        "Documentation and Collaborative Working"
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"This page is about me, and this is what I enjoy doing:"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Contact Me
              </button>
              <a href="/slycv.pdf" download="Sylvester CV.pdf">
                <button className="btn highlighted-btn">Get My Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
