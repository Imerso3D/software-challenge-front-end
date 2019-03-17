import React from 'react'
import { createScanData, createUserData } from '../data'
import * as R from 'ramda'

interface Action {
  type: string
  payload: any
}

interface AppState {
  scans: Scan[]
  users: User[]
  dispatch: any
  sortBy: string // TODO: use enums
}

const initialState: AppState = {
  scans: createScanData(),
  users: createUserData(),
  sortBy: 'name',
  dispatch: null,
}

export const StoreContext = React.createContext<AppState>(initialState)

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_SCAN':
      return R.assoc('scans', R.append(action.payload, state.scans), state)
    case 'EDIT_SCAN':
      return state
    default:
      return state
  }
}

export const StoreProvider = (props: any) => {
  const [contextValue, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <StoreContext.Provider
      value={{...contextValue, dispatch}}
      {...props}
    />
  )
}
