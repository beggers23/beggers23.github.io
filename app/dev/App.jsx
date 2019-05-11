import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { isIE } from 'react-device-detect';
import { withRouter } from 'react-router';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
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
			<HashRouter>
				<AppRouter />	
			</HashRouter>
		</Provider>
	);
}

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			val: false,
		};
		this.toggleDarkMode = this.toggleDarkMode.bind(this);
	}
	
	componentDidMount() {
		const { session , location, history} = this.props;
		window.scrollTo(0, 0);

		if(session.page === 'landing') {
			history.push('/');
		} else {
			history.push(`/${session.page}`);
		}

		if(this.props.session.mode === 'dark') {
			document.body.classList.add('dark');
		}
	}

	toggleDarkMode() {
		const { dispatch, session } = this.props;
		const darkModeOn = session.mode === 'dark';

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
