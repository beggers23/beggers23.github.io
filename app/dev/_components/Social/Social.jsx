import React from 'react';

import Icon from 'Components/Icon/Icon.jsx';

import './Social.scss';

function Social() {
    return (
        <div className="social">
            <Icon name="linkedin" base="fab" />
            <Icon name="github" base="fab" />
            <Icon name="envelope" base="fas" />
        </div>
    )
};

export default Social;
