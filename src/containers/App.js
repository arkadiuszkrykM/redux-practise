import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FrontPage from './FrontPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/" exact component={FrontPage} />
        <Route path="/yo" render={()=><div>Yolo</div>} />
      </div>
    );
  }
}

export default App;
