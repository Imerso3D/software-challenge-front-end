import React from 'react'
import { Link } from 'react-router-dom'

import { ScanListGrid, AddScanLink, Header } from './styled'
import Button from '../Button'
import { StoreContext } from '../../contexts/store'

interface SortFunctions {
  [key: string]: (scan1: Scan, scan2: Scan) => number
}

const ScanList = () => {
  const { dispatch, scans, users, sortBy } = React.useContext(StoreContext)
  const findUser = React.useCallback(
    (scan: Scan) => users.find(u => u.id === scan.scannedByUserId),
    [users]
  )

  const sortFunctions = React.useMemo<SortFunctions>(
    () => ({
      name: (scan1, scan2) => (scan1.name > scan2.name ? 1 : -1),
      '-name': (scan1, scan2) => (scan1.name > scan2.name ? -1 : 1),
      elevation: (scan1, scan2) =>
        scan1.elevationMin > scan2.elevationMin ? 1 : -1,
      '-elevation': (scan1, scan2) =>
        scan1.elevationMin > scan2.elevationMin ? -1 : 1,
      user: (scan1, scan2) => {
        const user1 = findUser(scan1)
        const user2 = findUser(scan2)
        if (user1 === undefined || user2 === undefined) {
          return 0
        }
        return user1.name > user2.name ? 1 : -1
      },
      '-user': (scan1, scan2) => {
        const user1 = findUser(scan1)
        const user2 = findUser(scan2)
        if (user1 === undefined || user2 === undefined) {
          return 0
        }
        return user1.name > user2.name ? -1 : 1
      },
    }),
    [users]
  )

  return (
    <>
      <h1>Scan list</h1>
      <AddScanLink to="/add"> + Add scan</AddScanLink>
      <ScanListGrid>
        <Header
          onClick={() =>
            dispatch({
              type: 'SORT_BY',
              payload: sortBy === 'name' ? '-name' : 'name',
            })
          }
        >
          Name
        </Header>
        <Header
          onClick={() =>
            dispatch({
              type: 'SORT_BY',
              payload: sortBy === 'elevation' ? '-elevation' : 'elevation',
            })
          }
        >
          Elevation
        </Header>
        <Header
          onClick={() =>
            dispatch({
              type: 'SORT_BY',
              payload: sortBy === 'user' ? '-user' : 'user',
            })
          }
        >
          User
        </Header>
        <Header />
        {scans.sort(sortFunctions[sortBy]).map((scan, i) => {
          const user = findUser(scan)
          if (!user) return null

          return (
            <React.Fragment key={i}>
              <div>{scan.name}</div>
              <div>
                {scan.elevationMin} - {scan.elevationMax} (
                {Math.round(100 * (scan.elevationMax - scan.elevationMin)) /
                  100}
                )
              </div>
              <div>{user.name}</div>
              <Link to={`/edit/${i}`}>
                <Button>Edit</Button>
              </Link>
            </React.Fragment>
          )
        })}
      </ScanListGrid>
    </>
  )
}

export default ScanList
