import React from 'react';
import { Navbar,Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Projects from './Projects';
import image from '../../public/img/crlogo.png';

function CustomNavbar () {
	return (
		<Navbar inverse staticTop >
			<Navbar.Header>
				<Navbar.Brand>
				<img height={90} src={image}/>
				</Navbar.Brand>
				<Navbar.Brand>
				<LinkContainer to="/">
					<a>Portfolio Test</a>
				</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse>
				<Nav className="navbar-center">
					<LinkContainer to="/">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/projects">
						<NavItem eventKey={2} href="#">Projects</NavItem>
					</LinkContainer>
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
		)
}

module.exports = CustomNavbar;