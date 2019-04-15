import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import withGracefulUnmount from 'react-graceful-unmount';

// Templates

function Root() {
	return (
		<App />
	);
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			val: false,
		};
	}
	componentDidMount() {
		if(!this.state.val) {
			console.log('here');
		}
	}

	render() {
		return (
			<div className="site-wrapper">
				<h1>Hello World</h1>
			</div>
		);
	}
}

const mountNode = document.getElementById('root');

ReactDOM.render(<Root />, mountNode);
