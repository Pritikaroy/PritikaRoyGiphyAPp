import React, { Component } from "react";
import "./App.css";
import { HashRouter, Route, Switch } from "react-router-dom";

import GifList from "./components/GifList";
import GifHome from "./components/GifHome";
import ZeroResult from "./components/ZeroResult";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="wrapper container">
          <Switch>
            <Route exact path="/" component={GifHome} />
            <Route path="/search/:term" component={GifList} />
            <Route component={ZeroResult} />
          </Switch>
        </div>
        <footer>
          {/* <p><strong>Powered by GIPHY</strong></p> */}
          <p><i className="fas fa-battery-full"></i> by GIPHY and Made with <i className="fas fa-heart"></i></p>
          <p classname="copyright">Copyright &copy; Pritika Roy</p>
        </footer>
      </HashRouter>
    );
  }
}

export default App;
