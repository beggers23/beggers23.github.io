import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';

import './Projects.scss';
class Projects extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(sessionActions.updatePageVal('projects'));
    }

    render() {
        return (
            <div className="projects-wrapper">
                <h1 className="proj-header">Coded Stuff</h1>
                <div className="proj-wrapper">
                
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(Projects));