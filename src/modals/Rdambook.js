import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class Rdambook extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeFunc } = this.props

    document.body.classList.add('bc_white');

    return (
      <React.Fragment>
        <Header isWhiteBg={true} isMod={true} closeFunction={this.props.closeFunc} />
        <div className="m-book">
          <div className="m-book__tab-container">
            <div className="m-book__tab">
              <img className="m-book__cover" src={require('../static/images/graphics/010/010cover.png')} />
            </div>
            <div className="m-book__tab">
              <img className="m-book__inside-img" src={require('../static/images/graphics/010/010book_in3.jpg')} />
              <img className="m-book__inside-img" src={require('../static/images/graphics/010/010book_in4.jpg')} />
            </div>
            <div className="m-book__long-tab">
              <div className="m-book__text">
                '010' A photographic companion to the album. <br />
                With this compilation RE:VIVE team up with Fog Mountain Records, to bring 14 tracks that take archival sounds from the Sound and Vision collection and turn them into soundtrack of Rotterdam city.
                '010' album is available for free download via Fog Mountain Records.
                <br /><br />
                Designed by Malgorzata Kozlowska for <a href="http://revivethis.org/" target="_blank">RE:VIVE</a>, an Initiative by the Netherlands Institute for Sound and Vision.
              </div>
            </div>
            <div className="m-book__long-tab">
              <img className="m-book__cover" src={require('../static/images/graphics/010/010book_in1.png')} />
            </div>
            <div className="m-book__long-tab">
              <img className="m-book__cover" src={require('../static/images/graphics/010/010book_in2.png')} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Rdambook;