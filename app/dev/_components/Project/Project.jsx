import React, { Component } from 'react';
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
		this.setState({
			overlay: !this.state.overlay,
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
							<a href={info.link}>{info.title}</a>
						</h1>
						<p>{info.description}</p>
						<p>{info.technology}</p>
						<p>{info.trafficDetails}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;
