import React from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProjectDetailUI(props) {
	var project = props.project;
	return (
		<div className="row">
		<h1>{project.title}</h1>
		<hr/>
		<Carousel interval={2000}>
			{ project.images.map(function(img, index){
				return (
					<Carousel.Item key={index}>
						<img src={img} />
					</Carousel.Item>
				)
			})}
		</Carousel>
		<br />
		<div className="description">
		<h2>Description</h2>
		<hr/>
			<p>{project.description}</p>
		</div>
		</div>
	)
}

class ProjectDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: null,
			error: null,
		}
	}
	componentDidMount () {
		var projectId = queryString.parse(this.props.location.search).project

		api.getProjectDetail(projectId)
			.then(function(response) {
				var project = response.data;

				this.setState(function () {
					return {
						project: project,
					}
				});
			}.bind(this));
	}
	render() {
		return (
			<div className="container">
			<br />
			<i onClick={this.props.history.goBack} className="fa fa-chevron-left fa-2x"></i>
			{ !this.state.project ? 
				<div>
				<br />
				<p className="text-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></p>
				</div>: 
				<ProjectDetailUI project={this.state.project } /> }
			</div>
		)
	}
}

module.exports = ProjectDetail;