import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';

import Nav from 'Components/Nav/Nav.jsx';
import Social from 'Components/Social/Social.jsx';

import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);

        const smallWindow = isMobile || (window.innerWidth < 900);

        this.state = {
            showMenu: !smallWindow,
            active: props.active,
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if((nextProps.active !== this.state.active) && isMobile) {
            this.setState({
                showMenu: false,
            })
        }
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu,
        });
    }

    render() {
        const { active, page } = this.props;
        const { showMenu } = this.state;
        return (
            <div className={`header-container ${page}`}>
                <div className="name">
                    <Link to="/">
                        <h1>Brendan Eggers</h1>
                    </Link>
                </div>
                <div className={`links-wrapper ${!showMenu ? 'hidden' : 'shown'}`}>
                    <div className="header-nav">
                        <Nav 
                            active={active}
                        />
                    </div>
                    <div className="header-social">
                        <Social />
                    </div>
                </div>
                <div 
                    id="hamburger"
                    onClick={this.toggleMenu}
                >
                    <div className={`bars ${showMenu}`}>
                        <article className="bar top" />
                        <article className="bar bottom" />
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;
