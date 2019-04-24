import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./partials/Header";
import Menu from "./partials/Menu";
import Home from "./components/Home";
import Bio from "./components/Bio";
import Video from "./components/Video";
import GraphicDesign from "./components/GraphicDesign";
import Dev from "./components/Dev";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="l-wrap">
          <div className="l-main">
            <Route exact path="/menu" component={Menu} />
            <Route exact path="/bio" component={Bio} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/video" component={Video} />
            <Route exact path="/graphic_design" component={GraphicDesign} />
            <Route exact path="/web_development" component={Dev} />

            <Route exact path="/" render={() => <Redirect to="/menu" />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
