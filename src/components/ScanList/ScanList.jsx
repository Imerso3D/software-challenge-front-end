import React from "react";

import "./ScanList.css";
import { getThemeColors } from "utils/color";
import editLogo from "assets/static/img/edit.png";

const colors = getThemeColors().reverse();

const ScanList = ({ scans, users, selectForEdit }) => {
  return (
    <div>
      <div className="Header">Scans:</div>
      <div className="ScanList">
        {scans.map((scan, i) => {
          const user = users.find(u => u.id == scan.scannedByUserId);
          return (
            <div
              style={{
                background: colors[i % colors.length],
                position: "relative"
              }}
              className="ScanListItem"
              key={i}
            >
              <div id={i} className={"editButton"} onClick={selectForEdit}>
                <img
                  style={{
                    border: "solid",
                    borderRadius: "50%",
                    borderWidth: "1px"
                  }}
                  id={i}
                  src={editLogo}
                  alt=""
                />
              </div>
              <span>{scan.name}</span>
              <div className="UserName">by {user.name}</div>
              <span style={{ marginLeft: "1rem" }}>
                {scan.elevationMin} - {scan.elevationMax} m
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScanList;
