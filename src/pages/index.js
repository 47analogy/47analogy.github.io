import React from 'react'
import Link from 'gatsby-link'

import myImg from '../assets/ruff.png'

class IndexPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
    }
  }

  handleEmailChange({ value }) {
    /**
     * Validate User's input first
     */
    this.setState({
      email: value
    })
  }

  handleSubscribeClick() {
    /**
     * Email is in the state,
     * send it directly to server
     */
  }

  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 centered">
                <h1>I'm Anthony Tweed <br /> A Software Engineer <br />for all your needs...</h1>
                <div className="mtb">
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* start About*/}
        <section id="about-section">
          <div className="about">
            <div className="left-col">
              <h2>About Me</h2>
              <h2>THIS IS WHY YOU SHOULD HIRE ME</h2>
              <p className="mt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <p className="store">
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
                <a href="#"><img src={myImg} height="50" alt="" /></a>
              </p>
            </div>
            <div className="right-col">
              <img src={myImg} className="img-responsive mt" alt="" />
            </div>
          </div>
        </section>
        {/* end About */}



        {/* project start */}

        <section id="projects-section">
          <div className="projects">
            <div className='pf-img'>
              <img src={myImg} alt='img' />
              <div className='center caption'>
                <br />
                <div className='projectsHead'>Project Name</div>
                <p>
                  <strong>library used</strong>
                </p>
              </div>
            </div>
            <div className='pf-img'>
              <img src={myImg} alt='img' />
              <div className='center caption'>
                <br />
                <div className='projectsHead'>Project Name</div>
                <p>
                  <strong>library used</strong>
                </p>
              </div>
            </div>
            <div className='pf-img'>
              <img src={myImg} alt='img' />
              <div className='center caption'>
                <br />
                <div className='projectsHead'>Project Name</div>
                <p>
                  <strong>library used</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* project end */}

        {/* start blog posts */}
        <section id="blog-section">
          <div className="blogs">

            <h1>Blog Posts</h1>
            <div id="blog-post-1">
              <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-1</Link></p>
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
    )
  }
}

export default IndexPage



