import React from 'react'
import {connect} from 'react-redux'

import './ScanList.css'

const ScanList = ({users, scans}) => {
  return (
    <div>
      <div className="Header">
        Scans:
      </div>
      <div className="ScanList">
        {scans.map((scan, i) => {
          const user = users.find(u => u.id === scan.scannedByUserId)
          return (
            <div
              className="ScanListItem"
              key={i}
            >
              {scan.name}
              <div className="UserName">
                by {user.name}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const {users, scans} = state

  return {
    users,
    scans,
  }
}

export default connect(mapStateToProps)(ScanList)
