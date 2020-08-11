import React from 'react'
import { Link } from 'gatsby'
import '../components/blog-layout.css'
import Layout from '../components/layout'
import usaMapCodeImg from '../assets/usa-map-snippet_1.png'
import usaMapImg from '../assets/usa-map_1.png'

const divStyle = {
  margin: '30px'
}

const ReactD3Blog = () => (
  <Layout>
    <div style={divStyle}>
      <div className='blog-container'>
        <div className='home-link'>
          <Link className='home-link' to='/'>
            Go back to the landing page
          </Link>
        </div>
        <div className='header'>
          <h2>React and D3: Friends or Foes?</h2>
        </div>
        <div className='blog-text'>
          <h5>September 22, 2019</h5>
          <p>
            Recently I had the opportunity to integrate D3 into a React project
            and I came away with some conclusions on how they play together.
          </p>
          <p>
            Almost anyone who works with JavaScript on a regular basis has heard
            of React and know its advantages such as increased performance,
            being able to render on both the client and server-side, allowing
            the use of JSX, and being easy to integrate with other frameworks.
            Through the use of a virtual DOM, React identifies what has changed,
            compares it to the actual DOM, and then reconciles or updates the
            changes as to what the user sees on the screen. I’m very familiar
            with React and it’s my go-to library for building user interfaces
            for single page applications.
          </p>
          <p>
            I’ve always heard about D3 and how it’s a very powerful library that
            can be used to create interactive visual representations of data by
            using Scalable Vector Graphics (SVG), HTML and CSS to manipulate the
            DOM. One advantage of using D3 is that it offers a lot of low-level
            control for how a page looks, which is great because it doesn’t
            restrict what you can or want to do with it.
          </p>
          The biggest issue I had wrapping my mind around when first trying to
          work with these two is how can it be possible for both of them to
          co-exist in the same app? One uses snap-shots and comparisons to
          update the DOM and the other updates it directly. For example, if I
          change something directly using D3, how would React know it was
          changed before a re-render?
          <p />
          <p>
            Turns out, there are many different opinions on this topic, as well
            as ways to integrate them. Being more familiar with React, my
            initial approaches have been using D3 to assist with the drawing,
            but keeping track of state in React to render.
          </p>
          <p>
            As an example, say if I wanted to draw a map of the United States.
          </p>
          <img id='usa-map-img' src={usaMapImg} alt='usa map' />
          <div className='code-example'>
            <div className='text-wrap'>
              <h3>In a nutshell:</h3>
              <p>
                The map data in statesmap.json comes from a static GeoJSON file,
                which is used by d3-geo (
                <a href='https://github.com/d3/d3-geo'>
                  https://github.com/d3/d3-geo
                </a>
                ) to translate the data to map coordinates via the geoAlbersUSA
                projection.
              </p>
              <p>
                After the component mounts and the React state is updated, the d
                attribute on the path element outlines the shape of each state
                as it's drawn in the render method, using a SVG tag. D3 does not
                interact with the DOM directly.
              </p>
              <p>
                Allowing React to be in the driver’s seat works and aligns with
                how I’m used to working with React. If I want to make the map
                interactive, it's easy to create events and update React state.
                However, I quickly came to realize some disadvantages.
                <ul>
                  <li>
                    There’s a wealth of information and examples about using D3
                    available, but it would take some work to try and convert
                    these to the <i>"React way"</i>, not to mention having to
                    keep track of and updating everything in state.{' '}
                  </li>
                  <li>
                    Part of the advantage of using D3 is its quick updating and
                    flexibility (especially when it comes to user interactions).
                    I felt like I was losing a lot of this by not allowing D3 to
                    have a more active role to update elements with the DOM
                    directly.
                  </li>
                </ul>
              </p>
              <p>
                In another post, I’ll talk about another approach that I’ve come
                across recently...one that I feel better balances the “best
                parts” of using these two libraries together.
              </p>
            </div>
            <img id='usa-snippet-img' src={usaMapCodeImg} alt='code snippet' />
          </div>
        </div>
      </div>
      <div className='home-link'>
        <Link to='/'>Go back to the landing page</Link>
      </div>
    </div>
  </Layout>
)

export default ReactD3Blog
