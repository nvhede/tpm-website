import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"

const Header = props => {
  const { isOpen } = props

  if (!isOpen) return null
  return (
    <div className={headerStyles.headerWrapper}>
      <p className={headerStyles.headerLogo}>V</p>
      <p className={headerStyles.headerText}>Vidyadhar Hede</p>
    </div>
  )
}

Header.propTypes = {
  isOpen: PropTypes.bool,
}

Header.defaultProps = {
  isOpen: true,
}

export default Header
