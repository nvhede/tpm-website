import React from "react"
import Welcome from "../components/Welcome"

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  height: "1", // NOTE: Stupid IE11 bug that fixes min-height. https://stackoverflow.com/questions/25177791/ie11-flexbox-and-vh-height-units-not-compatible
  minHeight: "100vh",
}

const root = props => {
  return (
    <div style={rootStyle}>
      <Welcome />
    </div>
  )
}

export default root
