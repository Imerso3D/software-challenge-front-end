import {
  UPDATE_SCAN,
} from 'redux/actions/actionTypes'

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
    default:
      return state
  }
}
