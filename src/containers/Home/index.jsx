import React, { Component } from "react";
import { Link } from "react-scroll";

import Menu from "../../components/Menu";
import MenuIcon from "../../components/Icons/MenuIcon";
import Design from "../../components/Icons/Design";
import Fedev from "../../components/Icons/Fedev";
import Bedev from "../../components/Icons/Bedev";
import Github from "../../components/Icons/Github";
import Linkedin from "../../components/Icons/Linkedin";
import Twitter from "../../components/Icons/Twitter";
import Facebook from "../../components/Icons/Facebook";
import Medium from "../../components/Icons/Medium";

import MyImage from "../../assets/images/my_image.png";
import Farmstripe from "../../assets/images/farmstripe.jpg";
import FarmstripeLogo from "../../assets/images/farmstripeLogo.png";
import Bodds from "../../assets/images/bodds.jpg";
import BoddsLogo from "../../assets/images/boddsLogo.png";
import DnarWebsite from "../../assets/images/dnar-website.jpg";
import DnarUser from "../../assets/images/dnar-user.jpg";
import DnarLogo from "../../assets/images/dnarLogo.png";
import Logit from "../../assets/images/logit.jpg";
import LogitLogo from "../../assets/images/logitLogo.png";
import Downtimer from "../../assets/images/downtimer.jpg";
import DowntimerLogo from "../../assets/images/downtimerLogo.png";
import ConnectImg from "../../assets/images/connect-img.jpg";

export class Home extends Component {
  state = {
    hasMenuOpened: false,
    isMenuOpen: false,
    skillActive: "None",
    projectActive: "Farmstripe",
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

  handleSetSkill = (skill) => {
    this.setState({ skillActive: skill });
  };

  handleSetProject = (project) => {
    this.setState({ projectActive: project });
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

        <section id="home" className="Home__intro">
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
              <Link to="about" spy={true} smooth={true} duration={800}>
                More about me ↓
              </Link>
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
              building products ranging from <b>advertisement</b> to{" "}
              <b>event ticketing</b> and management to working on teams to
              create <b>fin-tech products</b> to designing and developing{" "}
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
            <div className="row">
              <div className="col-md-4 Home__skills__field">
                <Design onMouseOver={() => this.handleSetSkill("Design")} />
                <h4 onMouseOver={() => this.handleSetSkill("Design")}>
                  Design
                </h4>
              </div>
              <div className="col-md-4 Home__skills__field">
                <Fedev onMouseOver={() => this.handleSetSkill("Fedev")} />
                <h4 onMouseOver={() => this.handleSetSkill("Fedev")}>
                  Front-end Development
                </h4>
              </div>
              <div className="col-md-4 Home__skills__field">
                <Bedev onMouseOver={() => this.handleSetSkill("Bedev")} />
                <h4 onMouseOver={() => this.handleSetSkill("Bedev")}>
                  Back-end Development
                </h4>
              </div>
            </div>

            {state.skillActive === "Design" && (
              <div
                className="Home__skills__details"
                onClick={() => this.handleSetSkill("None")}
              >
                <div className="Home__skills__details__content">
                  I utilize <b>figma</b> as well as <b>paper</b> and <b>pen</b>{" "}
                  to create stunning <b>user interface</b> and{" "}
                  <b>user experience</b> designs for both <b>web</b> and{" "}
                  <b>mobile</b> based platforms
                </div>
              </div>
            )}

            {state.skillActive === "Fedev" && (
              <div
                className="Home__skills__details"
                onClick={() => this.handleSetSkill("None")}
              >
                <div className="Home__skills__details__content">
                  I build front end applications using the standard <b>HTML</b>,{" "}
                  <b>CSS</b>, <b>SASS</b> and <b>SCSS</b>. I majorly utilize{" "}
                  <b>react js</b> framework and a bit of <b>next js</b> or{" "}
                  <b>gatsby js</b> depending on the requirements. I also have{" "}
                  some <b>1 - 2 years</b> experience using <b>angular 1 - 7</b>{" "}
                  i make use of <b>numerous tools</b> while developing and{" "}
                  <b>majorly</b> use <b>netlify</b> for quick front end{" "}
                  <b>deployments</b>.
                </div>
              </div>
            )}

            {state.skillActive === "Bedev" && (
              <div
                className="Home__skills__details"
                onClick={() => this.handleSetSkill("None")}
              >
                <div className="Home__skills__details__content">
                  I build backend applications majorly using <b>javascript</b>{" "}
                  and <b>typescript</b> while gradually exploring <b>python</b>{" "}
                  and <b>golang</b> as possible learning interest space. I work
                  with <b>node js express js framework</b>. I work with{" "}
                  <b>sql</b> and <b>nosql</b> databases e.g <b>mysql</b> and{" "}
                  <b>mongodb</b>. I deploy applications on <b>heroku</b> and{" "}
                  majorly <b>digital ocean</b>. By virtue of <b>learning</b> and{" "}
                  tinkering i ventured into <b>Devops</b> with basic knowledge{" "}
                  of <b>microservices, continuous integration and deployment</b>{" "}
                  as well as <b>server provisioning</b> and <b>configuration</b>{" "}
                  among others.
                </div>
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="Home__projects">
          <div className="Home__title">Highlighted Projects</div>

          <div className="Home__projects__inner">
            <div className="Home__projects__display">
              {state.projectActive === "Farmstripe" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={FarmstripeLogo} alt="farmstripe logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Farmstripe Agroinvestment</h2> <br />
                      <p>
                        Farmstripe is an Agro Tech company that is passionate
                        about solving the lack of food issues in the world. We
                        do that by getting funds from people to Improve the
                        agricultural practices of farmers; technologically and
                        providing them with information.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {state.projectActive === "Bodds" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={BoddsLogo} alt="bodds logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Bodds IT</h2> <br />
                      <p>
                        Bodds IT is a technology company with a focus on
                        providing support to emerging and already established
                        organisations. Our goal is to help you use technology in
                        ways that help you achieve your business goals
                        efficiently.
                      </p>
                      <a
                        href="https://bodds.com.ng"
                        alt="bodds website"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {state.projectActive === "DnarWebsite" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={DnarLogo} alt="dnar logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Dnar</h2> <br />
                      <p>
                        Dnar Limited is a revolutionary company that provides
                        users with the platform to make digital transactions
                        directly through mobile money, enabling merchants to
                        receive payments through the dnar QR Code system
                        directly into their mobile money wallet.
                      </p>
                      <a
                        href="https://dnar.io"
                        alt="dnar website"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {state.projectActive === "DnarUser" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={DnarLogo} alt="dnar logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Dnar</h2> <br />
                      <p>
                        Dnar User Dashboard: view transactions, receive and send
                        money between dnar wallet and momo wallets
                      </p>
                      <a
                        href="https://user.dnar.io"
                        alt="dnar user dashboard"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {state.projectActive === "Logit" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={LogitLogo} alt="Logit logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Logit</h2> <br />
                      <p>
                        Logit - Easily aggregate your log entries for
                        internships or siwes program through multiple sources
                        e.g. web app, telegram etc... and summarize them for
                        proper representation and reporting.
                      </p>
                      <a
                        href="https://logitng.netlify.app"
                        alt="logit website"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {state.projectActive === "Downtimer" && (
                <div className="Home__projects__display__content">
                  <div className="row">
                    <div className="col-md-6">
                      <img src={DowntimerLogo} alt="downtimer logo" />
                    </div>
                    <div className="col-md-6">
                      <h2>Downtimer</h2> <br />
                      <p>
                        Built a countdown timer in a span of 2 days using React
                        with controls to add time, speed up / slow down the
                        countdown, pause and resume. All the while ensuring i
                        unit tested all components and functionalities
                      </p>
                      <a
                        href="https://downtimer.netlify.app"
                        alt="downtimer website"
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="Home__projects__items">
              <div
                className={`Home__projects__item ${
                  state.projectActive === "Farmstripe" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("Farmstripe")}
              >
                <img src={Farmstripe} alt="farmstripe bg" />
              </div>

              <div
                className={`Home__projects__item ${
                  state.projectActive === "Bodds" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("Bodds")}
              >
                <img src={Bodds} alt="bodds bg" />
              </div>

              <div
                className={`Home__projects__item ${
                  state.projectActive === "DnarWebsite" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("DnarWebsite")}
              >
                <img src={DnarWebsite} alt="DnarWebsite bg" />
              </div>

              <div
                className={`Home__projects__item ${
                  state.projectActive === "DnarUser" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("DnarUser")}
              >
                <img src={DnarUser} alt="DnarUser bg" />
              </div>

              <div
                className={`Home__projects__item ${
                  state.projectActive === "Logit" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("Logit")}
              >
                <img src={Logit} alt="Logit bg" />
              </div>

              <div
                className={`Home__projects__item ${
                  state.projectActive === "Downtimer" &&
                  "Home__projects__item--active"
                }`}
                onClick={() => this.handleSetProject("Downtimer")}
              >
                <img src={Downtimer} alt="Downtimer bg" />
              </div>
            </div>
          </div>
        </section>

        <section id="connect" className="Home__connect">
          <div className="Home__title">Lets Connect...</div>

          <div className="Home__connect__inner">
            <div className="Home__connect__content">
              <h2>
                <a
                  href="mailto:idiagbordarrel@gmail.com"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  idiagbordarrel
                  <br />
                  @gmail.com
                </a>
              </h2>

              <div className="Home__connect__content__divider"></div>

              <div className="Home__connect__content__text">
                Hey there, i’m currently open to engage interesting and exciting
                projects and products. I also enjoy speaking about tech and my
                journey so far i.e experience, pitfalls, combacks etc... I can
                also boost your bottom line{" "}
                <span role="img" aria-label="wink">
                  😉
                </span>
                .{" "}
                <a
                  href="https://twitter.com/idiagbordarrel"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  Say Hi!
                </a>
                <br />
                <br />
                Darrel Idiagbor
                <br />
                Lagos, Nigeria
              </div>

              <div className="Home__connect__socials">
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
                <a
                  href="https://web.facebook.com/darreli/"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Facebook />
                </a>
                <a
                  href="https://medium.com/@darrelidiagbor"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Medium />
                </a>
              </div>
            </div>
            <div className="Home__connect__img">
              <img src={ConnectImg} alt="Connect Img" />
            </div>
          </div>
        </section>

        <div className="Home__footer__copy">
          Darrel Idiagbor © 2020 Developed by mee...
        </div>
      </div>
    );
  }
}

export default Home;
