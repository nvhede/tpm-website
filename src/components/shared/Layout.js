import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "./Header";

export const layoutType = {
  mobile: "mobile",
  web: "web"
};

const styles = {
  base: {
    display: "flex",
    flexDirection: "column",
    flex: "1 0 auto",
    height: "100vh",
    zIndex: 10,
    [layoutType.web]: {
      marginLeft: 150
    },
    [layoutType.mobile]: {
      marginLeft: 150
    }
  },
  children: {
    alignSelf: "flex-end",
    flexGrow: 1,
    maxWidth: 500,
    minWidth: 400,
    overflow: "auto"
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    viewport: state.viewport.size
  };
};

const layoutSizes = {
  mobile: {
    min: 0,
    max: 640
  },
  web: {
    min: 641,
    max: 1800
  }
};

const isMobile = size => {
  // compare current browser's width with established sizes.
  if (size >= layoutSizes.mobile.min && size <= layoutSizes.mobile.max)
    return true;
  else return false;
};

const isWeb = size => {
  // compare current browser's width with established sizes.
  if (size >= layoutSizes.web.min && size <= layoutSizes.web.max) return true;
  else return false;
};

class LayoutWrapper extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    viewport: PropTypes.number,
    style: PropTypes.any
  };

  render() {
    const { children, viewport, style } = this.props;
    const responsiveStyling = {
      base: {
        ...styles.base,
        ...(isWeb(viewport) && styles.base[layoutType.web]),
        ...(isMobile(viewport) && styles.base[layoutType.mobile])
      },
      children: {
        ...styles.children,
        ...style
      }
    };
    const needSidebar = isWeb(viewport) ? true : false;
    return (
      <div>
        {needSidebar && <Header />}
        <main style={responsiveStyling.base}>
          <div style={responsiveStyling.children}>{children}</div>
        </main>
      </div>
    );
  }
}

export default connect(mapStateToProps)(LayoutWrapper);
