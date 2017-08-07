import React from 'react';
import { Navbar,Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import {Router, Route, Link, IndexRoute, browserHistory} from 'react-router';
import Projects from './Projects';
import image from '../../public/img/white.png';

const CustomNavbar = () => {
	return (
		<Navbar inverse staticTop >
			<Navbar.Header>
				<Navbar.Brand>
				<img style={{height: 70, marginTop: -10}} src={image}/>
				</Navbar.Brand>
				<Navbar.Brand>
				<LinkContainer to="/">
					<a>Carlos Ramírez</a>
				</LinkContainer>
				</Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Header>
			<Navbar.Collapse style={{textAlign: 'center'}}>
				<Nav className="navbar-center">
					<LinkContainer to="/">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/projects">
						<NavItem eventKey={2}>Projects</NavItem>
					</LinkContainer>
					<LinkContainer to="/skills">
					<NavItem eventKey={3}>Skills</NavItem>
					</LinkContainer>
					<LinkContainer to="/experience">
					<NavItem eventKey={4}>Experience</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
					<NavItem eventKey={5}>About</NavItem>
					</LinkContainer>
				</Nav>
				<Nav pullRight>
					<NavItem eventKey={1} href="https://github.com/carlosa54" target="_blank"><i className="fa fa-github fa-2x"></i></NavItem>
					<NavItem eventKey={2} href="https://www.linkedin.com/in/carlos-ramirez-0a9764133/" target="_blank"><i className="fa fa-linkedin-square fa-2x"></i></NavItem>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		)
}

export default CustomNavbar;