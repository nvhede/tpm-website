import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { connect } from 'react-redux';

import Map from './Map';
import Scheduling from './Scheduling';
import ContactInfo from './ContactInfo';


const styles = {

};

const mapStateToProps = (state, ownProps) => {

}

const mapDispatchToProps = (dispatch, ownProps) => {

}

class ContactUs extends Component {
	render() {
		return (
			<div>
				<ContactInfo />
				<Map />
				<Scheduling />
			</div>
		)
	}
}

ContactUs.PropTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactUs);