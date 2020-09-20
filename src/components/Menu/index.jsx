//@flow
import React from "react";
import { Link } from "react-router-dom";

import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";

import MenuClose from "../Icons/MenuClose";

type menuProps = {
  isOpen?: boolean,
  onClose?: Function,
};

export const Menu = (props: menuProps) => {
  return (
    <div className="Menu">
      <div
        className={`Menu__body ${
          props.isOpen ? "Menu__body--open" : "Menu__body--close"
        }`}
      >
        <div className="Menu__body__inner">
          <div className="Menu__body__close">
            <MenuClose onClick={props.onClose} />
          </div>

          <div className="Menu__body__title">
            <h3>Hello There,</h3>
            <p>I am Darrel Idiagbor, welcome to my creative space.</p>
          </div>

          <div className="Menu__body__items">
            <div className="Menu__body__item Menu__body__item--home">
              <Link to="top">Home</Link>
            </div>

            <div className="Menu__body__item Menu__body__item--mee">
              <Link to="about">About Mee...</Link>
            </div>

            <div className="Menu__body__item Menu__body__item--skills">
              <Link to="skills">Skill Set</Link>
            </div>

            <div className="Menu__body__item Menu__body__item--projects">
              <Link to="projects">Highlighted Projects</Link>
            </div>

            <div className="Menu__body__item Menu__body__item--resume">
              <Link to="resume">Download My Resume</Link>
            </div>

            <div className="Menu__body__item Menu__body__item--connect">
              <Link to="connect">Let's Connect...</Link>
            </div>
          </div>

          <div className="Menu__body__links">
            <a
              href="https://github.com/Darrellbor"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/in/darrelidiagbor"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/idiagbordarrel"
              target="__blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
