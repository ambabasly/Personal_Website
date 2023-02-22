import React from "react";
import "./CasesStudy.css";
import Navbar from "react-bootstrap/Navbar";

const CasesStudy = () => {
  const myName = "Sylvester Arikhan.";
  const currentDate = new Date();

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-lg
            page-header
            fixed-top
            main-navigation
            -light
            bg-success"
      >
        <span className="navbar-brand mb-0 h1">SYLVESTER ARIKHAN</span>
        <ul className="nav__list grid">
          <li className="nav__item">
            <a href="/home">
              <strong>BACK TO HOME</strong>
            </a>
          </li>
        </ul>
      </Navbar>

      {/* Case Study */}
      <h1>#</h1>
      <div className="body">
        <div className="container-fluid">
          <div className="about__container container grid ">
            <div>
              <br />
              <h1 className="text-justify">
                <strong>myFlix Overview (Case Study)</strong>
              </h1>
              <div className="text-justify">
                myFlix is a web application developed with the MERN/MEAN stack
                that allows users to access information about movies, directors,
                and genres. Users can sign in, register, update their personal
                information, and create a list of their favorite movies.
              </div>
            </div>

            <div>
              <h2 className="text-justify">
                <strong>Objective</strong>
              </h2>
              <div className="text-justify">
                The objective of the project was to create an interactive and
                entertaining web application for movie lovers who enjoy reading
                information about different movies. It enables users to
                create/login into an account, searching movie titles. Read
                information about a movie, a director, movie genre, Add a movie
                to a favorites list, and of course, update personal profile
                information.
              </div>
            </div>

            <div>
              <h2 className="text-justify">
                <strong>Development</strong>
              </h2>
              <div className="text-justify">
                The project was developed in 3 different phases. The first was
                creating the backend component of the application. The part of
                the application that communicates with the server and the
                database which handles every activity that’s been performed at
                the frontend, returning every request the user makes, while the
                other 2 parts were being created using React.js for the frontend
                and again using Angular for the same frontend where users can
                interact and perform every request.
              </div>
            </div>

            <div className="text-justify">
              <strong>Backend Objective:</strong> The purpose of this project is
              to create the server-side component of a "movies" web application,
              the web application provide users with access to information about
              various movies, directors, and genres, and are able to sign up,
              update their personal information, and create a list of their
              favorite movies.
            </div>
            <div className="text-justify">
              Creating the database, I opted for a nonrelational database in
              this case over PostgreSQL, which I initially wanted to use, reason
              was that a no-SQL database provides flexibility in terms of change
              in the schema. Unlike traditional RDBMS systems, where you need to
              alter the structure of the table if you need a change in the data
              schema, MongoDB doesn’t need you to alter the structure to make
              such changes. And this whole process of interacting with the
              database was done using Node.js, a Javascript running environment
              on the server-side. And of course, integrating the mongoose the
              business logic.
            </div>

            <div className="text-justify">
              <strong>Frontend Objective:</strong> The client-side was created
              using the user interface through which users will make requests to
              and receive responses from the server-side. A user can access
              information on movies, directors, genres, and create a profile to
              save data about his or her favorite movies, and of course, delete
              a profile if need be.
            </div>

            <div className="title">
              <h2>Tech Stack</h2>
              <h5>
                <strong>
                  Angular | Node.js | Express | MongoDB | React.js | netlify |
                  Angular Material | Heroku | Bootstrap | Typedoc
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
                          <p className="text-justify2">
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
                          <p className="text-justify2">
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
                          <p className="text-justify2">
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
                          <p className="text-justify2">
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
                          <p className="text-justify2">
                            Using MongoDB to create a non-relational database
                            and Mongoose to create the business logic. Similar
                            methods CRUD can be used to retrieve and store data
                            in a non-relational manner.
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
                          <h3 className="card-title">
                            Querying Mongoose Models
                          </h3>
                          <p className="text-justify2">
                            Using business logic to integrate my app by mapping
                            my database to models that I can use in my REST API
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

            <div>
              <h2 className="text-justify">
                <strong>Challenges</strong>
              </h2>
              <div className="text-justify">
                Because I haven’t ever worked with a terminal before, it took me
                a long time to understand how easy it is to use terminals. I
                enjoyed every stage of the project, but of course challenges are
                always part of the learning process. I definitely struggled at
                each stage, for example creating my database with Atlas was a
                pain for me, but in the end it was really fantastic to learn and
                understand each process.
              </div>
            </div>

            <div>
              <h2 className="text-justify">
                <strong>Duration</strong>
              </h2>
              <div className="text-justify">
                Developing the client side using both React and Angular
                frameworks took me twice as long as completing the server side.
                This was because I needed time to fully understand how React
                (and React Redux) worked. Including all the features and Angular
                materials, the learning process and the main features, the whole
                activity took about 2 months. Thanks to this project.
              </div>

              <div className="text-justify">
                I became much more familiar with how the RESTful architecture
                works and how the structure of larger projects is built. I also
                learned a lot more about JavaScript and of course it's most
                framework, React and Angular.
              </div>
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
              <i className="fa fa-copyright" aria-hidden="true"></i> {myName}
              {currentDate.getFullYear()}
            </p>
          </div>
          <span>All rights reserved.</span>
          <span>
            <a href="/impressum">Impressum</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default CasesStudy;
