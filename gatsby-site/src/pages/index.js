import React, { Fragment } from "react"
import Header from "../components/Header"
import Menu from "../components/SideMenu"

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  height: "1", // NOTE: Stupid IE11 bug that fixes min-height. https://stackoverflow.com/questions/25177791/ie11-flexbox-and-vh-height-units-not-compatible
  minHeight: "100vh",
}

const testing = {
  display: "flex",
  marginRight: "auto",
}

const root = props => {
  return (
    <div style={rootStyle}>
      <Header />
      <span style={testing}>hello</span>
    </div>
  )
}

export default root
