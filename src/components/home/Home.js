import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Layout from "../shared/Layout";

// const mapStateToProps = (state, ownProps) => {
// 	const map = state.googleMaps;
// 	return
// }

// const mapDispatchToProps = (dispatch, ownProps) => {

// }

class Home extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h4>Pain is inevitable. Suffering is optional.</h4>
          <p>
            Many people out there are suffering from endless pain, unable to
            experience everything that life has to offer. For three decades now,
            Vidyadhar S. Hede, MD, has dedicated himself to helping patients
            overcome their pain. He has been a pioneer in pain management,
            always standing at the forefront of technological advances necessary
            to alleviate his patients' pain, while treating them with respect
            and sensitivity.
          </p>
          <p>
            Dr. Hede offers progressive treatment programs tailored specifically
            to the patient's needs and developed in concert with referring
            physicians and other healthcare providers. His goal is to provide
            cost effective pain management services that provide lasting relief
            to all his patients and to always continue expanding his services
            with promising new procedures and drug therapies.
          </p>
          <p>
            Many people out there are suffering from endless pain, unable to
            experience everything that life has to offer. For three decades now,
            Vidyadhar S. Hede, MD, has dedicated himself to helping patients
            overcome their pain. He has been a pioneer in pain management,
            always standing at the forefront of technological advances necessary
            to alleviate his patients' pain, while treating them with respect
            and sensitivity.
          </p>
          <p>
            Dr. Hede offers progressive treatment programs tailored specifically
            to the patient's needs and developed in concert with referring
            physicians and other healthcare providers. His goal is to provide
            cost effective pain management services that provide lasting relief
            to all his patients and to always continue expanding his services
            with promising new procedures and drug therapies.
          </p>
        </div>
      </Layout>
    );
  }
}

export default Home;
