import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { NavLink } from 'react-router-dom';

import lang from './shared.lang';

const styles = {
	header: {
		display: 'flex',
		flexDirection: 'row',
		flex: 1,
		alignContent: 'space-between',
		position: 'absolute',
		top: 0,
		bottom: 0,
		width: 150,
		height: '100vh',
		zIndex: 1000,
		backgroundColor: '#d3484d',
	},
	linkContainer: {
		padding: 0,
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		justifyContent: 'space-evenly',
	},
	link: {
		listStyle: 'none',
		textAlign: 'center',
		textTransform: 'uppercase',
		padding: 0,
		marginTop: 15,
		marginBottom: 15,
		marginRight: 15,
		marginLeft: 15,
		':hover': {
			backgroundColor: '#FFFFFF',
		},
	},
	// logo: {
	//
	// },
}

const links = {
	home: '',
	overview: 'overview',
	services: 'services',
	aboutUs: 'about-us',
}

class Header extends Component {

	renderLinks = () => {
		return Object.keys(links).map((link, i) => {
			const name = lang.links[link];
			const route = `/${links[link]}`;
			return (
				<li style={styles.link} key={i}>
					<NavLink exact to={route}>{name}</NavLink>
				</li>
			)
		})
	}

	render() {
		return (
			<div style={styles.header}>
				<ul style={styles.linkContainer}>
					{/* Header */}
					{this.renderLinks()}
				</ul>
			</div>
		)
	}
}

export default Radium(Header);