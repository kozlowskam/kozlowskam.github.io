import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/bio'
import Header from '../partials/Header'

class Bio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <React.Fragment>
        <Header hasLinks={true} />
        <div className="b-bio">
          <div className="b-bio__text">
            <h5>Full stack developer with a background in audio-visual production and graphic design.</h5>
            <p>I have always been interested in programming. Already during my studies and creative practice I was programming midi controllers to interact with motion graphics which I created using various design programs and Processing. It became my ambition to develop myself further in this direction and I joined Codaisseur Academy.<br />
              I graduated the immersive 10 week course on complete stacks composed of JavaScript, jQuery, Node (incl. ES6), TypeScript, Jest, Enzyme, React, SQL, Redux, HTML5, and CSS3. I learned to build complex websites and even multiplayer games with databases, APIs, and modern front-end technology.<br />
              In September 2018 I joined Booreiland, Digital Agency based in Amsterdam, as a Full Stack Web Developer. Since then I keep growing and broaden my skills while working on various projects. In the past months, I was working on features for Transformcity, a toolkit for collaborative urban development built with Keystone 4 with a React frontend in a Docker container, I deployed my first React Native App to App Stores and I built a book wizard with React, Next.js and Headless WordPress Backend with Trellis.<br /><br />
              Besides I design visual identity for individual clients, brands and events. I am experienced in the full process of creating video materials, all the way from the concept, through to the realisation, framing, filming, animating, editing and coordinating images with sound and music. With my background in music production and sound recording I am able to create both visual and audio layer of the movie. I gained my experience while working on various projects and with different programs, which means I can make and edit videos in a wide range of styles and take on many roles.<br />
              I am interested in combining different video techniques. In my work I am also using samples of archival materials as well as stop motion animations.<br /><br />
              As Mill Burray I am producing music, visualisations and videos. In my projects I often use 2D animations, found footage and abstract compositions. In music I am connecting processed field recordings, foley sounds and various samples. My goal is to create new compositions which, together with the visualizations, forming new, slightly ironic and playful environment.</p>
          </div>
          <div className="b-bio__container">
            <div className="b-bio__iframe-box">
              <iframe class="b-bio__iframe" src="https://player.vimeo.com/video/330837978?loop=1&title=0&byline=0&portrait=0"
                frameborder="0" webkitallowfullscreen mozallowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Bio;
