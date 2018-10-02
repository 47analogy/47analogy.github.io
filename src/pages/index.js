import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import myImg from '../assets/ruff.png'
import jsImg from '../assets/js-icon.svg'
import htmlImg from '../assets/html5-icon.svg'
import reactImg from '../assets/react-icon.svg'
import cssImg from '../assets/css-icon.svg'
import nodeImg from '../assets/node-icon.svg'
import mongoImg from '../assets/mongo-icon.svg'
const IndexPage = () => (
  <Layout>

    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 centered">
            {/* <h1>I'm Anthony Tweed <br /> A Software Engineer <br />for all your needs...</h1> */}
            <div className="mtb">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="content">
      {/* start About*/}

      <section className="about">
        <div className="about-container">
          <div className="about-grid">
            <div className="left-box">
              <div className="about-me"></div>
              <p className="about-text">Hey, I'm Anthony Tweed, a software engineer in Atlanta. I'm a thinker and a problem solver.</p>
              <p className="about-text">I see the computer as my lab where I run experiments and find solutions.</p>
              <p className="about-text">When I'm not coding, I enjoy spending time outdoors in nature...the activity doesn't matter, as long as it varies.</p>
              <p className="about-text">My goal in the software game to create products and content that help consumers get what they need, when they want it, and make their lives more enjoyable in the process. </p>
              <p className="about-text">I have experience with all stages of the fullstack software development process, including frameworks, servers, databases, testing, and deployment. I am a software engineer for all your needs.</p>
              <div className="tech-stack">
                <div className="tech-icons">
                  <a href="#"><img src={jsImg} height="50" alt="" /></a>
                  <a href="#"><img src={htmlImg} height="50" alt="" /></a>
                  <a href="#"><img src={cssImg} height="50" alt="" /></a>
                  <a href="#"><img src={reactImg} height="50" alt="" /></a>
                  <a href="#"><img src={nodeImg} height="50" alt="" /></a>
                  <a href="#"><img src={mongoImg} height="50" alt="" /></a>
                  <a href="#"><img src={myImg} height="50" alt="" /></a>
                  <a href="#"><img src={myImg} height="50" alt="" /></a>
                </div>
              </div>
            </div>
            <div className="image">
              <img src={myImg} className="img-responsive" alt="" /></div>
          </div>
        </div>

      </section>
      {/* end About */}



      {/* project start */}

      <section id="project-section">
        <div className="project">
          <div className="card">
            <img id="pj-img1" src={myImg} alt='img' />
            <h1>Hairspray</h1>
            <p>Hair salon app that allows a user to schedule and provide feedback on services.</p>
            <p>Team project built with React, Redux, Express, MongoDB, Node, Twilio and Stripe</p>
            <p>Link to Code</p>
          </div>
          <div className="card">
            <img id="pj-img1" src={myImg} alt='img' />
            <h1>Book Vote</h1>
            <p>Book voting app that allows a user to search for and review books.</p>
            <p>Hackathon project built using React, Express, MongoDB, and Node</p>
            <p>Link to Code</p>
          </div>
          <div className="card">
            <img id="pj-img1" src={myImg} alt='img' />
            <h1>Coming Soon</h1>
            <p>Lorem ipsum dolor sit amet, at eam sint quot facer, labore nemore percipit in cum.</p>
            <p>Lorem ipsum dolor sit amet, at eam sint quot facer, labore Lorem ipsum dolor.</p>
            <p>Link to Code</p>
          </div>

        </div>
      </section>


      {/* start blog posts */}
      <section id="blog-section">
        <div className="blogs">
          <h1>Blog</h1>
          <div id="blog-post-1">
            <p><Link to="/kiss/">Implementing KISS</Link></p>
          </div>
          <div id="blog-post-2">
            <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-2</Link></p>
          </div >
          {/* < div >
              <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-3</Link></p>
            </div >
            < div >
              <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-4</Link></p>
            </div > */}
          <p>
            <button className="btn btn-conf-2 btn-green">
              <Link to="/page-2/">See All Posts</Link>
            </button>
          </p>
        </div>
      </section>

      {/* end blog posts */}


    </div>


  </Layout>
)

export default IndexPage
