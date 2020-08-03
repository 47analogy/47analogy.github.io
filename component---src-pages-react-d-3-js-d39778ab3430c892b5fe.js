(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(52),s=(a(151),a(144)),r=a(170),l=a.n(r),c=a(171),h=a.n(c),d={margin:"30px"};t.default=function(){return o.a.createElement(s.a,null,o.a.createElement("div",{style:d},o.a.createElement("div",{className:"blog-container"},o.a.createElement("div",{className:"home-link"},o.a.createElement(i.Link,{className:"home-link",to:"/"},"Go back to the landing page")),o.a.createElement("div",{className:"header"},o.a.createElement("h2",null,"React and D3: Friends or Foes?")),o.a.createElement("div",{className:"blog-text"},o.a.createElement("h5",null,"September 22, 2019"),o.a.createElement("p",null,"Recently I had the opportunity to integrate D3 into a React project and I came away with some conclusions on how they play together."),o.a.createElement("p",null,"Almost anyone who works with JavaScript on a regular basis has heard of React and know its advantages such as increased performance, being able to render on both the client and server-side, allowing the use of JSX, and being easy to integrate with other frameworks. Through the use of a virtual DOM, React identifies what has changed, compares it to the actual DOM, and then reconciles or updates the changes as to what the user sees on the screen. I’m very familiar with React and it’s my go-to library for building user interfaces for single page applications."),o.a.createElement("p",null,"I’ve always heard about D3 and how it’s a very powerful library that can be used to create interactive visual representations of data by using Scalable Vector Graphics (SVG), HTML and CSS to manipulate the DOM. One advantage of using D3 is that it offers a lot of low-level control for how a page looks, which is great because it doesn’t restrict what you can or want to do with it."),"The biggest issue I had wrapping my mind around when first trying to work with these two is how can it be possible for both of them to co-exist in the same app? One uses snap-shots and comparisons to update the DOM and the other updates it directly. For example, if I change something directly using D3, how would React know it was changed before a re-render?",o.a.createElement("p",null),o.a.createElement("p",null,"Turns out, there are many different opinions on this topic, as well as ways to integrate them. Being more familiar with React, my initial approaches have been using D3 to assist with the drawing, but keeping track of state in React to render."),o.a.createElement("p",null,"As an example, say if I wanted to draw a map of the United States."),o.a.createElement("img",{id:"usa-map-img",src:h.a,alt:"usa map"}),o.a.createElement("div",{className:"code-example"},o.a.createElement("div",{className:"text-wrap"},o.a.createElement("h3",null,"In a nutshell:"),o.a.createElement("p",null,"The map data in statesmap.json comes from a static GeoJSON file, which is used by d3-geo (",o.a.createElement("a",{href:"https://github.com/d3/d3-geo"},"https://github.com/d3/d3-geo"),") to translate the data to map coordinates via the geoAlbersUSA projection."),o.a.createElement("p",null,"After the component mounts and the React state is updated, the d attribute on the path element outlines the shape of each state as it's drawn in the render method, using a SVG tag. D3 does not interact with the DOM directly."),o.a.createElement("p",null,"Allowing React to be in the driver’s seat works and aligns with how I’m used to working with React. If I want to make the map interactive, it's easy to create events and update React state. However, I quickly came to realize some disadvantages.",o.a.createElement("ul",null,o.a.createElement("li",null,"There’s a wealth of information and examples about using D3 available, but it would take some work to try and convert these to the ",o.a.createElement("i",null,'"React way"'),", not to mention having to keep track of and updating everything in state."," "),o.a.createElement("li",null,"Part of the advantage of using D3 is its quick updating and flexibility (especially when it comes to user interactions). I felt like I was losing a lot of this by not allowing D3 to have a more active role to update elements with the DOM directly."))),o.a.createElement("p",null,"In another post, I’ll talk about another approach that I’ve come across recently...one that I feel better balances the “best parts” of using these two libraries together.")),o.a.createElement("img",{id:"usa-snippet-img",src:l.a,alt:"code snippet"})))),o.a.createElement("div",{className:"home-link"},o.a.createElement(i.Link,{to:"/"},"Go back to the landing page"))))}},144:function(e,t,a){"use strict";var n=a(0),o=a.n(n),i=a(1),s=a.n(i),r=a(147),l=a.n(r),c=(a(148),a(145)),h=a.n(c),d=function(e){var t=e.children;return o.a.createElement("div",null,o.a.createElement(l.a,{title:"Anthony Tweed",meta:[{name:"description",content:"portfolio"},{name:"keywords",content:"anthony, tweed"}],link:[{rel:"shortcut icon",type:"image/png",href:""+h.a}]}),o.a.createElement("div",null,t))};d.propTypes={children:s.a.object},t.a=d},145:function(e,t,a){e.exports=a.p+"static/favicon-783d329bfcf170948b20f63499ada3b3.ico"},170:function(e,t,a){e.exports=a.p+"static/usa-map-snippet_1-2f5e876b12a3034e6e372542e9cacbf6.png"},171:function(e,t,a){e.exports=a.p+"static/usa-map_1-8bc4319120a65c03e5dab349ad6426ae.png"}}]);
//# sourceMappingURL=component---src-pages-react-d-3-js-d39778ab3430c892b5fe.js.map