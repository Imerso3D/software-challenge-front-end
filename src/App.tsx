import React from 'react'
import ScanContainer from './ScanContainer'
import ScanForm from './ScanForm'

import { StoreProvider } from './contexts/store'

const App = () => (
  <StoreProvider>
    <header>Software Challenge</header>
    <ScanContainer />
    <ScanForm />
  </StoreProvider>
)

export default App
