import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';


class Header extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClose() {
    const { closeFunction } = this.props

    closeFunction()
  }

  render() {
    const { isWhiteBg, isMod, hasLinks } = this.props
    console.log(this.props)

    const bioLinks = hasLinks ? (
      <div className="l-menu__top-right">
        <a href="https://github.com/kozlowskam" target="_blank"><img className="l-menu__top-right-logo" src={require('../static/images/github_logo.png')} /></a>
        <a href="https://www.linkedin.com/in/malgorzatta-kozlowska/" target="_blank"><img className="l-menu__top-right-logo" src={require('../static/images/linkedin_logo.png')} /></a>
      </div>
    ) : null

    const whiteBgClass = isWhiteBg ? ' is-white-bg' : '';
    const headerImg = isWhiteBg ? (
      <img className="l-header__logo" src={require('../static/images/arrow_back.png')} />
    ) : (
        <img className="l-header__logo" src={require('../static/images/arrow_back-white.png')} />
      );

    const closeButton = isMod ? (
      isWhiteBg ? (
        <div className="l-header__close" onClick={() => this.handleClose()}>
          <img className="l-header__logo" src={require('../static/images/close.png')} />
        </div>
      ) : (
          <div className="l-header__close" onClick={() => this.handleClose()}>
            <img className="l-header__logo" src={require('../static/images/close-white.png')} />
          </div>
        )
    ) : null

    return (
      <div className={`l-header${whiteBgClass}`}>
        <div className="l-header__wrap">
          <nav className="l-header__menu">
            <a className="l-header__left" href="/">{headerImg}<div className="l-header__back-text">BACK TO MENU</div></a>
            {closeButton}
            {bioLinks}
          </nav>
        </div>
      </div>
    )
  }
}

export default Header