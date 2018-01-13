import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import lang from './shared.lang';

const styles = {
	header: {
		fontSize: 13,
		fontWeight: 400,
		display: 'flex',
		justifyContent: 'space-around',
		width: 100,
		borderBottom: '1px solid #ddd',
		padding: '5px 15px',
		background: 'white',
		zIndex: 2,
	}
}

class Header extends Component {
	render() {
		return (
			<div style={styles.header}>
				<ul>
					<li>
						<NavLink exact to='/'>{lang.links.home}</NavLink>
					</li>
					<li>
						<NavLink exact to='/overview'>{lang.links.overview}</NavLink>
					</li>
					<li>
						<NavLink exact to='/services'>{lang.links.services}</NavLink>
					</li>
					<li>
						<NavLink exact to='/aboutus'>{lang.links.aboutUs}</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Radium(Header);