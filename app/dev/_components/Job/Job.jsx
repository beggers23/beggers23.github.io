import React, { Component } from 'react';
import ReactGA from 'react-ga';

import './Job.scss';

import Icon from 'Components/Icon/Icon.jsx';

class Job extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: false,
		};

		this.toggleShow = this.toggleShow.bind(this);
	}

	toggleShow() {
		const { show } = this.state;
		const { info } = this.props;
		
		ReactGA.event({
			category: 'Click',
			action: 'Job Details',
			label: `${show ? 'Hiding' : 'Showing'} ${info.title}`
		});

		this.setState({
			show: !show,
		});
	}

	render() {
		const { info } = this.props;
		const { show } = this.state;
		return (
			<div className="job">
				<div className="job-header" onClick={this.toggleShow}>
					<div className="text-holder">
						<h1 className="title">{info.title}</h1>
						<p className="location">
							{(info.link) ? (
								<a href={info.link} rel="noreferrer noopener" target="_blank" rel="noopener noreferrer">
									{info.company}
								</a>
							) : (
								info.company
							)} in {info.location}
						</p>
						<span className="dates">{info.dates}</span>	
					</div>
					<div 
						className={`arrow-wrapper ${show ? 'open' : 'closed'}`}
					>
						<Icon type="arrow" base="fas" name="chevron-down" />
					</div>
				</div>
				<div className={`job-details ${show ? 'show' : 'hide'}`}>
					<p className="description">{info.description}</p>
					<p className="tech">{info.tech}</p>
				</div>
			</div>
		);
	}
}

export default Job;
