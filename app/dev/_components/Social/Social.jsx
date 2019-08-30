import React from 'react';
import { isMobile } from 'react-device-detect';

import Icon from 'Components/Icon/Icon.jsx';

import './Social.scss';

function Social() {
    return (
        <div className="social">
            { (isMobile) &&
                <a href="tel:9149073990">
                    <Icon name="mobile-alt" base="fas" type="social" />
                </a>
            }
            <a href="https://www.linkedin.com/in/brendaneggers/" target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" base="fab" type="social" />
            </a>
            <a href="https://github.com/beggers23" target="_blank" rel="noopener noreferrer">
                <Icon name="github" base="fab" type="social" />
            </a>
            <a href="mailto:eggers.brendan@gmail.com">
                <Icon name="envelope" base="fas" type="social" />
            </a>
        </div>
    )
};

export default Social;
