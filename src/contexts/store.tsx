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

const alter = (scan: Scan, scanIndex: number, scans: Scan[]) =>
  scans.map((iScan, index) => {
    if (index !== scanIndex) {
      return iScan
    }
    return scan
  })

const updateScans = R.assoc('scans')

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case 'ADD_SCAN':
      return updateScans(R.append(action.payload.scan, state.scans), state)
    case 'EDIT_SCAN':
      return updateScans(
        alter(
          action.payload.scan,
          action.payload.editableScanIndex,
          state.scans
        ),
        state
      )
      return state
    case 'SORT_BY':
      return R.assoc('sortBy', action.payload, state)
    default:
      return state
  }
}

export const StoreProvider = (props: any) => {
  const [contextValue, dispatch] = React.useReducer(appReducer, initialState)
  return (
    <StoreContext.Provider value={{ ...contextValue, dispatch }} {...props} />
  )
}
