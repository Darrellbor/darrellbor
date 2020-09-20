import React, { Component } from "react";
import { Link } from "react-router-dom";

import Menu from "../../components/Menu";
import MenuIcon from "../../components/Icons/MenuIcon";


import MyImage from "../../assets/images/my_image.png";

export class Home extends Component {
  state = {
    hasMenuOpened: false,
    isMenuOpen: false,
    skillActive: "None",
  };

  handleToggleMenu = () => {
    const state = this.state;
    let hasMenuOpened = state.hasMenuOpened;
    if (!state.hasMenuOpened) hasMenuOpened = true;

    this.setState({ hasMenuOpened, isMenuOpen: !state.isMenuOpen });

    if (hasMenuOpened) {
      setTimeout(() => {
        this.setState({ hasMenuOpened: !state.hasMenuOpened });
      }, 2000);
    }
  };

  render() {
    const state = this.state;

    return (
      <div className="Home">
        {(state.hasMenuOpened || state.isMenuOpen) && (
          <Menu
            isOpen={state.isMenuOpen}
            onClose={() => this.handleToggleMenu()}
          />
        )}

        <div className="Home__menu">
          <MenuIcon onClick={() => this.handleToggleMenu()} />
        </div>

        <section className="Home__intro">
          <div className="Home__intro__content">
            <h1>Darrel Idiagbor</h1>
            <br />
            <ul>
              <li>Full stack web development</li>
              <li>Light devops</li>
              <li>Speaker & community enthusiast</li>
              <li>Great conversationalist</li>
              <li>Lover of water</li>
            </ul>

            <h3>
              {" "}
              <Link to="#about">More about me ↓</Link>
            </h3>
          </div>

          <div className="Home__intro__image">
            <img src={MyImage} alt="mee" />
          </div>
        </section>

        <section id="about" className="Home__about">
          <div className="Home__title">Mee...</div>

          <div className="Home__about__item Home__about__item--first">
            <div className="Home__about__item__circle">1</div>
            <div className="Home__about__item__content">
              Hello there{" "}
              <span role="img" aria-label="wave">
                👋🏽
              </span>
              , i am Darrel Idiagbor I am a firm lover of <b>sci-fi movies</b>{" "}
              and generally <b>intellectual stuffs</b>. I began programming in
              my early secondary school days as a tool to bring my ideas to life
              such as a <b>math hub app</b> which helped me solve{" "}
              <b>simultaneous</b> and <b>quadratic</b> equations with their
              workings. I am pationate about <b>learning</b>, <b>teaching</b>,{" "}
              <b>conversing</b> & <b>engaging</b> interesting yet daring{" "}
              <b>projects</b>. Its been 6 years since i wrote my first{" "}
              <b>hello world program</b> and 3 years since i built my first{" "}
              <b>commercial product</b>.
            </div>
          </div>

          <div className="Home__about__item Home__about__item--right">
            <div className="Home__about__item__circle">2</div>
            <div className="Home__about__item__content">
              I am a <b>freelancer</b> as well as a <b>full time</b> type of
              guy, with over 3 years of <b>professional experience</b> in
              building products ranging from {" "}
              <b>advertisement</b> to <b>event ticketing</b> and management to
              working on teams to create <b>fin-tech products</b> to designing
              and developing
              <b>company websites</b> among others.
            </div>
          </div>

          <div className="Home__about__item Home__about__item--left">
            <div className="Home__about__item__circle">3</div>
            <div className="Home__about__item__content">
              In my spare time, i <b>love to learn</b> and listen to audio books
              but when i’m not on the books and computer, i <b>hit the gym</b>{" "}
              or even just take a <b>good swim</b>. I enjoy{" "}
              <b>productive conversations</b> and generally
              <b>impacting knowledge</b> and that’s what drove me to{" "}
              <b>community development</b> were i get to do both as well as{" "}
              <b>make friends</b> and <b>build network</b>.
            </div>
          </div>
        </section>

        <section id="skills" className="Home__skills">
          <div className="Home__title">Skill Set</div>

          <div className="Home__skills__inner">

          </div>
        </section>
      </div>
    );
  }
}

export default Home;
