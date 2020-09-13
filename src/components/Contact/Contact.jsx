import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__heading">CONTACT</h1>
      <h2 className="contact__message">
        Thank you for taking the time to view my portfolio.
      </h2>
      <div className="contact__links">
        <a className="contact__link">
          <LinkedInIcon style={{ fontSize: "50px" }} />
        </a>
        <a className="contact__link">
          <GitHubIcon style={{ fontSize: "40px" }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
