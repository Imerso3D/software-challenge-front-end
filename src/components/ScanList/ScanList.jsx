import React from "react";

import "./ScanList.css";

const ScanList = ({ scans, users }) => {
  return (
    <div>
      <div className="Header">Scans:</div>
      <div className="ScanList">
        {scans.map((scan, i) => {
          const user = users.find(u => u.id == scan.scannedByUserId);
          return (
            <div className="ScanListItem" key={i}>
              {scan.name}
              <div className="UserName">by {user.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScanList;
