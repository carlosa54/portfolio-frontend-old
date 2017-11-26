import React, { Component } from 'react';
import queryString from 'query-string';
import api from '../utils/api';
import { Carousel, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

function ProjectDetailUI(props) {
	var project = props.project;
	return (
		<Row>
			<Row>
			<Col md={1} xs={1}>
			<i style={{marginTop: 27, cursor: 'pointer'}} onClick={props.goBack} className="fa fa-chevron-left fa-2x"></i>
			</Col>
			<Col md={8} xs={10}>
			<h1>{project.title}</h1>
			</Col>
			</Row>
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
			<Row>
				<Col md={10}>
					<h2>Description</h2>		
				</Col>
				<Col md={2}>
					{ project.url &&
						<a alt="Source code" target="_blank" href={project.url} style={{color: 'black', display: 'inline-block'}}><i className="fa fa-github fa-2x"></i></a>
					}	
				</Col>

			</Row>
			<hr/>
			<p>{project.description}</p>
		</Row>
	)
}

class ProjectDetail extends Component {
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
			{ !this.state.project ? 
				<div>
				<br />
				<p className="text-center"><i className="fa fa-refresh fa-spin fa-3x fa-fw"></i></p>
				</div>
				:
				<div className="container"> 
				<ProjectDetailUI project={this.state.project } goBack={this.props.history.goBack} />
				</div> }
			</div>
		)
	}
}

export default ProjectDetail;