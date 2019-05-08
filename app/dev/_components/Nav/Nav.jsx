import React from 'react';

import { Link } from 'react-router-dom';

import './Nav.scss';

function Nav(props) {
    return (
        <header className="nav">
            <div className={`underline ${(props.active === 'about') ? 'active' : 'inactive'}`}>
                <Link to="/about">About</Link>
            </div>
            <div className={`underline ${(props.active === 'experience') ? 'active' : 'inactive'}`}>
                <Link to="/experience">Experience</Link>
            </div>
            <div className={`underline ${(props.active === 'projects') ? 'active' : 'inactive'}`}>
                <Link to="/projects">Projects</Link>
            </div>
        </header>
    )
};

export default Nav;
