import React from 'react'
import { Link } from 'gatsby'
import '../components/layout.css'
import Layout from '../components/layout'

const divStyle = {
  margin: '30px',
}

const SecondPage = () => (
  <Layout>
    <div style={divStyle}>
      <div className="blog-container">
        <h1>Implementing KISS</h1>
        <h3>Why KISS</h3>
        <div className="blog-text">
          <p>
            As I continue my journey in software development, I frequently
            encounter a lot of principles, such as OOP, DRY, and SOLID. I
            totally embrace these principles because they provide a path towards
            the best practices and streamlines the overall development process.
            However, I’ve found that
            <Link to="https://en.wikipedia.org/wiki/KISS_principle">
              {' '}
              KISS{' '}
            </Link>
            is the one that has assisted me the most. KISS is important to me
            because it helps to not complicate things. For example, when I’m
            starting a new project, I try to form a plan of action (usually by
            writing some ideas on paper). It’s usually when I’m sitting in front
            of a blank code editor page that I start scratching my head on where
            to begin, or how to begin, or what to do first...you get the idea.
            With so many possible paths, it’s so easy to feel overwhelmed to the
            point that I start trying to do several different things. Trying to
            solve several new problems all at once, especially if I still need
            to do more research, rarely turns out well.
          </p>

          <h3>Implementing KISS</h3>
          <p>
            This is where KISS comes into play for me. By having an end goal of
            keeping things simple, it forces me to break things down into
            smaller pieces. Often times I realize that my initial breakdown was
            not simple enough and I need to break it down even further (i.e. do
            one thing that I already know how to do or Google and find a point
            of reference quickly).
          </p>

          <p>
            Which brings me to my next point. Don’t recreate the wheel. I find
            myself trying to implement things or do something when there’s a
            snippet I already have somewhere or a npm package that already does
            it. Keep it simple by not doing unnecessary work, so I can focus on
            the unique or more complex parts.
          </p>

          <h3>How KISS Helps</h3>
          <p>
            One way I’ve become better at KISS is by paying attention to other
            developers and putting new things I learn in my toolbox. Maybe I
            accomplished a task using some convoluted method, but if I ask a
            more experienced developer for her/his opinion, I realize that I
            could have achieved a much simpler solution by doing it in a
            different way.
          </p>

          <p>
            Another thing that has helped me is focusing on one thing at a time.
            At this stage of the developer game, it’s much simpler to
            learn/accomplish one thing really well before moving on to something
            else (as opposed to trying to become good at 7 different things at
            one time).
          </p>

          <p>
            For example, instead of trying to become really good with both React
            and Redux at the same time, it’s best to focus on just React. I’ve
            found that just by focusing on React, it has made learning Redux
            less complicated. Plus I get the added benefit of practicing my new
            React skills!
          </p>

          <p>
            Eventually, I’ll get to that day when I can pick up several things
            at once, but I recognize that today is not that day.
          </p>

          <h3>KISS It</h3>
          <p>
            This is really hard not to do, but I try not to just jump into
            something new after accomplishing a coding goal. For example, I
            understand how the various array methods work, but I’ll probably end
            up having to re-learn them all over again if I never use them. Also,
            I used to be the type of coder who thought it was important to
            remember every single detail about everything, but have come to
            realize there’s a fine balance between knowing what to memorize and
            what to look up.
          </p>

          <h3>KISS Success</h3>
          <p>
            I’m going to close out by saying that once I started keeping KISS as
            one of my goals, it has helped to keep me focused on a smaller
            scale. The more I think about the building blocks, the simpler is my
            approach to the design process, which translates to code that is
            more readable and easier to maintain.
          </p>
        </div>
      </div>
      <div className="home-link">
        <Link to="/">Go back to the landing page</Link>
      </div>
    </div>
  </Layout>
)

export default SecondPage
