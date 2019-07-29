import React from "react";
import { ScanList, SortInput, CreateScan, EditScan } from "components";
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
    currentScanData: {
      name: "null",
      elevationMax: "null",
      elevationMin: "null",
      scannedByUserId: 1
    },
    openCreate: false,
    openEdit: false
  };

  async componentWillMount() {
    this.setState({ scans: await scanApi.getAllScans() });
  }

  handleCreateInputChange = e => {
    const scan = { ...this.state.createdScan };
    scan[e.target.id] = e.target.value;
    this.setState({ createdScan: scan });
  };

  handleEditInputChange = e => {
    const scan = { ...this.state.currentScanData };
    scan[e.target.id] = e.target.value;
    this.setState({ currentScanData: scan });
  };

  handleCreateModalOpen = () => {
    this.setState({ openCreate: true });
  };

  handleCreateModalClose = () => {
    this.setState({ openCreate: false });
  };

  handleEditModalOpen = () => {
    this.setState({ openEdit: true });
  };

  handleEditModalClose = () => {
    this.setState({ openEdit: false });
  };

  handleSelectForEdit = async e => {
    const scan = this.state.scans[e.target.id];

    await this.setState({ currentScanData: scan });
    this.handleEditModalOpen();
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

  handleEditScan = async () => {
    //validate scan
    if ("editScanIsValid") {
      try {
        await scanApi.saveScan(this.state.currentScanData);
        this.setState({
          scans: await scanApi.getAllScans(),
          currentScanData: {
            name: null,
            elevationMax: null,
            elevationMin: null,
            scannedByUserId: null
          },
          openEdit: false
        });
      } catch (e) {
        console.error("e");
      }
    } else {
      // TODO UI
      console.warn("Invalid Submission");
    }
  };

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
          openCreate: false
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
        <CreateScan
          createScan={this.handleCreateScan}
          handleModalClose={this.handleCreateModalClose}
          handleModalOpen={this.handleCreateModalOpen}
          handleInputChange={this.handleCreateInputChange}
          open={this.state.openCreate}
        />
        <EditScan
          saveScan={this.handleEditScan}
          scanData={this.state.currentScanData}
          handleModalClose={this.handleEditModalClose}
          handleModalOpen={this.handleEditModalOpen}
          handleInputChange={this.handleEditInputChange}
          open={this.state.openEdit}
        />
        <ScanList
          scans={this.state.scans}
          users={this.state.users}
          selectForEdit={this.handleSelectForEdit}
        />
        <div>
          <SortInput sorter={this.state.sorter} handleSort={this.handleSort} />
        </div>
      </div>
    );
  }
}

export default ScanContainer;
