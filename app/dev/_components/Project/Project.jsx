import React, { Component } from 'react';
import ReactGA from 'react-ga';
import './Project.scss';
class Project extends Component {
	constructor(props) {
		super(props);

		this.state = {
			overlay: false,
		}

		this.toggleOverlay = this.toggleOverlay.bind(this);
	}

	toggleOverlay() {
		const { overlay } = this.state;
		const { info } = this.state;
		
		ReactGA.event({
			category: 'Click',
			action: 'Project Overlay',
			label: `${overlay ? 'Hiding' : 'Showing'} ${info.title}`
		});

		this.setState({
			overlay: !overlay,
		});
	}

	render() {
		const { info } = this.props;
		const { overlay } = this.state;
		return (
			<div 
				className="project" 
				style={{ backgroundImage: `url(${info.image})` }}
				onClick={this.toggleOverlay}
			>
				<div className={`overlay ${overlay}`}>
					<div className="proj-details">
						<h1>
							{info.link !== '' ? (
								<a href={info.link} target="_blank" rel="noopener noreferrer">{info.title}</a>
							) : (
								<span>{info.title}</span>
							)}
						</h1>
						<p>{info.trafficDetails}</p>
						<p>{info.description}</p>
						<p>{info.technology}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
