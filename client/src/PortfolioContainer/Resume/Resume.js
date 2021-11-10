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
          <span>{props.heading ? props.heading : ""}</span>
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
    { label: "Projects2", logoSrc: "projects.svg" },
    { label: "Education", logoSrc: "education.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "SQL", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 65 },
    { skill: "CSS", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "JavaScript App Pokédex",
      duration: { fromDate: "", toDate: "" },
      description:
        "Pokemon app that lists a variety of Pokemon along with their individual attributes pulling info directly from an ext API",
      subHeading: "Tech Stack: HTML, CSS, Javascript, Boootstrap",
    },
    {
      title: "Database App (myFlix)",
      duration: { fromDate: "", toDate: "" },
      description:
        "Server-side component of a 'movies' web application, the web application provide users with access to information about various movies, directors, and genres, and are able to sign up, update their personal information.",
      subHeading:
        "Tech Stack: Node.js, Express, MongoDB, JavaScript, Heroku, Postman",
    },
    {
      title: "Meet App",
      duration: { fromDate: "", toDate: "" },
      description:
        "This app uses the Google Calendar API to fetch upcoming events and it is built with a serverless, (PWA) with React using (TDD) technique.",
      subHeading:
        "Tech Stack: React, Google OAuth2, Amazon Lambda for hosting, Enzyme for code testing",
    },
  ];

  const resumeDetails = [
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"LocaaTech"}
          subHeading={"Junior Developer (Intern Remote)."}
          fromDate={"06.2020"}
          toDate={"Date"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Contributing in the development of web apps, using HTML, CSS,
            JavaScript.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Working along with Senior Developers to solving programming tasks.
          </span>
          <br />
          <span className="resume-description-text">
            - Helped in handling workflow as we progress on the development of
            applications.
          </span>
          <br />
        </div>
      </div>

      <div className="experience-container">
        <ResumeHeading
          heading={"Volkswagen Sachsen GmbH Sachsen"}
          subHeading={"Working Student."}
          fromDate={"12.020"}
          toDate={"06.2020"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Receiving deliveries of vehicle parts and preparing them for
            production line.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Assembling parts ready to be fitted to vehicle.
          </span>
          <br />
          <span className="resume-description-text">
            - Shaping metal sheets that will make up frame of the vehicle.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
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
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Project2 */
    <div className="resume-screen-container" key="project2s">
      <ResumeHeading
        heading="Angular App (myFlix)"
        subHeading="Tech Stack: Angular, Node.js, Angular Materials, GitHub"
        description="Client-side for an application called myFlix based on its existing server-side code (REST API and database), with supporting documentation. Users are able to use the app whenever they want to read information about different."
      />
      <ResumeHeading
        heading="React App (myFlix)"
        subHeading="Tech Stack: React, Redux, CSS, Javascript, netlify, Axios, Boootstrap"
        description="Client side of movie app called myFlix based on its existing server-side code (REST API and database). A user can access information on movies, directors, genres, and create a profile to save data about his or her favorite movies."
      />
      <ResumeHeading
        heading="React Native Mobile Chat App"
        subHeading="Tech Stack: React Native, Gifted Chat, Firebase, Expo"
        description="Building a chat app for mobile devices using React Native. The app provide users with a chat interface and options to share images and their location."
      />
    </div>,

    /* EDUCATION */
    <div className="resume-screen-container" key="education">
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
