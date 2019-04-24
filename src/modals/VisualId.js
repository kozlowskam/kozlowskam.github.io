import React from 'react';
import PropTypes from 'prop-types';
import data from '../data/video'
import Header from '../partials/Header'

class VisualId extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jazz: false,
      sztuk: false
    }
  }

  jazzClick() {
    this.setState({
      jazz: true,
      sztuk: false
    })
  }

  sztukClick() {
    this.setState({
      sztuk: true,
      jazz: false
    })
  }

  handleClose() {
    const { closeFunc } = this.props
    console.log(closeFunc)
    closeFunc()
  }

  render() {
    const { jazz, sztuk } = this.state
    const { closeFunc } = this.props

    document.body.classList.add('bc_white');

    const content = jazz ? (
      <div className="m-visualid__content">
        <div className="m-visualid__content-el">
        </div>
        <div className="m-visualid__content-el">
        </div>
      </div>
    ) : (sztuk ? (
      <div className="m-visualid__content">
      </div>
    ) : null
      )

    return (
      <React.Fragment>
        <Header isWhiteBg={true} isMod={true} closeFunction={this.props.closeFunc} />
        <div className="m-visualid">
          <div className="m-visualid__tab-container">
            <div className="m-visualid__tab">
              <img className="m-visualid__cover" src={require('../static/images/graphics/jazz01.png')} />
            </div>
            <div className="m-visualid__tab">
              <img className="m-visualid__cover" src={require('../static/images/graphics/jazz02.png')} />
            </div>
            <div className="m-visualid__tab">
              <img className="m-visualid__cover" src={require('../static/images/graphics/sztuk01.png')} />
            </div>
            <div className="m-visualid__tab">
              <img className="m-visualid__cover" src={require('../static/images/graphics/sztuk02.png')} />
            </div>
          </div>
          <div className="m-visualid__content">
            {content}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default VisualId;