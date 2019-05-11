import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import * as sessionActions from 'Actions/session.js';

const data = require('Utilities/data.json');

import Details from 'Components/Details/Details.jsx';

import './About.scss';

class About extends Component {
    constructor(props) {
        super(props);

        this.state = {
            details: data.about,
        }
    }
    componentDidMount() {
        const { dispatch } = this.props;

        dispatch(sessionActions.updatePageVal('about'));
    }
    
    render() {
        const { details } = this.state;
        return (
            <div className="about-wrapper">
                <h1 className="me-header">About this guy</h1>
                <div className="me-wrapper">
                    {details.map((info) => {
                        return <Details key={info.headline} info={info} />
                    })}
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { ...state };
}

export default withRouter(connect(mapStateToProps)(About));
