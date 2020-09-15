import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Development.scss";
import Project from "./Project";
import Screenshot from "../../assets/screenshot.jpg";

const Development = () => {
  Aos.init();
  return (
    <div className="development">
      <section className="projects" data-aos="fade-in">
        <h1 className="projects__heading">PROJECTS</h1>
        <Project
          title="Project Title"
          description="Project description"
          stack="Tech stack used"
          demo="https://cleanfolio.netlify.app/"
          code="https://github.com/nlaldev/Portfolio-plus"
          image={Screenshot}
        />
        <Project
          title="Project Title"
          description="Project description"
          stack="Tech stack used"
          demo="https://cleanfolio.netlify.app/"
          code="https://github.com/nlaldev/Cleanfolio"
          image={Screenshot}
        />
        <Project
          title="Project Title"
          description="Project description"
          stack="Tech stack used"
          demo="https://cleanfolio.netlify.app/"
          code="https://github.com/nlaldev/Cleanfolio"
          image={Screenshot}
        />
      </section>
      {/* <section
        className="technologies"
        data-aos="fade-in"
        data-aos-duration="1000"
      >
        <h3 className="technologies__heading">TECHNOLOGIES</h3>
        <div className="technologies__stack">
          <h4 className="technologies__stack-heading">Front-end</h4>
          <p className="technologies__list">Front-end skills here</p>
        </div>
        <div className="technologies__stack">
          <h4 className="technologies__stack-heading">Back-end</h4>
          <p className="technologies__list">Back-end skills here</p>
        </div>
        <div className="technologies__stack">
          <h4 className="technologies__stack-heading">Other</h4>
          <p className="technologies__list">Other skills here</p>
        </div>
      </section> */}
    </div>
  );
};

export default Development;
