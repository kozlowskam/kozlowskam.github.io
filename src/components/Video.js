import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const videos = data.videos.map((item, i) => (
      <div className="b-video__container">
        <div className="b-video__iframe-box">
          <iframe class="b-video__iframe" src={item.link}
            frameborder="0" webkitallowfullscreen mozallowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="b-video__text">
          <div className="b-video__title">{item.title}</div>
          <div className="b-video__subtitle">{item.subtitle}</div>
          {(item.music) ? (<p>music by: {item.music}</p>) : null}
          <p>edited and produced by: {item.edited}</p>
        </div>
      </div>
    ))

    return (
      <React.Fragment>
        <Header />
        <div className="b-video">
          {videos}
        </div>
      </React.Fragment>
    )
  }
}

export default Video;