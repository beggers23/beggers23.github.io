import React from 'react';
import './Icon.scss';

function Icon(props) {
    return (
        <p className={`${props.type}-icon`}>
            <i id={props.name} className={`${props.base} fa-${props.name}`}></i>
        </p>
    )
};

export default Icon;
