import React, { useRef } from "react";
import "../styles/contact.css";
import insta from "../img/insta.svg";
import twitter from "../img/twitter.svg";
import email from "../img/email.svg";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x8c197g",
        "template_idn7619",
        form.current,
        "MttNbSc5RQqUjauj5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    console.log(ref.current.value);

    setActive(!isActive);

    setTimeout(() => {
      setActive(false);
    }, 3000);
  };

  const ref = useRef(null);

  return (
    <div className="Contact" id="contact">
      <div className="contact-container-left">
        <div className="Content">
          <h2>Contact Me</h2>
          <p>
            I'm currently looking for new opportunities, my inbox is always
            open!
          </p>
        </div>
      </div>
      <div className="contact-container-right">
        <form ref={form} onSubmit={sendEmail}>
          <div className="inputs-top">
            <div className="Name">
              <h4>Name</h4>
              <input type="text" placeholder="xxx@gmail.com" />
            </div>
            <div className="Email">
              <h4>Email</h4>
              <input
                type="email"
                name="user_email"
                placeholder="xxx@gmail.com"
              />
            </div>
          </div>

          <div className="inputs-bottom">
            <div className="Message">
              <h4>Message</h4>
              <textarea
                type="text"
                name="message"
                placeholder="Hey..."
                required
              />
            </div>
          </div>
          <div className="botao">
            <button
              type="submit"
              className={`butto ${isActive ? "active" : ""}`}
              onClick={handleClick}
            >
              <span className="btn-icon">
                <FontAwesomeIcon icon={faRocket} />
              </span>
              <span className="btn-text">Submit</span>
            </button>
          </div>
        </form>

        <div className="social">
          <a href="https://www.instagram.com/invites/contact/?i=1nsuwqcgh4411&utm_content=2207s35">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://twitter.com/joaolaranjas">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="mailto:jpedro058.pf@gmail.com">
            <img src={email} alt="email" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
