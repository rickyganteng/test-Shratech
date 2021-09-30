import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import Main from "./pages/main/landing/landing"
import List from "./pages/main/listjob/listjob"

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/list" exact component={List} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
