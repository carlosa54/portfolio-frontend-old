/**
*
* CustomNavbar
*
*/

import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router';
// import styled from 'styled-components';


function CustomNavbar() {
  return (
    <Navbar inverse staticTop >
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Portfolio Test
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav className="navbar-center">
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem eventKey={2}><Link to="/projects">Projects</Link></NavItem>
          <NavItem eventKey={3} href="#">Skills</NavItem>
          <NavItem eventKey={4} href="#">Experience</NavItem>
          <NavItem eventKey={5} href="#">About</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://github.com/carlosa54" target="_blank"><i className="fa fa-github fa-2x"></i></NavItem>
          <NavItem eventKey={2} href="https://www.linkedin.com/in/carlos-ramirez-0a9764133/" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

CustomNavbar.propTypes = {

};

export default CustomNavbar;
