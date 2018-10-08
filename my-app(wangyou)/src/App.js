import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';

import Main from './modules/main';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <Switch>
          <Route path="/main" component={Main} />
        </Switch>
      </div>)

  }
}
export default App;