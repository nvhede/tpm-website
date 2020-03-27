import React from "react"
import PropTypes from "prop-types"
import menuStyles from "./sidemenu.module.css"

const SidebarMenu = props => {
  const { isOpen } = props

  if (!isOpen)
    return (
      <div className={menuStyles.menuWrapper}>
        <span className={menuStyles.menuIcon}>
          <i className="icon-list-bullet"></i>
        </span>
      </div>
    )
}

SidebarMenu.props = {
  isOpen: PropTypes.bool,
}

SidebarMenu.defaultProps = {
  isOpen: false,
}

export default SidebarMenu
