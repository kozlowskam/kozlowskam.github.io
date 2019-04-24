import React from 'react';
import PropTypes from 'prop-types';
import Header from '../partials/Header';
import VisualId from '../modals/VisualId';

class GraphicDesign extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.body.classList.add('bc_white');

    const blocks = (
      <div className="b-dev">
        <a className="b-dev__container"
          href="https://booreiland.amsterdam/work/transformcity/" target="_blank">
          <img className="b-dev__cover" src={require('../static/images/menu_covers/transformcity_cover.png')} />
          <div className="b-dev__cover title">
            <p>Transformcity by Booreiland</p>
            <p>Toolkit for collaborative urban development.</p>
            <br />
            <p>Built with Keystone 4 with a React frontend in a Docker container.</p>
            <br />
            <p>see the case at Booreiland.amsterdam</p>
          </div>
        </a>
        <a className="b-dev__container"
          href="https://booreiland.amsterdam/work/thrill-seeker/" target="_blank">
          <img className="b-dev__cover" src={require('../static/images/menu_covers/ts_cover.png')} />
          <div className="b-dev__cover title">
            <p>Thrill Seeker</p>
            <p>Book wizard built with Booreiland.</p>
            <br />
            <p>It uses React.js and Next.js in the frontend, and Wordpress backend with Trellis.</p>
            <br />
            <p>see the case at Booreiland.amsterdam</p>
          </div>
        </a>
        <a className="b-dev__container"
          href="https://itunes.apple.com/nl/app/choices/id1442083415?l=en&mt=8" target="_blank">
          <img className="b-dev__cover" src={require('../static/images/menu_covers/csc_cover.png')} />
          <div className="b-dev__cover title">
            <p>Choices Support Center</p>
            <p>App for Treatment, Testing and Wellbeing built with Booreiland.</p>
            <br />
            <p>It uses React Native with Expo.</p>
            <br />
            <p>see the case in App Store</p>
          </div>
        </a>

      </div>
    )

    return (
      <React.Fragment>
        <Header isWhiteBg={true} hasLinks={true} />
        {blocks}
      </React.Fragment>
    )
  }
}

export default GraphicDesign;