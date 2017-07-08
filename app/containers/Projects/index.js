/*
 *
 * Projects
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProjectGrid from 'components/ProjectGrid';
import makeSelectProjects from './selectors';

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
      error: null,
    };
    this.updateProjects = this.updateProjects.bind(this);
  }
  componentDidMount() {
    this.updateProjects();
  }
  updateProjects() {
    this.setState(() => ({
      projects: null,
      error: false,
    }));
    const projects = [
      {
        id: 2,
        image: 'https://portfolio-api.s3.amazonaws.com/media/projects/2/Screen_Shot_2017-02-26_at_10.29.32_PM.png',
        title: 'Probando esto',
        description: 'Esta es la descripción',
        url: null,
        personal: true,
        work: null,
      },
      {
        id: 3,
        image: 'https://portfolio-api.s3.amazonaws.com/media/projects/3/home.jpg',
        title: 'Probando 3',
        description: 'Testing description probando 3',
        url: 'https://www.github.com/carlosa54',
        personal: true,
        work: null,
      },
      {
        id: 1,
        image: 'https://portfolio-api.s3.amazonaws.com/media/projects/1/home.jpg',
        title: 'Positivemusa & Vennuk Store',
        description: 'This is the description',
        url: 'https://www.github.com/carlosa54/tienda',
        personal: true,
        work: null,
      },
    ];
    this.setState(() => ({
      projects,
    }));
    // api.fetchProjects()
    //   .then(function(response){
    //     var projects = response.data;
    //     if (projects === null) {
    //     return this.setState(function(){
    //       return {
    //         error: 'Looks like there was an error retreiving projects from api',
    //       }
    //     });
    //   }
    //     this.setState(function() {
    //       return {
    //         projects: projects,
    //       }
    //     });
    //   }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Projects</h1>
        <hr />
        <ProjectGrid projects={this.state.projects} match={this.props.match} />
      </div>
    );
  }
}

Projects.propTypes = {
  match: PropTypes.object.required,
};

const mapStateToProps = createStructuredSelector({
  Projects: makeSelectProjects(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
