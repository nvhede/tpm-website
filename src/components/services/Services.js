import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "../shared/Layout";

const styles = {};

// const mapStateToProps = (state, ownProps) => {
// 	const map = state.googleMaps;
// 	return
// }

// const mapDispatchToProps = (dispatch, ownProps) => {

// }

class Services extends Component {
  render() {
    return (
      <Layout>
        <div>Services</div>
      </Layout>
    );
  }
}

export default Services;
