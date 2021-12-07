import React from "react";
import "./CasesStudy.css";

const CasesStudy = () => {
  return (
    <div>
      <title>Case Study</title>
      <nav
        className="navbar navbar-expand-lg
            page-header
            fixed-top
            main-navigation
            -light
            bg-success"
      >
        <span class="navbar-brand mb-0 h1">SYLVESTER ARIKHAN</span>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="index.html" className="nav__link active-link">
                <i className="uil uil-estate nav__icon" /> Back to home{" "}
                <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="nav__btns">
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-estate nav__icon" />
          </div>
        </div>
      </nav>

      {/* Case Study */}
      <div className="body">
      <div className="about__container container grid">
          <div>
            <h1 className="title">MYFLX APPLICATION </h1>
            <br />
            <h2 className="title">
              <strong>myFlix Overview (Case Study)</strong>
            </h2>
            <p>
              myFlix is a web application developed with the MERN stack that
              allows users to access information about movies, directors, and
              genres. Users can sign in, register, update their personal
              information, and create a list of their favorite movies.
            </p>
          </div>
        </div>

        <div className="about__container container grid">
          <div>
            <h2 className="title">
              <strong>Objective</strong>
            </h2>
            <p>
              The objective of the project was to create an interactive and
              entertaining web application for movie lovers who enjoy reading
              information about different movies. Backend Objective: The server
              side of the myFlix application should ensure that users have
              access to information about different movies, that their requests
              can be processed and that all necessary data can be stored.
              Frontend Objective: The client side will create the user interface
              through which users will make requests to and receive responses
              from the server side.
            </p>
          </div>
        </div>

        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/Angolar.png"
                        alt="reactapp"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">Angular Front-End</h3>
                      <p className="card-text">
                        myFlix is a web app, developed using the MERN stack,
                        that allows users to access information about movies,
                        directors, and genres. Users are able to login,
                        register, update their personal data, and create a list
                        of favorite movies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/auth.png"
                        alt="Database App myFlix"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">Authentication Logic</h3>
                      <p className="card-text">
                        "auth.js" (for "authentication"). I created a new
                        endpoint for the API with the URL "/login". An endpoint
                        that allows existing registered users to log in, to
                        implement basic HTTP authentication for login requests,
                        because I already have passport strategies installed and
                        configured.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/get.png"
                        alt="React App (myFlix)"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">CRUD operation</h3>
                      <p className="card-text">
                        Using Node.js and Express.js, I designed the RESTful API
                        and tested the endpoints using Postman. I used MongoDB
                        to create a non-relational database and Mongoose to
                        create the business logic. REST API can be accessed
                        using common HTTP methods such as GET or POST. Similar
                        methods CRUD can be used to retrieve and store data in a
                        non-relational manner.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/DB.jpg"
                        alt="Meet App"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">MongoDB Database</h3>
                      <p className="card-text">
                        I created a RESTful API using Node.js and Express, that
                        interacts with a non-relational database (MongoDB). The
                        API can be accessed via commonly used HTTP methods like
                        GET or POST. To retrieve data from and store data in the
                        database, CRUD methods are used. The API provides movie
                        information in JSON format.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/reactapp.png"
                        alt="React Native Mobile Chat App"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">Client-side</h3>
                      <p className="card-text">
                        Using React, I created separate components for the
                        different views of the application. (Welcome page,
                        login/registration, movies, genres, directors and user
                        profile). Using React-Router-Dom, I implemented logic to
                        process app requests and direct users to the different
                        views within the app.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6 projects-card">
                <div className="card card-flip h-100">
                  <div className="card-front bg-white">
                    <div className="card-body">
                      <img
                        src="/models.png"
                        alt="Angular App myFlix"
                        style={{ width: "100%", height: "90%" }}
                      />
                    </div>
                  </div>
                  <div className="card-back bg-white">
                    <div className="card-body">
                      <h3 className="card-title">Querying Mongoose Models</h3>
                      <p className="card-text">
                        Using the business logic layer, Mongoose, I integrated
                        business logic into my app by mapping my database to
                        models that I can use in my REST API methods. I use
                        Mongoose to interact with these models.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about__container container grid">
          <div>
            <h2 className="title">
              <strong>Challenges</strong>
            </h2>
            <p>
              Having never worked with a terminal before, it took me a long time
              to understand how easy it is to use terminals. I enjoyed every
              stage of the project, but of course challenges are always part of
              the learning process. I definitely struggled at each stage, for
              example creating my database with Atlas was a pain for me, but in
              the end it was really fantastic to learn and understand each
              process.
            </p>
          </div>
        </div>

        <div className="about__container container grid">
          <div>
            <h2 className="title">
              <strong>Duration</strong>
            </h2>
            <p>
              Developing the client side using both React and Angular frameworks
              took me twice as long as completing the server side. This was
              because I needed time to fully understand how React (and React
              Redux) worked. Including all the features and Angular materials,
              the learning process and the main features, the whole activity
              took about 2 months. Thanks to this project.</p>
              <p>I became much more familiar with how the RESTful
              architecture works and how the structure of larger projects is
              built. I also learned a lot more about JavaScript and of course
              its most famous framework, React and Angular.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="col2">
          <div className="social-media">
            <a href="https://www.linkedin.com/in/sylvester-arikhan-367381157/">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://github.com/ambabasly">
              <i className="fa fa-github"></i>
            </a>
            <a href="https://twitter.com/ambabasly">
              <i className="fa fa-twitter-square"></i>
            </a>
          </div>
          <i className="fa fa-copyright" aria-hidden="true"></i>
          <span>Sylvester Arikhan. </span>
          <span>2021</span>|<span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default CasesStudy;
