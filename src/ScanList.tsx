import React from 'react'

interface ScanListProps {
  scans: Scan[]
  users: User[]
}

const ScanList: React.FC<ScanListProps> = ({ scans, users }) => (
  <>
    <div>Scans:</div>
    <div>
      {scans.map((scan, i) => {
        const user = users.find(u => u.id === scan.scannedByUserId)
        if (!user) return null

        return (
          <div key={i}>
            {scan.name}
            <div>by {user.name}</div>
          </div>
        )
      })}
    </div>
  </>
)

export default ScanList
