import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Tilt from "react-parallax-tilt";
import "./Project.scss";

const Project = (props) => {
  Aos.init();
  return (
    <div className="project">
      <div className="project__wrapper" data-aos="fade-down">
        <h2 className="project__title">{props.title}</h2>
        <p className="project__description">{props.description}</p>
        <p className="project__stack">{props.stack}</p>
        <div className="project__links">
          <a className="project__demo project__link" href={props.demo}>
            See Demo
          </a>
          <a className="project__code project__link" href={props.code}>
            See Code
          </a>
        </div>
      </div>
      <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
        <img
          src={props.image}
          alt="Project screenshot"
          className="project__image"
          data-aos="fade-up"
        />
      </Tilt>
    </div>
  );
};

export default Project;
