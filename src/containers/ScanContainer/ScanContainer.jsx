import React from "react";
import { ScanList, SortInput, CreateScan } from "components";
import { createUserData } from "data";

import { mockScanApi as scanApi } from "api";

class ScanContainer extends React.Component {
  state = {
    scans: [],
    users: createUserData(),
    sorter: null,
    createdScan: {
      name: null,
      elevationMax: null,
      elevationMin: null,
      scannedByUserId: null
    },
    open: false
  };

  async componentWillMount() {
    this.setState({ scans: await scanApi.getAllScans() });
  }

  handleInputChange = e => {
    const scan = { ...this.state.createdScan };
    scan[e.target.id] = e.target.value;
    this.setState({ createdScan: scan });
  };

  handleModalOpen = () => {
    this.setState({ open: true });
  };

  handleModalClose = () => {
    this.setState({ open: false });
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

  createScanIsValid() {
    //Sophisticated validation
    let valid = false;
    valid = this.state.createdScan.scannedByUserId ? true : false;
    return valid;
  }

  handleCreateScan = async () => {
    //validate scan
    if (this.createScanIsValid()) {
      try {
        await scanApi.saveScan(this.state.createdScan);
        this.setState({
          scans: await scanApi.getAllScans(),
          createdScan: {
            name: null,
            elevationMax: null,
            elevationMin: null,
            scannedByUserId: null
          },
          open: false
        });
      } catch (e) {
        console.error("e");
      }
    } else {
      // TODO UI
      console.warn("Invalid Submission");
    }
  };

  render() {
    return (
      <div>
        <div>
          <SortInput sorter={this.state.sorter} handleSort={this.handleSort} />
        </div>

        <CreateScan
          createScan={this.handleCreateScan}
          handleModalClose={this.handleModalClose}
          handleModalOpen={this.handleModalOpen}
          handleInputChange={this.handleInputChange}
          open={this.state.open}
        />
        <ScanList scans={this.state.scans} users={this.state.users} />
      </div>
    );
  }
}

export default ScanContainer;
