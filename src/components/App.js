import React, { Component } from 'react';
import CustomNavbar from './CustomNavbar';
import Projects from './Projects';
import ProjectDetail from './ProjectDetail';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import {BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';
import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  /* Styling Bootstrap's Navbar */
  .navbar {
    background: #111 !important;
    margin-bottom: 0 !important;
  }
  .navbar a {
    color: white !important;
  }
  .navbar-default {
    margin-bottom: 0;
  }
  .navbar a:hover {
    color: #abaab7 !important;
  }
  /* Desktops and laptops ----------- */
  @media only screen 
  and (min-width : 1224px) {
    .thumbnail img {
    width: 350px;
    height: 260px;
  }
  }
  
  @media (min-width: 768px) {
    .navbar {
      padding-top: 20px;
      height: 90px;
      background: #111 !important;
    }
  
    .navbar-collapse {
      margin-top: -1px;
    }
  
    .navbar-nav.navbar-center {
        position: absolute;
        left: 50%;
        transform: translatex(-50%);
    }
  }
  
  /* smartphones, iPhone, portrait 480x320 phones */
  @media (min-width:320px)  {
    .navbar-brand {
      padding-top: 20px;
    }
  
    .navbar-toggle {
        margin-top: 12px;
    }
  
    .img-responsive {
      margin-bottom: 5px;
    }
  }
  .active a {
    color: #8a8a8a !important;
    background-color: transparent !important;
  }
  .slick-next, .slick-prev {
    display: none !important;
  }
  html {
    position: relative;
    min-height: 100%;
    background-color: #fafafa;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", 
    "Fira Sans", "Droid Sans", "Helvetica Neue", 
    sans-serif;
    /* Margin bottom by footer height */
    margin-bottom: 60px;
    background-color: #fafafa;
  }
`;

const AppWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  /* To avoid content below footer */
  padding-bottom: 40px;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-top: 30px;
  /* Set the fixed height of the footer here */
  height: 80px;
  background-color: #f5f5f5;
`;

const FooterText = styled.p`
  padding-left: 10%;
`;


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <AppWrapper>
        		<CustomNavbar />
                <Route exact path='/' component={Home} />             
                <Route exact path='/about' component={About} />
                <Route exact path='/experience' component={Experience} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path='/projects/detail' component={ProjectDetail} />
                <Route exact path='/skills' component={Skills} />
          <Footer>
                <FooterText>Made by Carlos Ramírez <i className="fa fa-copyright" aria-hidden="true"></i> 2017</FooterText>
          </Footer>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
