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
        <div className="container">
          <Switch>
            <Route exact path="/" component={GifHome} />
            <Route path="/search/:term" component={GifList} />
            <Route component={ZeroResult} />
          </Switch>
        </div>
        <footer>
          <p><strong>Powered by GIPHY</strong></p>
        </footer>
      </HashRouter>
    );
  }
}

export default App;
