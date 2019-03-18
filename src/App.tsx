import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScanList from './components/ScanList'
import ScanForm from './components/ScanForm'

import { StoreProvider } from './contexts/store'

const App = () => (
  <StoreProvider>
    <Router>
      <Route path="/" component={ScanList} exact />
      <Route path="/add" component={ScanForm} exact />
      <Route path="/edit/:index" component={ScanForm} exact />
    </Router>
  </StoreProvider>
)

export default App
