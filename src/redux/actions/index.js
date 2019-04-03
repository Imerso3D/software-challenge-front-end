import * as actionTypes from './actionTypes'

export const updateScan = (scan) => {
  return {
    type: actionTypes.UPDATE_SCAN,
    scan,
  }
}

export const createScan = (scan) => {
  return {
    type: actionTypes.CREATE_SCAN,
    scan,
  }
}
