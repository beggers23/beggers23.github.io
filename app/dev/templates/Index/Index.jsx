import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';

import Social from 'Components/Social/Social.jsx';
import Nav from 'Components/Nav/Nav.jsx';
import Header from 'Components/Header/Header.jsx';

import './Index.scss';

class Index extends Component {
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(sessionActions.updatePageVal('landing'));
    }
    render() {
        return (
            <div className="index-wrapper">
                <div className="header">
                    <h1 className="name">Brendan Eggers</h1>
                </div>
                <Nav />
                <Social />
            </div>
        )
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(Index));

