import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux'
import Radium from 'radium';

const mapDispatchToProps = dispatch => bindActionCreators({
	changePage: () => push('/aboutus')
}, dispatch)

const styles = {

}


class Home extends Component {
	render() {
		const { changePage } = this.props;
		return (
			<div>
				<div> Home </div>
				<p> Click this button! </p>
				<button onClick={() => changePage()}> Change page </button>
			</div>
		)
	}
}

export default connect(null, mapDispatchToProps)(Radium(Home));