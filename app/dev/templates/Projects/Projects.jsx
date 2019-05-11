import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
const data = require('Utilities/data.json');

import * as sessionActions from 'Actions/session.js';

import Project from 'Components/Project/Project.jsx';

import './Projects.scss';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: data.projects,
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(sessionActions.updatePageVal('projects'));
    }

    render() {
        const { projects } = this.state;
        return (
            <div className="projects-container">
                <h1 className="proj-header">Coded Stuff</h1>
                <div className="proj-wrapper">
                    {projects.map((proj) => {
                        return <Project key={proj.key} info={proj} />
                    })}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(Projects));