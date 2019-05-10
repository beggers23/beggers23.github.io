import React from 'react';
import './Job.scss';

function Job(props) {
	const { info } = props;
	return (
		<div className="job-wrapper">
			<h1 className="title">{info.title} <span className="dates">({info.dates})</span></h1>
			<p className="location">{info.company} in {info.location}</p>
			<div className="job-details">
				<p>{info.description}</p>
				<p>{info.technology}</p>
			</div>
		</div>
	);
}

export default Job;
