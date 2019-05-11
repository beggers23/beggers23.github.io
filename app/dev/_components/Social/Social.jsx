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
            <a href="https://www.linkedin.com/in/brendaneggers/" target="_blank">
                <Icon link="" name="linkedin" base="fab" type="social" />
            </a>
            <Icon name="file-pdf" base="fas" type="social" />
            <a href="https://github.com/beggers23" target="_blank">
                <Icon name="github" base="fab" type="social" />
            </a>
            <a href="mailto:brendan@eggers.dev">
                <Icon name="envelope" base="fas" type="social" />
            </a>
        </div>
    )
};

export default Social;
