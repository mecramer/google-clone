import React, { createContext, useContext, useReducer } from 'react'

// This is setting up a data layer to use throughout the app

// Preparing the data layer
export const StateContext = createContext()

// initialState - what the data layer looks like when the app is loaded
// reducer - listens to changes
// this is a higher order component
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>{children}</StateContext.Provider>
)

// Hook which allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext)
