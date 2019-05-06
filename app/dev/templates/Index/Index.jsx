import React from 'react';
import { Link } from 'react-router-dom';

import './Index.scss';

function Index() {
    return (
        <div className="index-wrapper">
            <div className="header">
                <h1 className="name">Brendan Eggers</h1>
            </div>
            <div className="nav">
                <div className='underline'>
                    <Link to="/about">About</Link>
                </div>
                <div className='underline'>
                    <Link to="/experience">Experience</Link>
                </div>
                <div className='underline'>
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    )
};

export default Index;
