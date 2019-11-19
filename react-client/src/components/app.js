import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import SideBar from './navigation/sideBar.js';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <SideBar />
        </div>
        <div>
          <HomePage />
        </div>
      </div>
    )
  }
}

export default App;
