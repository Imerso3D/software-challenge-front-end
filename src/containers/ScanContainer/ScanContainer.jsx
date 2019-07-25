import React from "react";
import { ScanList, SortInput } from "components";
import { createScanData, createUserData } from "data";

class ScanContainer extends React.Component {
  state = {
    scans: createScanData(),
    users: createUserData(),
    sorter: null
  };

  handleSort = sorter => {
    this.setState({ sorter: sorter });

    const scans = this.state.scans.slice().sort((a, b) => {
      var x = a[sorter];
      var y = b[sorter];
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    this.setState({ scans: scans });
  };

  render() {
    return (
      <div>
        <div>
          <SortInput sorter={this.state.sorter} handleSort={this.handleSort} />
        </div>
        <ScanList scans={this.state.scans} users={this.state.users} />
      </div>
    );
  }
}

export default ScanContainer;
