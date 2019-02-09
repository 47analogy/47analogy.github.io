import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import myImg from '../assets/act.png'
import jsImg from '../assets/js-icon.svg'
import htmlImg from '../assets/html5-icon.svg'
import reactImg from '../assets/react-icon.svg'
import cssImg from '../assets/css-icon.svg'
import nodeImg from '../assets/node-icon.svg'
import mongoImg from '../assets/mongo-icon.svg'
import pythonImg from '../assets/python-icon.png'
import sqlImg from '../assets/sql-icon.png'
import expressImg from '../assets/express-icon.png'
import hairSprayImg from '../assets/hairspray.png'
import bookVoteImg from '../assets/book-vote.png'
import ruffImg from '../assets/ruff.png'


const IndexPage = () => (
  <Layout>
    <div className="container">
      <div className="header">
        <h1>Welcome to my site!<br />Anthony Tweed <br />Software Engineer</h1>
        <div className="mtb">
        </div>
      </div>
      <div className="content">

        {/* start About*/}
        <section id="about-section">
          <div className="about-title">
            <h1>About</h1>
          </div>
          <div className="about-container">
            <div className="about-grid">
              <div className="left-box">
                <p className="about-text">Hey, I'm Anthony Tweed, a software engineer in Atlanta. I'm a thinker and a problem solver.</p>
                <p className="about-text">I see the computer as my lab where I run experiments and find solutions.</p>
                <p className="about-text">When I'm not coding, I enjoy spending time outdoors in nature...the activity doesn't matter, as long as it varies.</p>
                <p className="about-text">My goal in the software game to create products and content that help consumers get what they need, when they want it, and make their lives more enjoyable in the process. </p>
                <p className="about-text">I have experience with all stages of the fullstack software development process, including frameworks, servers, databases, testing, and deployment. I am a software engineer for all your needs.</p>
                <div className="tech-stack">
                  <div className="tech-icons">
                    <img className="tech-img" src={jsImg} height="50" alt="JavaScript" />
                    <img className="tech-img" src={htmlImg} height="50" alt="HTML" />
                    <img className="tech-img" src={cssImg} height="50" alt="CSS" />
                    <img className="tech-img" src={reactImg} height="50" alt="React" />
                    <img className="tech-img" src={pythonImg} height="50" alt="Python" />
                    <img className="tech-img" src={nodeImg} height="50" alt="Node" />
                    <img className="tech-img" src={expressImg} height="50" alt="Express" />
                    <img className="tech-img" src={sqlImg} height="50" alt="SQL" />
                    <img className="tech-img" src={mongoImg} height="50" alt="MongoDB" />
                  </div>
                </div>
              </div>
              <div className="image">
                <img src={myImg} className="img-me" alt="ACT" /></div>
            </div>
          </div>

        </section>
        {/* end About */}

        {/* project start */}
        <section id="project-section">
          <div className="project-title">
            <h1>Projects</h1>
          </div>
          <div className="project">
            <div className="card">
              <img id="pj-img1" src={hairSprayImg} alt='hair spray' />
              <h2>Hairspray</h2>
              <p>Hair salon app that allows a user to schedule and provide feedback on services.</p>
              <p>Team project built with React, Redux,  MongoDB, Node, Twilio and Stripe</p>
              <div className="pjt-btn">
                <button className="btn"><a href="https://obscure-island-58835.herokuapp.com/">HairSpray</a></button>
              </div>
            </div>
            <div className="card">
              <img id="pj-img1" src={bookVoteImg} alt='book vote' />
              <h2>Book Vote</h2>
              <p>Book voting app that allows a user to search for and review books.</p>
              <p>Hackathon project built using React, Express, MongoDB, and Node</p>
              <div className="pjt-btn">
                <button className="btn"><a href="https://github.com/hackathon-dudes/bookVote">Book Vote</a></button>
              </div>
            </div>
            <div className="card">
              <img id="pj-img1" src={ruffImg} alt='img' />
              <h2>Bundys Shoes</h2>
              <p>CRUD app that allows a user to select, view and rate stylish shoes.</p>
              <p>Solo project built using React, Redux, Feathers, MongoDB, and Reactstrap</p>
              <div className="pjt-btn">
                <button className="btn"><a href="https://github.com/47analogy/Bundys-Shoes">Coming Soon</a></button>
              </div>
            </div>
          </div>
        </section>

        {/* start blog posts */}
        <section id="blog-section">
          <div className="blog-title">
            <h1>Blog</h1>
          </div>
          <div className="grid-container">
            <div className="blog-content">
              <article className="new-blog">
                <div>
                  <div className="blog-header">
                    <div><Link to="/kiss/">Implementing KISS</Link></div>
                  </div>
                  <p>As I continue my journey in software development...</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* end blog posts */}

        {/* start contact */}
        <section id="contact-section">
          <div className="contact-title">
            <h1>Let's Talk!</h1>
          </div>
          <div className="contact">
            <form method="POST" action="//formspree.io/atweed47@yahoo.com" className="contact-form">
              <label className="name-label" htmlFor="name">Name:
                    <input type="text" name="name" placeholder="Your name..." className="contact-input" required="" />
              </label>
              <label className="email-label" htmlFor="_replyto">Email:
                    <input type="email" name="_replyto" placeholder="Your email..." className="contact-input" required="" />
              </label>
              <label className="label-message" htmlFor="message">Message:
                <textarea name="message" placeholder="Your message..." className="contact-message" required=""></textarea>
              </label>
              <div className="buttonSubmit">
                <input type="submit" value="Send" />
                <input type="hidden" name="_subject" value="Message via http://anthonytweed.com" />
              </div>
            </form>
          </div>
        </section>
        {/* end contact */}

      </div>
    </div>
  </Layout >
)

export default IndexPage

