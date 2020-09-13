import React from "react";
import { NavLink } from "react-router-dom";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import CodeRoundedIcon from "@material-ui/icons/CodeRounded";
import MailRoundedIcon from "@material-ui/icons/MailRounded";
import "./Navbar.scss";

const Navbar = () => {
  const handleScroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <nav className="navbar">
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link--active"
        to="/"
        exact
        onClick={handleScroll}
      >
        <PersonRoundedIcon style={{ fontSize: "40px" }} />
      </NavLink>
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link--active"
        to="/development"
        onClick={handleScroll}
      >
        <CodeRoundedIcon style={{ fontSize: "40px" }} />
      </NavLink>
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link--active"
        to="/contact"
      >
        <MailRoundedIcon style={{ fontSize: "40px" }} />
      </NavLink>
    </nav>
  );
};

export default Navbar;
