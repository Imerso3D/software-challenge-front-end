import React from 'react'
import {Layout, Breadcrumb} from 'antd'

import ScanList from "./components/ScanList"

import './app.scss'

const App = () => {
  return (
    <Layout className="app">
      <Layout.Header className="app-header">
        Software Challenge
      </Layout.Header>
      <Layout.Content className="app-content">
        <Breadcrumb className="app-breadcrumb">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Scans</Breadcrumb.Item>
        </Breadcrumb>
        <div className="scans-container">
          <ScanList />
        </div>
      </Layout.Content>
    </Layout>
  )
}

export default App
