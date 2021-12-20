import React from "react";
import "./CasesStudy.css";

const CasesStudy = () => {
  const myName = "Sylvester Arikhan";
  const currentDate = new Date();

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
        <span className="navbar-brand mb-0 h1">SYLVESTER ARIKHAN</span>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="index.html" className="nav__link active-link">
                <i className="uil uil-estate nav__icon" /> BACK TO HOME{" "}
                <span className="sr-only">(current)</span>
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

      <h1 className="title">MYFLX APPLICATION </h1>
      <div className="body">
        <div class="container-fluid">
          <div className="about__container container grid ">
            <div>
              <h2 className="title">
                <strong>myFlix Overview (Case Study)</strong>
              </h2>
              <p class="text-justify">
                myFlix is a web application developed with the MERN/MEAN stack
                that allows users to access information about movies, directors,
                and genres. Users can sign in, register, update their personal
                information, and create a list of their favorite movies.
              </p>
            </div>
          </div>

          <div className="about__container container grid ">
            <div>
              <h2 className="title">
                <strong>Objective</strong>
              </h2>
              <p class="text-justify">
                The objective of the project was to create an interactive and
                entertaining web application for movie lovers who enjoy reading
                information about different movies. As with its famous
                counterpart - the Internet Movie Database/IMDb - this
                application aimed to enable users to create an account and
                perform a certain number of actions, apart from searching movie
                titles. Read detailed information about a movie, a director, or
                a movie genre, Add a movie to a favorites list, and Modify their
                account information (personal information, favorite movies).
              </p>
            </div>
          </div>

          <div className="about__container container grid ">
            <div>
              <h2 className="title">
                <strong>Development</strong>
              </h2>
              <p class="text-justify">
                The project was developed in 3 distinct phases. The first phase
                involved creating the backend component of the application, that
                is, the part of the application which deals with communicating
                with the server and the database for handling tasks such as
                logging in and accessing the database (viewing, modifying,
                deleting data), while the other 2 part were being created using
                React.js for the frontend and again using Angular for the same
                frontend where users can interact and perform every request.
              </p>
            </div>

            <p class="text-justify">
              <strong>Backend Objective:</strong> The server side of the myFlix
              application should ensure that users have access to information
              about different movies, that their requests can be processed and
              that all necessary data can be stored.
            </p>
            <p class="text-justify">
              A database needed to be created for storing data and, to this end,
              MongoDB was chosen. MongoDB is a no-SQL database, meaning that it
              provides a less rigid structure for creating records. This
              provides flexibility in terms of change in the schema. Unlike
              traditional RDBMS systems, where you need to alter the structure
              of the table if you need a change in the data schema, MongoDB dont
              need you to alter the structure to make such changes.
            </p>
            <p class="text-justify">
              And this logic for interacting with the database was written using
              Node.js, which is a running environment for executing Javascript
              on the server-side. Any interaction with the database from the
              user’s side would have to be translated as a server request
              handled in the back-end component by Node.js. Before proceeding to
              develop the front-end component, all the possible user-generated
              requests were being tested using the Postman tool, which provides
              the possibility to perform CRUD requests.
            </p>

            <p class="text-justify">
              <strong>Frontend Objective:</strong> The client side will create
              the user interface through which users will make requests to and
              receive responses from the server side. A user can access
              information on movies, directors, genres, and create a profile to
              save data about his or her favorite movies, and offcourse delete a
              profile if need be.
            </p>
          </div>

          <div className="title">
            <h2>Tech Stack</h2>
            <h5>
              <strong>
                Angular | Node.js | Express | MongoDB | React.js | netlify |
                Angular Material | Heroku | Bootstrap
              </strong>
            </h5>
          </div>

          <div className="projects">
            <div className="container">
              <div className="row">
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
                        <h3 className="card-title">React Front-End</h3>
                        <p className="text-justify">
                          Using React, I created separate components for the
                          different views of the application.
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
                          src="/Angolar.png"
                          alt="reactapp"
                          style={{ width: "100%", height: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="card-back bg-white">
                      <div className="card-body">
                        <h3 className="card-title">Angular Front-End</h3>
                        <p className="text-justify">
                          Using Angular, I created separate components for the
                          different views of the application.
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
                        <h3 className="card-title">MongoDB</h3>
                        <p className="text-justify">
                          I created a RESTful API using Node.js and Express,
                          that interacts with a non-relational database
                          (MongoDB). The API can be accessed via commonly used
                          HTTP methods like GET or POST.
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
                        <p className="text-justify">
                          An endpoint that allows existing registered users to
                          log in, to implement basic HTTP authentication for
                          login requests.
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
                        <p className="text-justify">
                          Using MongoDB to create a non-relational database and
                          Mongoose to create the business logic. Similar methods
                          CRUD can be used to retrieve and store data in a
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
                          src="/models.png"
                          alt="Angular App myFlix"
                          style={{ width: "100%", height: "90%" }}
                        />
                      </div>
                    </div>
                    <div className="card-back bg-white">
                      <div className="card-body">
                        <h3 className="card-title">Querying Mongoose Models</h3>
                        <p className="text-justify">
                          Using business logic to integrate my app by mapping my
                          database to models that I can use in my REST API
                          methods, whereby allowing Mongoose to interact with
                          these models.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about__container container grid ">
            <div>
              <h2 className="title">
                <strong>Challenges</strong>
              </h2>
              <p class="text-justify">
                Having never worked with a terminal before, it took me a long
                time to understand how easy it is to use terminals. I enjoyed
                every stage of the project, but of course challenges are always
                part of the learning process. I definitely struggled at each
                stage, for example creating my database with Atlas was a pain
                for me, but in the end it was really fantastic to learn and
                understand each process.
              </p>
            </div>
          </div>

          <div className="about__container container grid ">
            <div>
              <h2 className="title">
                <strong>Duration</strong>
              </h2>
              <p class="text-justify">
                Developing the client side using both React and Angular
                frameworks took me twice as long as completing the server side.
                This was because I needed time to fully understand how React
                (and React Redux) worked. Including all the features and Angular
                materials, the learning process and the main features, the whole
                activity took about 2 months. Thanks to this project.
              </p>

              <p class="text-justify">
                I became much more familiar with how the RESTful architecture
                works and how the structure of larger projects is built. I also
                learned a lot more about JavaScript and of course its most
                famous framework, React and Angular.
              </p>
            </div>
            <div className="credits">
              <strong>Credits</strong>
            </div>
            <ul className="credits">
              <li>Role: Lead Developer</li>
              <li>Tutor: Terver Aosu</li>
              <li>Mentor: Aheebwa Ramadhan</li>
              <li>Mentor: Nizar Triki</li>
            </ul>
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
          <div>
            <p>
              {" "}
              <i className="fa fa-copyright" aria-hidden="true"></i> {myName}{" "}
              {currentDate.getFullYear()}{" "}
            </p>
          </div>
          <span>All rights reserved.</span> |{" "}
          <span>
            <a href="/impressum">Impressum</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default CasesStudy;
