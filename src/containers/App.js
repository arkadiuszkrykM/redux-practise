import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './FrontPage';
import './FrontPage.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
            <input type="text" placeholder="Search for movies/TV shows" />
            <img src="http://jiayuhk.com/sc/assets/img/sample/shortcode/logo/1.png" width="200" height="100" />
            <span>Login/Register</span>
        </div>
        <Route path="/" exact component={FrontPage} />
        {/* <Route path="/yo" render={()=><div>Yolo</div>} /> */}
      </div>
    );
  }
}

export default App;
