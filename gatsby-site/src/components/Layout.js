import React from "react"
import PropTypes from "prop-types"
import layoutStyles from "./layout.module.css"

import Header from "./Header"
import SideMenu from "./SideMenu"

const Layout = props => {
  const { children, showSideMenu, title, backgroundImage } = props

  return (
    <div className={layoutStyles.page}>
      <Header />
      <div className={layoutStyles.content}>
        {backgroundImage ? (
          <div className={layoutStyles.imageTitleContainer}>
            <img
              title={backgroundImage.title}
              alt={backgroundImage.alt}
              className={layoutStyles.backgroundImage}
              src={backgroundImage.src}
            />
            <div className={layoutStyles.titleWithBackground}>{title}</div>
          </div>
        ) : (
          <div className={layoutStyles.title}>{title}</div>
        )}
        <div className={layoutStyles.main}>{children}</div>
      </div>
      <SideMenu isOpen={showSideMenu} />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.any.isRequired,
  showSideMenu: PropTypes.bool,
  backgroundImage: PropTypes.shape({
    title: PropTypes.string,
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  title: PropTypes.string,
}

Layout.defaultProps = {
  showSideMenu: true,
}

export default Layout
