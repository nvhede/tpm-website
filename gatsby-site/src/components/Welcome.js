import React from "react"
import PropTypes from "prop-types"

import Layout from "./Layout"

const imageStyle = {
  width: "100%",
  height: "auto",
}

const Welcome = props => {
  const backgroundImage = {
    src: "https://libreshot.com/wp-content/uploads/2016/03/coffee-beans-1.jpg",
    alt: "Coffee",
    title: "Coffee",
  }
  return <Layout title="Welcome" backgroundImage={backgroundImage} />
}

export default Welcome
