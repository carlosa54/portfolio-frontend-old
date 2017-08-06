import React, { Component } from 'react';
var Link = require('react-router-dom').Link;
import api from '../utils/api';
import queryString from 'query-string';
function ProjectGrid (props) {
	var projects = props.projects;
	console.log(props)
	return (
		<div className="row">
			{ props.projects.map((project) => {
				return (
				<div key={project.id}className="col-md-offset-0 col-md-4 col-xs-8 col-xs-offset-2">
					<div className="thumbnail">
						<img alt={ project.title } src={ project.image } />
						<div className="caption">
							<h3>{ project.title }</h3>
							<p>{ project.description }</p>
							<Link
								className='btn btn-default'
								to={{
									pathname: props.match.url + '/detail/',
									search: '?project=' +  project.id 
								}}>
								More Info
							</Link>
							{ project.url &&
							<a alt="Source code" target="_blank" href={project.url} className="btn pull-right"><i className="fa fa-github fa-2x"></i></a>
							}
						</div>
					</div>
				</div>
				)
			})}
		</div>
	)
}

class Projects extends Component {
	constructor (props) {
		super(props);
		this.state = {
			projects: [],
			error: null,
		}
		this.updateProjects = this.updateProjects.bind(this);
	}
	componentDidMount() {
		this.updateProjects()
	}
	updateProjects(){
		this.setState(function() {
			return {
				projects: null,
				error: false,
			}
		});
		api.fetchProjects()
			.then(function(response){
				var projects = response.data;
				if (projects === null) {
				return this.setState(function(){
					return {
						error: 'Looks like there was an error retreiving projects from api',
					}
				});
			}
				this.setState(function() {
					return {
						projects: projects,
					}
				});
			}.bind(this));
	}
	render () {
		var error = this.state.error;
		if (error) {
			return (
				<div>
					<p>Error</p>
					<p>{error}</p>
					<Link to='/'>error</Link>
				</div>

			)
		}
		return (
			<div>
				<h1>Projects</h1>
				<hr />
				{!this.state.projects ? <p className="text-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></p>:
				<ProjectGrid projects={this.state.projects} match={this.props.match} /> }
			</div>
		)
	}
}


module.exports = Projects;
