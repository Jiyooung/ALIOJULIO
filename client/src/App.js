import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Bar_header from './components/views/bar_header';
import Cal_week from './components/views/cal_week';

class App extends Component {
  render() {
    return (
      <Router>
        <Bar_header />
        <Switch>
          <Route path="/cal_week">
            <Cal_week />
          </Route>
          <Route path="/">
            <Cal_week />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
