import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import menuStyles from "./sidemenu.module.css"

const ItemLink = ({ route, text }) => (
  <Link to={route} className={menuStyles.route}>
    {text}
  </Link>
)

const SidebarMenu = props => {
  const { isOpen } = props

  if (!isOpen) {
    return (
      <div className={menuStyles.menuWrapper}>
        <span className={menuStyles.menuIcon}>
          <i className="icon-left-open"></i>
        </span>
      </div>
    )
  } else {
    return (
      <div className={menuStyles.sideMenuContainer}>
        <span className={menuStyles.sideMenuIcon}>
          <i className={"icon-right-open"}></i>
        </span>
        <div className={menuStyles.routeContainer}>
          <ItemLink route="/" text="Home" />
          <ItemLink route="/about" text="About" />
          <ItemLink route="/contact" text="Contact Us" />
          <ItemLink route="/schedule" text="Schedule An Appointment" />
        </div>
      </div>
    )
  }
}

SidebarMenu.props = {
  isOpen: PropTypes.bool,
}

SidebarMenu.defaultProps = {
  isOpen: false,
}

export default SidebarMenu
