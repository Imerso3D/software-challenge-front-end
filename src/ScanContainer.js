import React, { Component } from 'react';
import ScanList from './ScanList';
import { Card, Col, Row } from 'antd';



class ScanContainer extends Component {

  // render scan list with specific sorting 
  render() {
    if (this.props) {
      if (this.props.pState.byName) {
        return (
          <div>
            <ScanList
              scans={this.props.pState.scans.sort((a, b) => a.name.localeCompare(b.name))}
              users={this.props.pState.users}
              pRstates={this.props.pState}
            />
          </div>
        );
      }
      else if (this.props.pState.byElevation) {
        return (
          <ScanList
            scans={this.props.pState.scans.sort((a, b) => a.elevationMax - b.elevationMax)}
            users={this.props.pState.users}
            pRstates={this.props.pState}
          />
        );
      }
      else if (this.props.pState.byUser) {
        return (
          <ScanList
            scans={this.props.pState.scans.sort((a, b) => a.scannedByUserId - b.scannedByUserId)}
            users={this.props.pState.users}
            pRstates={this.props.pState}
          />
        );
      }
    }
  }
}


export default ScanContainer;

// 