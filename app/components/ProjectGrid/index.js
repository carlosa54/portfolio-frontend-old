/**
*
* ProjectGrid
*
*/

import React from 'react';
// import styled from 'styled-components';


function ProjectGrid() {
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
							<a alt="Source code" target="_blank" href={project.url} className="btn pull-right"><i className="fa fa-github fa-2x"></i></a>
						</div>
					</div>
				</div>
				)
			})}
	</div>
  );
}

ProjectGrid.propTypes = {

};

export default ProjectGrid;
