import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';

import './Experience.scss';
class Experience extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(sessionActions.updatePageVal('experience'));
    }
    
    render() {
        return (
            <div>
                <h1>Experience</h1>
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(Experience));
