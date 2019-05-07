import React from 'react';

import Social from 'Components/Social/Social.jsx';
import Nav from 'Components/Nav/Nav.jsx';

import './Index.scss';

function Index() {
    return (
        <div className="index-wrapper">
            <div className="header">
                <h1 className="name">Brendan Eggers</h1>
            </div>
            <Nav />
            <Social />
        </div>
    )
};

export default Index;
