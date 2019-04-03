import {
  UPDATE_SCAN,
  CREATE_SCAN,
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
    case CREATE_SCAN: {
      const scan = action.scan
      const maxId = state.reduce((acc, val) => Math.max(val.id, acc), -1)
      return [
        ...state,
        {
          ...scan,
          id: maxId + 1
        }
      ]
    }
    default:
      return state
  }
}
