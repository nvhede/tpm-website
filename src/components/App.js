import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Components
import Header from "./shared/Header";
import Routes from "./shared/Routes";
import { setViewport } from "../reducers/viewportReducer";

const styles = {};

const mapStateToProps = state => {
  return {
    viewport: state.viewport.size
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setViewport: () => setViewport()
  };
};

class App extends Component {
  static propTypes = {
    style: PropTypes.any,
    viewport: PropTypes.number,
    setViewport: PropTypes.func
  };

  componentDidMount() {
    const { setViewport, viewport } = this.props;
    if (!viewport || viewport === 0) setViewport();
  }

  render() {
    const { style } = this.props;

    return (
      <div style={style}>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        <Routes />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
