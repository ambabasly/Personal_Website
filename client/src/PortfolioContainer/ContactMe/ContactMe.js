import React, { useState } from "react";
import Typical from "react-typical";

// import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
// import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  // eslint-disable-next-line
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [banner, setBanner] = useState("");
  // const [bool, setBool] = useState(false);

  // const handleName = (e) => {
  //   setName(e.target.value);
  // };
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // };
  // const handleMessage = (e) => {
  //   setMessage(e.target.value);
  // };
  // console.log(name);
  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let data = {
  //       name,
  //       email,
  //       message,
  //     };
  //     setBool(true);
  //     const res = await axios.post(`/contact`, data);
  //     if (name.length === 0 || email.length === 0 || message.length === 0) {
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBool(false);
  //     } else if (res.status === 200) {
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBool(false);

  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const myName = "Sylvester Arikhan.";
  const currentDate = new Date();

  const resetForm = () => {
    document.getElementById("form").reset();
  };

  return (
    <div className="main-container " id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="centact-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Awaits Your Email  📧", 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="not found" />
          </div>
          <form //onSubmit={handleSubmit}
            id="form"
            action="https://getform.io/f/a74dfb5d-5267-4b1b-bb30-2a0335c22857"
            method="POST"
          >
            <label htmlFor="name">Name</label>
            <input type="text" name="Name" />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea type="text" name="Message" />

            <div className="send-btn">
              <button type="submit" onClick={resetForm}>
                send
                <i className="fa fa-paper-plane" />
                {/* {bool ? (
                  <b className="load">
                    <img src={load1} alt="not responding" />
                  </b>
                ) : (
                  ""
                )} */}
              </button>
            </div>
          </form>
        </div>
      </div>

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
      <Footer />
    </div>
  );
}
