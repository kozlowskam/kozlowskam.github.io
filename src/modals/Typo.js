import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class Typo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeFunc } = this.props

    document.body.classList.add('bc_white');

    return (
      <React.Fragment>
        <Header isWhiteBg={true} isMod={true} closeFunction={this.props.closeFunc} />
        <div className="m-typo">
          <div className="m-typo__tab-container">
            <div className="m-typo__tab">
              <div className="m-typo__text">
                Typography for an album cover 'Bring Out Your Dead' by Cocktail Party Effect.
              </div>
              <img className="m-typo__cover" src={require('../static/images/graphics/typo/CPEcover.jpg')} />
            </div>
            <div className="m-typo__tab">
              <div className="m-typo__text">
                Typography for Stoka Ensemble! band.
              </div>
              <img className="m-typo__cover" src={require('../static/images/graphics/typo/stoka.png')} />
            </div>
            <div className="m-typo__tab">
              <div className="m-typo__text">
                Typography for Concert Practicum Musicae.
              </div>
              <img className="m-typo__cover" src={require('../static/images/graphics/typo/cpm.jpg')} />
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Typo;