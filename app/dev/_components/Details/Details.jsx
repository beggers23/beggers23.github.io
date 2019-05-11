import React from 'react';

import Icon from 'Components/Icon/Icon.jsx';

import './Details.scss';

function Details(props) {
	const { info } = props;
	return (
		<div className="details-wrapper">
			<h1>{info.headline}</h1>
			<div className="content-wrap">
				{info.images.map((img) => {
					return (
						<div key={img.name} className="content">
							<Icon name={img.name} base={img.base} type="about" />
							<p className="text">{img.desc}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Details;
