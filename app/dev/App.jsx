import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import withGracefulUnmount from 'react-graceful-unmount';
import configureStore from 'Store/configureStore';

// Actions
import * as sessionActions from 'Actions/session';

// Templates
import Index from 'Templates/control/Index.jsx';

const store = configureStore();

function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
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
				<Index />
			</div>
		);
	}
}

const mountNode = document.getElementById('root');

ReactDOM.render(<Root />, mountNode);
