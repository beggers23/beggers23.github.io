import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
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
        ReactGA.ga('send', 'pageview', { page: 'about', title: 'about' });
        dispatch(sessionActions.updatePageVal('about'));
    }
    
    render() {
        const { details } = this.state;
        return (
            <div className="about-wrapper">
                <h1 className="me-header">Stuff about this guy</h1>
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
