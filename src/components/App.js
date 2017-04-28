import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';

class App extends Component {
  render() {
    return (
      <div className="App">
      		<CustomNavbar />
        	<div className="App-header">
          		<h2>Welcome to React</h2>
        	</div>
      </div>
    );
  }
}

export default App;
