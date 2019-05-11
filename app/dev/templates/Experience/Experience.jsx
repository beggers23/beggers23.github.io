import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';
const data = require('Utilities/data.json');

import Job from 'Components/Job/Job.jsx';

import './Experience.scss';
class Experience extends Component {
    constructor(props) {
        super(props);

        this.state = {
            experience: data.experience,
        }

    }

    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(sessionActions.updatePageVal('experience'));
    }
    
    render() {
        const { experience } = this.state;
        return (
            <div className="exp-wrapper">
                <h1 className="exp-header">Work Stuff</h1>
                <div className="jobs-wrapper">
                    {experience.map((job) => {
                        return <Job info={job} />
                    })}
                </div>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(Experience));
