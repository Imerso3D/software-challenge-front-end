import React from 'react';
import {connect} from 'react-redux';
import {TextField, Button} from '@material-ui/core';
import {addScan, addUser} from "../assets/data/actions/actions";

import './rootScansStyle.css';

class AddScan extends React.Component{
  state={
    newMaterialname: '',
    elevationMax: 0,
    elevationMin: 0,
    scannedByUserId: 1,
    newUserid: this.props.users.length,
    newUserName: '',
    dataReady: true,
    dataUserReady: true
  };


  handleMaterialName= (e) => {
    this.setState({newMaterialname: e.target.value});
    if(this.state.newMaterialname ==='')
      this.setState({dataReady: true});
    else
      this.setState({dataReady: false});

  };

  handleMaterialUserId= (e) => {
    const v = e.target.value;
    if(v>this.props.users.length-1)
      this.setState({dataReady: true});
    else
    {
      this.setState({scannedByUserId:v, dataReady: false });
    }

  };

  handleElevationMax=(e)=> {
    this.setState({elevationMax: e.target.value});
  };

  handleElevationMin=(e)=> {
    this.setState({elevationMin: e.target.value});
  };

  handleAddNewScan=(event)=>{

    const newScanData = {
      name: this.state.newMaterialname,
      elevationMax: Number(this.state.elevationMax),
      elevationMin: Number(this.state.elevationMin),
      scannedByUserId: Number(this.state.scannedByUserId),
    };
    if(this.state.newMaterialname ==='')
      this.setState({dataReady: true});
    else
    {
      this.setState({dataReady: false});
      this.props.addNewScan(newScanData);
      this.handleClearScanToBe();
    }
  };

  handleClearScanToBe=()=>{
    this.setState({ newMaterialname: '',
      elevationMax: 0,
      elevationMin: 0,
      scannedByUserId: 1,
      newUserid: this.props.users.length,
      dataReady: true,
    })
  };

  handleNewUserName=(e)=> {
    this.setState({newUserName: e.target.value});
    if(this.state.newUserName ==='')
      this.setState({dataUserReady: true});
    else
      this.setState({dataUserReady: false});
  };

  handleNewUserAddition=()=>{
    const id = this.props.users.length;
    const newScanData = {
      id: Number(id),
      name: this.state.newUserName,
    };
    if(this.state.newUserName ==='')
      this.setState({dataUserReady: true});
    else
    {
      this.setState({dataUserReady: false});
      this.props.addNewUser(newScanData);
      this.handleClearUserFields();
    }
  };

  handleClearUserFields=()=>{
    this.setState({
      newUserName: '',
      dataUserReady: true
    })
  };


  render (){
    return (<div style={{display: 'flex', margin:'30px 60px 30px 60px'}}>
        <div style={{display: 'grid', width: '100%', padding:'20px'}}>
          <p>Add Material</p>
          <TextField
            id="material"
            label="Material Type"
            margin="normal"
            value={this.state.newMaterialname}
            onChange={this.handleMaterialName}
          />
          <TextField
            id="user"
            label="Person Id"
            inputProps={{ min: 1, max: this.props.users.length-1}}
            value={this.state.scannedByUserId}
            defaultValue={this.props.users.length}
            type='number'
            onChange={this.handleMaterialUserId}
          />
          <TextField
            id="elevationMax"
            label="Maximum Ellevation"
            type='number'
            defaultValue={this.state.elevationMax}
            margin="normal"
            onChange={this.handleElevationMax}
          />
          <TextField
            id="elevationMin"
            label="Minimum Ellevation"
            type='number'
            defaultValue={this.state.elevationMin}
            margin="normal"
            onChange={this.handleElevationMin}
          />
          <div>
            <Button variant="contained" color="primary" disabled={this.state.dataReady} onClick={this.handleAddNewScan}>
              Add Scan
            </Button>
            <Button variant="contained" onClick={this.handleClearScanToBe}>
              Clear
            </Button>
          </div>
        </div>
        <div style={{display: 'grid', width: '100%', padding: '20px'}}>
          <p>Add User</p>
          <TextField
            id="userfullname"
            label="Person name"
            margin="normal"
            value={this.state.newUserName}
            onChange={this.handleNewUserName}
          />
          <TextField
            id="useremail"
            label="email"
            defaultValue="email/not required"
            margin="normal"
          />
          <TextField
            id="usercontact"
            label="Telephone"
            type='number'
            defaultValue="40998418"
          />
          <div>
            <Button variant="contained" color="secondary" disabled={this.state.dataUserReady} onClick={this.handleNewUserAddition}>
              Add User
            </Button>
            <Button variant="contained" onClick={this.handleClearUserFields}>
              Clear
            </Button>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps=state=>
  ({
    scans: state.allScans,
    users: state.allUsers,
  });

const mapDispatchToProps =dispatch=>
  ({
    addNewScan: (v) => dispatch(addScan(v)),
    addNewUser: (v) => dispatch(addUser(v))
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddScan);


