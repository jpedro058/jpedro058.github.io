import "../styles/home.css";
import Navbar from "../components/navbar";
import TypewritingAnimation from "../components/type.js";
import image from "../img/img.svg";
import About from "../pages/About";
import Contact from "./Contact";
import "../styles/global.css";
import { Portfolio } from "./Portfolio";

/* import Typewriter from "typewriter-effect"; */

const Home = () => (
  <div className="home-page" id="Home">
    <Navbar />
    <div className="inside-page">
      <div className="home-page-title">
        <div className="home-page-title-text">
          <h3>Hey, I'm João</h3>
          <TypewritingAnimation message="Web Developer!" typingInterval={250} />
        </div>
      </div>
      <div className="home-page-content">
        <img src={image} alt="home" />
      </div>
    </div>
    <About />
    <Portfolio />
    <Contact />
  </div>
);

export default Home;
