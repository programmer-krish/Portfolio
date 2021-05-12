import React from "react";
import "./topbar.scss";
import { Person, Mail, GitHub, LinkedIn } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="https://github.com/programmer-krish" className="logo">
            <GitHub />
          </a>
          <a
            href="https://www.linkedin.com/in/programmer-krish/"
            className="logo"
          >
            <LinkedIn />
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+94 0763730666</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>rkrishnamohan96@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
