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

const IndexPage = () => (
  <Layout>

    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 centered">
            <div className="mtb">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="content">
      {/* start About*/}

      <section id="about-section">
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

        <div className="grid-container">
          <div className="blog-title">
            <h3>BLOG</h3>
          </div>

          <div className="blog-content">


            <article className="new-blog">
              <div>
                <div className="blog-header">
                  <div><Link to="/kiss/">Implementing KISS</Link></div>
                </div>
                <p>As I continue my journey in software development...</p>
              </div>
            </article>

            <article className="new-blog">
              <div>
                <div className="blog-header">
                  <div><a href="#">Need to get my blog game up</a></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </article>

            <article className="new-blog">
              <div>
                <div className="blog-header">
                  <div><a href="#">Really need to get my blog game up</a></div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </article>
            <p>
              <button className="btn btn-conf-2 btn-green">
                <Link to="/page-2/">See All Posts</Link>
              </button>
            </p>
          </div>


        </div>
      </section>
      {/* end blog posts */}


    </div>


  </Layout>
)

export default IndexPage
