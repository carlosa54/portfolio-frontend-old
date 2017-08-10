import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import {BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
        		<CustomNavbar />
          	<div className="container">
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/experience' component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path='/projects/detail' component={ProjectDetail} />
            <Route exact path='/skills' component={Skills} />
          	</div>
            <footer className="footer">
              <div className="container">
                <p className="text-left">Made by Carlos Ramírez <i className="fa fa-copyright" aria-hidden="true"></i> 2017</p>
              </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
