/**
*
* ProjectGrid
*
*/

import React, { PropTypes } from 'react';
// const Link = require('react-router').Link;
// import styled from 'styled-components';


function ProjectGrid(props) {
  const projects = props.projects;
  return (
    <div className="row">
      { projects.map((project) => (
        <div key={project.id}className="col-md-offset-0 col-md-4 col-xs-8 col-xs-offset-2">
          <div className="thumbnail">
            <img alt={project.title} src={project.image} />
            <div className="caption">
              <h3>{ project.title }</h3>
              <p>{ project.description }</p>
              <a alt="Source code" target="_blank" href={project.url} className="btn pull-right"><i className="fa fa-github fa-2x"></i></a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

ProjectGrid.propTypes = {
  projects: PropTypes.object.required,
};

export default ProjectGrid;
