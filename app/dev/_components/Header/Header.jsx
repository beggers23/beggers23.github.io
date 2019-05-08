import React from 'react';
import { Link } from 'react-router-dom';

import Nav from 'Components/Nav/Nav.jsx';
import Social from 'Components/Social/Social.jsx';

import './Header.scss';

function Header(props) {
    return (
        <div className="header-container">
            <div className="name">
                <Link to="/">
                    <h1>Brendan Eggers</h1>
                </Link>
            </div>
            <div className="header-nav">
                <Nav 
                    active={props.active}
                />
            </div>
            <div className="header-social">
                <Social />
            </div>
        </div>
    )
};

export default Header;
