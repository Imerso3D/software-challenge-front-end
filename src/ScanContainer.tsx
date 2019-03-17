import React from 'react'
import ScanList from './ScanList'
import { createScanData, createUserData } from './data'

const ScanContainer = () => {
  const state = {
    scans: createScanData(),
    users: createUserData(),
  }

  return <ScanList scans={state.scans} users={state.users} />
}

export default ScanContainer
