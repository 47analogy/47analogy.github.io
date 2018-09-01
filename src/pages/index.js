import React from 'react'
import Link from 'gatsby-link'


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
                <h1>Welcome to my site<br />My name is Anthony Tweed <br /> I'm a Software Engineer for all your needs...</h1>
                <div className="mtb">
                </div>
              </div>
            </div>
          </div>


          {/* start About*/}
        </div>
        <div className="container ptb">
          <div className="row">
            <h1>ABOUT</h1>
            <div className="col-md-6">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              <p className="mt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa</p>
            </div>
          </div>
        </div>
        {/* end About */}


        {/* start blog posts */}
        <div id="blog">
          <div className="container">
            <div className="row centered">
              <div className="col-md-8 col-md-offset-2">
                <h1>Blog Posts</h1>
                < div >
                  <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-1</Link></p>
                </div >
                < div >
                  <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-2</Link></p>
                </div >
                < div >
                  <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-3</Link></p>
                </div >
                < div >
                  <p><Link to="/page-2/">Lorem Ipsum Link Blog Page Post-4</Link></p>
                </div >
                <p>
                  {/* <button className="btn btn-conf-2 btn-green">
                    Learn More
                  </button> */}
                </p>
              </div>
            </div>
          </div>

        </div>
        {/* end blog posts */}


        {/* start portfolio */}
        <div>
          <section className="projects">
            <div className="general-title">
              <h1>Projects</h1>
              <hr />
            </div>
            <div className="portfolio-wrapper">
              <div id="owl-demo" className="owl-carousel">

                <div className="item">
                  <a data-rel="prettyPhoto" href="img/portfolio_01.jpg">
                    <img className="lazyOwl" src="img/portfolio_01.jpg" data-src="img/portfolio_01.jpg" alt="" />
                    <div>
                      {/* <small>Description</small> */}
                      <span>Project Name 1 Here</span>
                      <i className="fa fa-search"></i>
                    </div>
                  </a>
                </div>

                <div className="item">
                  <a data-rel="prettyPhoto" href="img/portfolio_02.jpg">
                    <img className="lazyOwl" src="img/portfolio_02.jpg" data-src="img/portfolio_02.jpg" alt="" />
                    <div>
                      {/* <small>Description</small> */}
                      <span>Project Name 2 Here</span>
                      <i className="fa fa-search"></i>
                    </div>
                  </a>
                </div>

                <div className="item">
                  <a data-rel="prettyPhoto" href="img/portfolio_06.jpg">
                    <img className="lazyOwl" src="img/portfolio_06.jpg" data-src="img/portfolio_06.jpg" alt="" />
                    <div>
                      {/* <small>Description</small> */}
                      <span>Project Name 3 Here</span>
                      <i className="fa fa-search"></i>
                    </div>
                  </a>
                </div>

              </div>

            </div>
            <div>
              <a className="button large" href="home3.html#">VIEW ALL PROJECTS</a>
            </div>
          </section>
        </div>
        <div>
          {/* end portfolio */}
        </div>

      </div>

    )
  }
}

export default IndexPage



