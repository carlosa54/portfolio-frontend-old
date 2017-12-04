import React, { PureComponent } from 'react';
var Link = require('react-router-dom').Link;
import api from '../utils/api';
import styled from 'styled-components';

const ProjectWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const ProjectGrid = ({projects, match}) => {
	return (
		<ProjectWrapper>
			{projects.map((project) => {
				return (
				<div key={project.id} className="col-md-offset-0 col-md-4 col-xs-6" style={{marginBottom: 10}}>
					<div className="project-thumb" style={{float: 'left', backgroundColor: 'white', borderRadius: 5, border: '1px solid #efeeee', height: '100%'}}>
					<Link to={{
							pathname: match.url + '/detail/',
							search: `?project=${project.id}`
							}}
							style={{color: 'black', textDecoration: 'none'}}
							>
						<div style={{ margin: '5px 5px 0 5px'}}>
						<img alt={ project.title } src={ project.image } style={{borderRadius: 5, maxWidth: '100%'}}/>
							<h4 style={{textTransform: 'uppercase'}}>{ project.title }</h4>
							<p className="hidden-xs">{ project.description }</p>
						</div>
						</Link>
						{ project.url &&
							<a alt="Source code" target="_blank" href={project.url} className="btn pull-right hidden-xs" style={{color: 'black'}}><i className="fa fa-github fa-2x"></i></a>
						}
					</div>
				</div>
				)
			})}
		</ProjectWrapper>
	)
}

class Projects extends PureComponent {
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
			<div className="container">
				<h1>Projects</h1>
				<hr />
				{!this.state.projects ? <p className="text-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></p>:
				<ProjectGrid projects={this.state.projects} match={this.props.match} /> }
			</div>
		)
	}
}


export default Projects;
