import React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import myImg from '../assets/act.png'
import head from '../assets/header2.png'
import hairSprayImg from '../assets/hairspray.png'
import reactD3MapImg from '../assets/react-d3.png'
import starting5img from '../assets/starting5.png'
import shoeImg from '../assets/shoes.png'
import resumePdf from '../assets/atweed_resume.pdf'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faHome,
  faUser,
  faBriefcase,
  faPen,
  faEnvelope,
  faFile,
} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faHome,
  faUser,
  faBriefcase,
  faPen,
  faEnvelope,
  faLinkedin,
  faGithub,
  faTwitter,
  faFile
)

const IndexPage = () => (
  <Layout>
    <div>
      {/*  Header  */}
      <div id="header">
        <div className="top">
          {/*  Logo */}
          <div id="logo">
            <span className="image avatar48">
              <img src={myImg} alt="anthony-tweed" />
            </span>
            <h1 id="title">Anthony Tweed</h1>
            <p>Software Engineer</p>
          </div>

          {/*  Nav  */}
          <nav id="nav">
            <ul>
              <li>
                <a href="#top" id="top-link">
                  <span className="icon fa-home">
                    Intro &#160; <FontAwesomeIcon icon="home" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#about" id="about-link">
                  <span className="icon fa-user">
                    About Me &#160;
                    <FontAwesomeIcon icon="user" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#portfolio" id="portfolio-link">
                  <span className="icon fa-briefcase">
                    Portfolio &#160;
                    <FontAwesomeIcon icon="briefcase" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#blog" id="blog-link">
                  <span className="icon fa-pencil">
                    Blog &#160;
                    <FontAwesomeIcon icon="pen" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#contact" id="contact-link">
                  <span className="icon fa-envelope">
                    Contact &#160;
                    <FontAwesomeIcon icon="envelope" />
                  </span>
                </a>
              </li>
              <li>
                <a href={resumePdf} download="atweed_resume.pdf" id="resume">
                  <span className="icon fa-file">
                    Resume &#160;
                    <FontAwesomeIcon icon="file" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="bottom">
          {/*  Social Icons  */}
          <ul className="icons">
            <li>
              <a href="https://linkedin.com/in/anthony-tweed">
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
              </a>
            </li>
            <li>
              <a href="https://github.com/47analogy">
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/atweed47?lang=en">
                <FontAwesomeIcon icon={['fab', 'twitter']} />
              </a>
            </li>
            <li>
              <a href="mailto:actweed47@gmail.com" className="icon fa-envelope">
                <FontAwesomeIcon icon="envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/*  Main  */}
      <div id="main">
        {/*  Intro  */}
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hey! I'm <strong>Anthony Tweed,</strong>
                <br />a software engineer in Atlanta.
                <br />
                I'm a thinker and a problem solver.{' '}
              </h2>
            </header>
          </div>
        </section>

        {/*About Me  */}
        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>

            <a href="#" className="image featured">
              <img src={head} alt="" />
            </a>

            <p>
              I see the computer as my lab where I run experiments and find
              solutions. When I'm not coding, I enjoy spending time outdoors in
              nature...the activity doesn't matter, as long as it varies. My
              goal in the software game is to create products and content that
              help consumers get what they need, when they want it, and make
              their lives more enjoyable in the process. I have experience with
              all stages of the fullstack software development process,
              including frameworks, servers, databases, testing, and deployment.
              I am a software engineer for all your needs.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>
            <div className="row">
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img
                      className="project-img"
                      src={reactD3MapImg}
                      alt="react D3 map"
                    />
                  </a>
                  <header>
                    <div />
                    <h3>React D3 USA Map</h3>
                  </header>
                  <p>
                    Interactive map simulator app of presidential electoral
                    votes by state.
                  </p>
                  <p>
                    Project built using React, Next, D3, and Geo Projections
                  </p>
                  <div className="pjt-btn">
                    <button className="btn">
                      <a href="https://github.com/47analogy/react-d3-usa-map">
                        React D3 USA Map
                      </a>
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img
                      className="project-img"
                      src={starting5img}
                      alt="starting-5"
                    />
                  </a>
                  <header>
                    <h3>Starting 5</h3>
                  </header>
                  <p>
                    Basketball app that allows a user to search season stats for
                    a player.
                  </p>
                  <p>
                    Project built using React, 3rd party APIs, Sass, and
                    Bootstrap
                  </p>
                  <div className="pjt-btn">
                    <button className="btn">
                      <a href="https://github.com/47analogy/starting-5">
                        Starting 5
                      </a>
                    </button>
                  </div>
                </article>
              </div>
              <div className="col-4 col-12-mobile">
                <article className="item">
                  <a href="#" className="image fit">
                    <img
                      className="project-img"
                      src={shoeImg}
                      alt="shoe-view"
                    />
                  </a>
                  <header>
                    <h3>Shoe View</h3>
                  </header>
                  <p>
                    CRUD app that allows a user to select, view and rate stylish
                    shoes.
                  </p>
                  <p>
                    Project built using React, Node, MongoDB, and Semantic UI
                    React
                  </p>
                  <div className="pjt-btn">
                    <button className="btn">
                      <a href="https://github.com/47analogy/Shoe-View">
                        Shoe View
                      </a>
                    </button>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="one dark cover">
          <div className="container">
            <header>
              <h2>Blog</h2>
            </header>
            <div className="row">
              {/* <div className="col-4 col-12-mobile"> */}
              <article class="item">
                <a href="#" className="image fit">
                  <img src="images/pic02.jpg" alt="" />
                </a>
                <div>
                  <div className="blog-header">
                    <div className="blog-post">
                      <Link className="blog-link" to="/kiss">
                        Implementing KISS
                      </Link>
                    </div>
                    <div className="blog-post">
                      <Link className="blog-link" to="/react-d3">
                        React and D3 <br /> Friends or Foes?
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
              {/* </div> */}
            </div>
          </div>
        </section>

        {/*  Contact*/}
        <section id="contact" className="four">
          <div className="container">
            <header>
              <h2>Contact</h2>
            </header>
            <p>Let's Talk!</p>
            <form method="post" action="//formspree.io/atweed47@yahoo.com">
              <div className="row">
                <div className="col-6 col-12-mobile">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div className="col-6 col-12-mobile">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="col-12">
                  <textarea name="message" placeholder="Message" />
                </div>
                <div className="col-12">
                  <input type="submit" value="Send Message" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="Message via http://anthonytweed.com"
                  />
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>

      {/*  Footer  */}
      <div id="footer">
        <ul className="copyright">
          <li>&copy; 2020 - A CODE THINKER</li>
        </ul>
      </div>
    </div>
  </Layout>
)

export default IndexPage
