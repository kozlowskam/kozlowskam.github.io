import React from 'react';
import PropTypes from 'prop-types';
import Header from '../partials/Header';
import VisualId from '../modals/VisualId';
import Posters from "../modals/Posters";
import Logo from "../modals/Logo";
import Typo from "../modals/Typo";
import Rdambook from "../modals/Rdambook";


class GraphicDesign extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      posters: false,
      id: false,
      typo: false,
      logo: false,
      book: false
    }
  }

  posterClick() {
    this.setState({
      posters: true,
      menu: false
    })
  }

  closePosters() {
    this.setState({
      posters: false,
      menu: true
    });
    document.body.classList.remove('bc_white');
  }

  idClick() {
    this.setState({
      id: true,
      menu: false
    })
  }

  closeId() {
    this.setState({
      id: false,
      menu: true
    });
    document.body.classList.remove('bc_white');
  }

  logoClick() {
    this.setState({
      logo: true,
      menu: false
    })
  }

  closeLogo() {
    this.setState({
      logo: false,
      menu: true
    });
    document.body.classList.remove('bc_white');
  }

  typoClick() {
    this.setState({
      typo: true,
      menu: false
    })
  }

  closeTypo() {
    this.setState({
      typo: false,
      menu: true
    });
    document.body.classList.remove('bc_white');
  }

  bookClick() {
    this.setState({
      book: true,
      menu: false
    })
  }

  closeBook() {
    this.setState({
      book: false,
      menu: true
    });
    document.body.classList.remove('bc_white');
  }

  render() {
    const { menu, posters, id, typo, logo, book } = this.state

    const blocks = menu ? (
      <div className="b-graphics">
        <div className="b-graphics__container"
          onClick={() => this.posterClick()}>
          <img className="b-graphics__cover" src={require('../static/images/graphics/posters.png')} />
          <div className="b-graphics__cover title">POSTERS</div>
        </div>
        <div className="b-graphics__container"
          onClick={() => this.bookClick()}>
          <img className="b-graphics__cover" src={require('../static/images/graphics/010/010cover.png')} />
          <div className="b-graphics__cover title">BOOK DESIGN</div>
        </div>
        <div className="b-graphics__container"
          onClick={() => this.idClick()}>
          <img className="b-graphics__cover" src={require('../static/images/menu_covers/vi_cover.png')} />
          <div className="b-graphics__cover title">VISUAL IDENTITY</div>
        </div>
        <div className="b-graphics__container"
          onClick={() => this.logoClick()}>
          <img className="b-graphics__cover" src={require('../static/images/graphics/logo_mupop.png')} />
          <div className="b-graphics__cover title">LOGO DESIGN</div>
        </div>
        <div className="b-graphics__container"
          onClick={() => this.typoClick()}>
          <img className="b-graphics__cover" src={require('../static/images/graphics/typo.png')} />
          <div className="b-graphics__cover title">TYPOGRAPHY</div>
        </div>
      </div>
    ) : null

    return (
      <React.Fragment>
        <Header />
        {id && <VisualId closeFunc={() => this.closeId()} />}
        {posters && <Posters closeFunc={() => this.closePosters()} />}
        {logo && <Logo closeFunc={() => this.closeLogo()} />}
        {typo && <Typo closeFunc={() => this.closeTypo()} />}
        {book && <Rdambook closeFunc={() => this.closeBook()} />}
        {blocks}
      </React.Fragment>
    )
  }
}

export default GraphicDesign;