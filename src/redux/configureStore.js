import {createStore} from 'redux'

import rootReducer from './reducers/rootReducer'

import {createScanData, createUserData} from 'data/data'

const initialState = {
  users: createUserData(),
  scans: createScanData()
}

export default function configureStore(preloadedState = initialState) {
  const store = createStore(
    rootReducer,
    preloadedState,
  )

  return store
}
