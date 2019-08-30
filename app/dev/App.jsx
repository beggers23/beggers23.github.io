import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { isIE } from 'react-device-detect';
import { withRouter } from 'react-router';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import ReactGA from 'react-ga';

import configureStore from 'Store/configureStore';
// Actions
import * as sessionActions from 'Actions/session';

// Templates
import Index from 'Templates/Index/Index.jsx';
import About from 'Templates/About/About.jsx';
import Experience from 'Templates/Experience/Experience.jsx';
import Projects from 'Templates/Projects/Projects.jsx';
import Header from 'Components/Header/Header.jsx';


import './styles/Common.scss';

const store = configureStore();

function Root() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<AppRouter />	
			</BrowserRouter>
		</Provider>
	);
}

class App extends Component {
	constructor(props) {
		super(props);

		ReactGA.initialize('UA-79969210-1', {
			gaOptions: {
				alwaysSendReferrer: true, // Process pages from current host (mybonuscenter.com) as referrals
				allowAnchor: false, // Ignore utm parameters in URL
			},
		});

		ReactGA.plugin.require('displayfeatures');
	}
	
	componentDidMount() {
		const { session , dispatch, history} = this.props;
		window.scrollTo(0, 0);

		const currentTime = new Date().getTime();

		if (session.timeout === 0) {
			dispatch(sessionActions.updateTimeout(currentTime));
		} else {
			if (session.timeOut > (currentTime - (30 * 60000))) {
				dispatch(sessionActions.updatePageVal('landing'));
			}
		}

		if(this.props.session.mode === 'dark') {
			document.body.classList.add('dark');
		}
	}

	toggleDarkMode = () => {
		const { dispatch, session } = this.props;
		const darkModeOn = (session.mode === 'dark');

		ReactGA.event({
			category: 'Click',
			action: 'Dark Mode',
			label: `Turning ${darkModeOn ? 'Off' : 'On'}`
		});

		if (darkModeOn) {
			document.body.classList.remove('dark');
			dispatch(sessionActions.updateColorScheme('light'));
		} else {
			document.body.classList.add('dark');
			dispatch(sessionActions.updateColorScheme('dark'));
		}
	}

	render() {
		const { session } = this.props;
		if(isIE) return <div className="container">My site. My rules. No IE. Get a better browser.</div>
		return (
			<div className="site-wrapper">
				<div className={`container ${session.page}`}>
					{(session.page !== 'landing') &&
						<Header 
							active={session.page}
						/>
					}
					<Switch>
						<Route exact path="/about" component={About}/>
						<Route exact path="/experience" component={Experience}/>
						<Route exact path="/projects" component={Projects}/>
						<Route exact path="/" component={Index} />
					</Switch>
				</div>
				<div 
					className={`toggleDark ${session.mode === 'dark' ? 'dark' : ''}`}
					onClick={this.toggleDarkMode}
				>	
					<div className="slider-wrap">
						<div className="slider" />
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { ...state };
}

const AppRouter = withRouter(connect(mapStateToProps)(App));


const mountNode = document.getElementById('root');

ReactDOM.render(<Root />, mountNode);
