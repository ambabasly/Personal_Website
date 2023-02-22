import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>
            {props.weblink === undefined ? (
              props.heading ? (
                props.heading
              ) : (
                ""
              )
            ) : (
              <a
                style={{
                  textDecoration: "none",
                }}
                href={props.weblink}
                target="_blank"
                rel="noreferrer"
              >
                {props.heading}
              </a>
            )}
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Case Study", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "programming-skills.svg" },
  ];

  //here we have
  const programmingSkills = [
    { skill: "JavaScript" },
    { skill: "React JS" },
    { skill: "Node JS" },
    { skill: "SQL" },
    { skill: "Angular" },
    { skill: "HTML and SCSS" },
    { skill: "TypeScript" },
    { skill: "React Native" },
    { skill: "Docker" },
    { skill: "Git" },
  ];

  const projectsDetails = [
    {
      link: "https://employeeadmin.vercel.app/",
      title: "Employee Admin",
      description:
        "This app enables admin to manage employee details, add, edit and delete.",
      subHeading:
        "Tech Stack: TypeScript, Node, React, CSS Tailwind, render, vercel",
    },
    {
      link: "https://ambabasly.github.io/myFlix-Angular-client/welcome",
      title: "Angular App (myFlix)",
      description:
        "Client-side for an application called myFlix based on its existing server-side code (REST API and database), with supporting documentation.",
      subHeading: "Tech Stack: Angular, Node.js, Angular Materials, GitHub",
    },
    {
      link: "https://ambabasly.github.io/meet2/",
      title: "Meet App",
      description:
        "This app uses the Google Calendar API to fetch upcoming events and it is built with a serverless, (PWA) with React using (TDD) technique.",
      subHeading:
        "Tech Stack: React, Google OAuth2, Amazon Lambda for hosting, Enzyme for code testing",
    },
  ];

  const projectsDetailsContd = [
    {
      link: "https://myflixmovieapp.netlify.app/",
      title: "React Movie App (myFlix)",
      description:
        "Client side of movie app called myFlix based on its existing server-side code (REST API and database). A user can access information on movies, directors, genres.",
      subHeading:
        "Tech Stack: React, Redux, CSS, JavaScript, netlify, Axios, Boootstrap",
    },
    {
      link: "http://my-flixdbapp.herokuapp.com/documentation.html",
      title: "Database App (myFlix)",
      description:
        "Server-side component of a 'movies' web application, the web application provide users with access to information about various movies, directors, and genres.",
      subHeading:
        "Tech Stack: Node.js, Express, MongoDB, JavaScript, Heroku, Postman",
    },
    {
      link: "https://www.youtube.com/watch?v=cI2rUnXU8R0",
      title: "React Native Mobile Chat App",
      description:
        "A Chat App for mobile devices using React Native. The app provide users with a chat interface and options to share images and their location.",
      subHeading: "Tech Stack: React Native, Gifted Chat, Firebase, Expo",
    },
    {
      link: "https://ambabasly.github.io/Pokemon-app/",
      title: "JavaScript App Pokédex",
      description:
        "Pokemon app that lists a variety of Pokemon along with their individual attributes pulling info directly from an ext API.",
      subHeading: "Tech Stack: HTML, CSS, JavaScript, Boootstrap",
    },
  ];

  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Consigli AS Oslo"}
          subHeading={"Software Developer."}
          fromDate={"10.2022"}
          toDate={"Present"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            ◉ Optimizing the user experience, using TypeScript, React, and CSS
            to bring concepts to life
          </span>
          <br />
        </div> */}
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Gestalt Robotics Berlin"}
          subHeading={"Software Engineer."}
          fromDate={"02.2022"}
          toDate={"08.2022"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            ◉ Development, integration and testing of users interfaces for
            software in industrial applications
          </span>
          <br />
        </div> */}
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"LocaaTech"}
          subHeading={"Junior Developer (Intern Remote)."}
          fromDate={"06.2020"}
          toDate={"12.2021"}
        />
        {/* <div className="experience-description">
          <span className="resume-description-text">
            ◉ Help real estate customers buy, rent or solve daily problems with
            their property
          </span>
          <br />
          <span className="resume-description-text">
            ◉ Helped in handling workflow as we progress on the development of
            applications
          </span>
          <br />
        </div> */}
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkills.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          weblink={projectsDetails.link}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div>,
    /* PROJECTS Contd */
    <div className="resume-screen-container" key="projects">
      {projectsDetailsContd.map((projectsDetailsContd, index) => (
        <ResumeHeading
          key={index}
          weblink={projectsDetailsContd.link}
          heading={projectsDetailsContd.title}
          subHeading={projectsDetailsContd.subHeading}
          description={projectsDetailsContd.description}
        />
      ))}
    </div>,

    /* CaseStudy */
    <div className="resume-screen-container" key="CaseStudy">
      <div>
        <img
          src="/Angolar.png"
          alt="img"
          style={{
            height: "18rem",
            width: "100%",
          }}
        />
      </div>
      <a href="/casestudy">
        <p align="center">
          <button
            className="big-btn"
            style={{
              width: "90%",
              color: "#E91E63",
            }}
          >
            CLICK TO OPEN CASE STUDY
          </button>
        </p>
      </a>
    </div>,

    /* EDUCATION */
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Ludwigshafen University of Business & Society Germany"}
        subHeading={"MBA, International Business Management"}
        fromDate={"02.2021"}
        toDate={"1.2023"}
      />

      <ResumeHeading
        heading={"Careerfoundry"}
        subHeading={"Bootcamp"}
        fromDate={"04.2021"}
        toDate={"10.2021"}
      />

      <ResumeHeading
        heading={"Ambrose Alli University Ekpoma"}
        subHeading={"Bachelor of Science in Chemistry"}
        fromDate={"10.2010"}
        toDate={"10.2014"}
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
