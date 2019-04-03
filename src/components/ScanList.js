import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Table, Button} from 'antd'

import EditView from './EditView'

import {updateScan} from 'redux/actions'

import './ScanList.css'

const ScanList = ({scanData, users, updateScan}) => {
  const [editing, setEditing] = useState(null)

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      defaultSortOrder: 'ascend',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Username',
      dataIndex: 'user.name',
      key: 'user.name',
      sorter: (a, b) => a.user.name.localeCompare(b.user.name),
    },
    {
      title: 'Elevation min',
      dataIndex: 'elevationMin',
      key: 'elevationMin',
      sorter: (a, b) => a.elevationMin - b.elevationMin,
    },
    {
      title: 'Elevation max',
      dataIndex: 'elevationMax',
      key: 'elevationMax',
      sorter: (a, b) => a.elevationMax - b.elevationMax,
    },
    {
      title: 'Actions',
      render: (scan) => (
        <Button
          type="primary"
          onClick={() => setEditing(scan)}
        >
          Edit
        </Button>
      )
    },
  ]

  const closeEdit = () => setEditing(null)

  const onUpdate = (scan) => {
    updateScan(scan)
    closeEdit()
  }

  return (
    <>
      <Table
        title={() => 'Scans:'}
        dataSource={scanData}
        columns={columns}
        rowKey="id"
        className="scan-list"
      />
      {!!editing && (
        <EditView
          scan={editing}
          users={users}
          onCancel={closeEdit}
          onUpdate={onUpdate}
        />
      )}
    </>
  )
}

function mapStateToProps(state) {
  const {users, scans} = state

  const scanData = scans.map(scan => ({
    ...scan,
    user: users.find(u => u.id === scan.scannedByUserId),
  }))

  return {
    scanData,
    users,
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateScan: (scan) => {
    dispatch(updateScan(scan))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ScanList)
