import React from 'react'
import ScanList from './ScanList'
import { StoreContext } from './contexts/store'

const ScanContainer = () => {
  const { dispatch, ...state } = React.useContext(StoreContext)

  return (
    <>
      <button onClick={() => dispatch({ type: 'ADD_SCAN', payload: {} })}>
        Click me
      </button>
      <ScanList {...state} />
    </>
  )
}

export default ScanContainer
