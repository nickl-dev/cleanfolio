import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Typical from "react-typical";
import Avatar from "../../assets/avatar.jpg";
import Resume from "../../assets/resume.pdf";
import "./About.scss";

const About = () => {
  Aos.init();
  return (
    <div className="about">
      <header className="about__header">
        <h1 className="about__heading" data-aos="fade-in">
          HI, I'M YOUR NAME
        </h1>
        <Typical
          className="about__subheading"
          steps={["I'M A WEB DEVELOPER", 1000]}
          wrapper="h2"
        />
      </header>
      <div className="about__wrapper" data-aos="fade-in">
        <img
          src={Avatar}
          alt="Headshot"
          data-aos="fade-down"
          data-aos-duration="1000"
          className="about__image"
        />
        <div className="about__subwrapper">
          <p className="about__bio" data-aos="fade-up" data-aos-duration="1000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quas
            quis quos facere harum soluta, cumque labore quod voluptates
            voluptatum repudiandae consectetur nobis eveniet, dolorum dicta
            culpa iusto nemo officiis.
          </p>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="about__resume"
          >
            VIEW RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
