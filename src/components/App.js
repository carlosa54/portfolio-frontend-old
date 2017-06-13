import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import {Switch, BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
        		<CustomNavbar />
          	<div className="container">
            <Route exact path="/projects" component={Projects} />
            <Route exact path='/projects/detail' component={ProjectDetail} />
          	</div>
            <footer className="footer">
              <div className="container">
                <p className="text-right"><i className="fa fa-copyright" aria-hidden="true"></i> 2017 Carlos Ramírez</p>
              </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
