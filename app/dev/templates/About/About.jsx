import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';

import './About.scss';

class About extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(sessionActions.updatePageVal('about'));
    }
    
    render() {
        return (
            <div className="about-wrapper">
                <h1 className="me-header">Me Stuff</h1>
                <div className="me-wrapper">

                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(About));
