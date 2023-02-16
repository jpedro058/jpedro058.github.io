import React from "react";
import "../styles/about.css";
import ProgressBar from "../components/progressBar";
import image from "../img/img.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="content">
        <div className="text">
          <h2>About Me</h2>
          <p>
            My name is João. I'm a junior developer that has just entered in
            this programing world but i know that i'm passionate about web
            development more scpecifically <span>front-end development</span>. I
            am currently studying computer science but i want to learn as much
            as i can so i can start my career as a <span>web developer</span>.
          </p>
        </div>

        <div className="info">
          <div className="info-item">
            <img src={image} alt="about" />
            <p>
              {" "}
              <span>Name:</span>João
            </p>
            <p>
              {" "}
              <span>Age:</span> 19
            </p>
            <p>
              {" "}
              <span>Location:</span> Portugal
            </p>
            <p>
              {" "}
              <span>Email:</span> joao_pedro_12345@hotmail.com
            </p>
          </div>
          <div className="skills">
            <h3>Skills</h3>
            <div className="skills-item">
              <span>HTML</span>
              <ProgressBar className="progress" progress={90} />
            </div>
            <div className="skills-item">
              <span>CSS</span>
              <ProgressBar className="progress" progress={70} />
            </div>
            <div className="skills-item">
              <span>JS</span>
              <ProgressBar className="progress" progress={50} />
            </div>
            <div className="skills-item">
              <span>React</span>
              <ProgressBar className="progress" progress={50} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
