import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeFunc } = this.props

    document.body.classList.add('bc_white');

    return (
      <React.Fragment>
        <Header isWhiteBg={true} isMod={true} closeFunction={this.props.closeFunc} />
        <div className="m-logo">
          <div className="m-logo__tab-container">
            <div className="m-logo__tab">
              <div className="m-logo__text">
                Logo design for 'Museum Pop UP', <br />an initiative by The Netherlands Institute for Sound and Vision.
              </div>
              <img className="m-logo__cover" src={require('../static/images/graphics/logo/logo_mupop.jpg')} />
            </div>
            <div className="m-logo__tab">
              <div className="m-logo__text">
                Logo design for the company MGD control.
              </div>
              <img className="m-logo__cover" src={require('../static/images/graphics/logo/logo_mgd.jpg')} />
            </div>
            <div className="m-logo__tab">
              <div className="m-logo__text">
                Logo design concept for 'Twoj Metraz' - internet series about interior design.
              </div>
              <img className="m-logo__cover" src={require('../static/images/graphics/logo/logo_tm.jpg')} />
            </div>
            <div className="m-logo__tab">
              <div className="m-logo__text">
                Logo design concept for 'Creative Coding Salerno'
              </div>
              <img className="m-logo__cover" src={require('../static/images/graphics/logo/logo_ccs.png')} />
            </div>
            <div className="m-logo__tab">
              <div className="m-logo__text">
                Redesign of ArtCafe logo.
              </div>
              <img className="m-logo__cover" src={require('../static/images/graphics/logo/logo_artcafe.jpg')} />
            </div>

          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Logo;