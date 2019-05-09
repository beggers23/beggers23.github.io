import React from 'react';
import { isMobile } from 'react-device-detect';

import Icon from 'Components/Icon/Icon.jsx';

import './Social.scss';

function Social() {
    return (
        <div className="social">
            { (isMobile) &&
                <Icon name="mobile-alt" base="fas" type="social" />
            }
            <Icon name="linkedin" base="fab" type="social" />
            <Icon name="file-pdf" base="fas" type="social" />
            <Icon name="github" base="fab" type="social" />
            <Icon name="envelope" base="fas" type="social" />
        </div>
    )
};

export default Social;
