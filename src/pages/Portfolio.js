import React from "react";
import { useState } from "react";

import "../styles/portfolio.css";
import weatherApp from "../img/weather.png";
import findMyMovie from "../img/findmymovie.png";
import gymApp from "../img/gym.png";
import musicology from "../img/musicology.png";
import filmLand from "../img/filmLand2.png";

export function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      image: filmLand,
      title: "Filmland",
      description:
        "In this project i tried to recreate the UI of the filmland spirits website to improve my skills in React and CSS. ",
      link: "https://filmland.jpedro058.me",
    },
    {
      id: 2,
      image: weatherApp,
      title: "Weather App",
      description:
        "A weather app using the OpenWeather API and made with React. Because now the one call API is paid i can't show the forecast for the next 7 days as i had planned to do. But you can still see the current weather and a lot of other informations about the city you search for.",
      link: "https://jpedro058.github.io/Weather-App/",
    },
    {
      id: 3,
      image: findMyMovie,
      title: "Find My Movie",
      description:
        "A movie search app using the OMDB API and made with React. In this website you can search for a movie and see a lot of the details about it. Unfortunately we can't see the movie it self but who knows... maybe in the future.",
      link: "https://jpedro058.github.io/FindMyMovie/",
    },
    {
      id: 4,
      image: gymApp,
      title: "Gym App",
      description:
        "A gym app made with React. In this website you can see an exemple of a gym website, where you can find motivation to start working out, see some types trainings and some other things.",
      link: "https://gym-jpedro058.vercel.app",
    },
    {
      id: 5,
      image: musicology,
      title: "Musicology",
      description:
        "A music app made with React. In this website you can see an exemple of a music website, where you have some info about the prices, some statistics and a dance tour.",
      link: "https://musicology-tau.vercel.app",
    },
  ];

  const [isFlipped, setIsFlipped] = useState({});

  const handleClick = (itemId) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [itemId]: !prevState[itemId],
    }));
  };

  return (
    <div className="portfolio" id="PORFOLIO">
      <h1>Portfolio</h1>
      <div className="portfolio-row">
        {portfolioItems.map((item) => (
          <div
            className={`portfolio-item ${isFlipped[item.id] ? "flipped" : ""}`}
            key={item.id}
          >
            <div className="portfolio-item-front">
              <div className="portfolio-item-image">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.image} alt={item.title} />
                </a>
              </div>
              <div className="portfolio-item-bottom">
                <h3>{item.title}</h3>
                <button
                  className="portfolio-item-open-btn"
                  onClick={() => handleClick(item.id)}
                >
                  Info
                </button>
              </div>
            </div>
            <div className="portfolio-item-back">
              <div className="portfolio-item-inner">
                <div className="portfolio-item-top">
                  <h3>{item.title}</h3>
                </div>
                <div className="portfolio-item-content">
                  <p>{item.description}</p>

                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    View Project
                  </a>
                </div>
                <div
                  className="portfolio-item-close-btn"
                  onClick={() => handleClick(item.id)}
                >
                  Back
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
