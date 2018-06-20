import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const styles = {};

const mapStateToProps = state => {
  return {
    viewport: state.viewport.size
  };
};

class Footer extends Component {
  static propTypes = {};

  render() {
    return <div />;
  }
}

export default connect(
  mapStateToProps,
  null
)(Footer);
