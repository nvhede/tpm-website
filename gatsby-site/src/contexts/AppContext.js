import React, { useReducer, useEffect } from "react"
import PropTypes from "prop-types"

const defaultState = {
  isSideMenuOpen: false,
}

const AppContext = React.createContext(defaultState)

export const AppProvider = props => {}
