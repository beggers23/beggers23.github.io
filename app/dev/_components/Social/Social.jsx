import React from 'react';

import Icon from 'Components/Icon/Icon.jsx';

import './Social.scss';

function Social() {
    return (
        <div className="social">
            <Icon name="mobile-alt" base="fas" />
            <Icon name="linkedin" base="fab" />
            <Icon name="file-pdf" base="fas" />
            <Icon name="github" base="fab" />
            <Icon name="envelope" base="fas" />
        </div>
    )
};

export default Social;
