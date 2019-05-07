import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.scss';

function Nav() {
    return (
        <header className="nav">
            <div className="underline">
                <Link to="/about">About</Link>
            </div>
            <div className="underline">
                <Link to="/experience">Experience</Link>
            </div>
            <div className="underline">
                <Link to="/projects">Projects</Link>
            </div>
        </header>
    )
};

export default Nav;
