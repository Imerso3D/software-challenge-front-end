import shortid from 'shortid'

import {
  UPDATE_SCAN,
  CREATE_SCAN,
} from 'redux/actions/actionTypes'

const parseElevation = (str) => parseFloat(str.replace(',', '.'))

const defaultScans = []

export default function messages(state = defaultScans, action) {
  switch (action.type) {
    case UPDATE_SCAN: {
      const updatedScan = action.scan
      return state.map(scan => {
        if (scan.id !== updatedScan.id) {
          return scan
        }
        return {...scan, ...updatedScan}
      })
    }
    case CREATE_SCAN: {
      const scan = action.scan
      return [
        ...state,
        {
          ...scan,
          id: shortid(),
          elevationMin: parseElevation(scan.elevationMin),
          elevationMax: parseElevation(scan.elevationMax),
        }
      ]
    }
    default:
      return state
  }
}
