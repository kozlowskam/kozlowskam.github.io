import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="b-home">
        <div className="b-home__iframe-container">
          <iframe class="b-home__iframe" src="https://player.vimeo.com/video/285017475?autoplay=1&loop=1&title=0&portrait=0"
            frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default Home;