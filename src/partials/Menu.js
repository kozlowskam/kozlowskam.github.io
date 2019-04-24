import React from 'react';
import PropTypes from 'prop-types';
import { divLink, withRouter } from 'react-router-dom';


class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="l-menu">
        <div className="l-menu__top">
          <img className="l-menu__top-logo" src={require('../static/images/logo_footer.png')} />
          <div className="l-menu__top-right">
            <a href="https://github.com/kozlowskam" target="_blank"><img className="l-menu__top-right-logo" src={require('../static/images/github_logo.png')} /></a>
            <a href="https://www.linkedin.com/in/malgorzatta-kozlowska/" target="_blank"><img className="l-menu__top-right-logo" src={require('../static/images/linkedin_logo.png')} /></a>
          </div>
        </div>
        <div className="l-menu__link">
          <a href="/bio">BIO
            {/* <img className="l-menu__link content" src={require('../static/images/menu_covers/mk_logo.png')} /> */}
            <div className="b-video__container content">
              <div className="b-video__iframe-box">
                <iframe class="b-video__iframe" src="https://player.vimeo.com/video/285017475?autoplay=1&loop=1&title=0&byline=0&portrait=0"
                  frameborder="0" webkitallowfullscreen mozallowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </a>
        </div>
        <div className="l-menu__link">
          <a href="/video">VIDEO
            <div className="b-video__container content">
              <div className="b-video__iframe-box">
                <iframe class="b-video__iframe" src="https://player.vimeo.com/video/330837978?loop=1&title=0&byline=0&portrait=0"
                  frameborder="0" webkitallowfullscreen mozallowfullscreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </a>
        </div>
        <div className="l-menu__link">
          <a href="/web_development">WEB DEVELOPMENT
            <img className="l-menu__link content" src={require('../static/images/menu_covers/logos_copy.png')} />
          </a>
        </div>
        <div className="l-menu__link">
          <a href="/graphic_design">GRAPHIC DESIGN
            <img className="l-menu__link content" src={require('../static/images/menu_covers/jj bilboardy.png')} />
          </a>
        </div>
      </div>

    )
  }
}

export default Menu