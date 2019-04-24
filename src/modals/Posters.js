import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class Posters extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { closeFunc } = this.props

    document.body.classList.add('bc_white');

    return (
      <React.Fragment>
        <Header isWhiteBg={true} isMod={true} closeFunction={this.props.closeFunc} />
        <div className="m-posters">
          <div className="m-posters__tab-container">
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/no_01.png')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/no_02.png')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/jaksiebiesamego.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/edyp.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/avalanche.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/buffalo.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/CPM16.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/CPM17.jpg')} />
            </div>
            <div className="m-posters__tab">
              <img className="m-posters__cover" src={require('../static/images/graphics/posters/CPM18.jpg')} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Posters;