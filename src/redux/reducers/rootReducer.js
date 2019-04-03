import {combineReducers} from 'redux'

import scans from './scans'
import users from './users'

export default combineReducers({
  scans,
  users
})
