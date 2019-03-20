import React from 'react';
import {connect} from 'react-redux';
import {TextField, Button} from '@material-ui/core';
import {addScan, addUser} from "../assets/data/actions/actions";

import './rootScansStyle.css';

class AddScan extends React.Component{
state={  newScan: {
        name: '',
        elevationMax: 0,
        elevationMin: 0,
        scannedByUserId: 1,
    }, newUser:{
        id: 0,
        name: '',
        }
    };


    handleMaterial= (e) => {

    };

     subtractNumberHere= () => {
        console.log('user Now', this.props.scans);
    };

     handleName= (event) => {

    };

     handleElevationMax=(event)=> {

    };

    handleElevationMin=(event)=> {

    };

    handleScannedByUserId=(event)=>{
    };

    render (){
        return (<div style={{display: 'flex', margin:'30px 60px 30px 60px'}}>
          <div style={{display: 'grid', width: '100%', padding:'20px'}}>
            <TextField
              id="material"
              label="Material Type"
              defaultValue="house"
              margin="normal"
              onChange={this.handleMaterial}
            />
            <TextField
              id="user"
              label="Person name"
              defaultValue="person name"
              margin="normal"
              onChange={this.handleScannedByUserId}
            />
            <TextField
              id="elevationMax"
              label="Maximum Elivation"
              type='number'
              defaultValue="2"
              margin="normal"
              onChange={this.handleElevationMax}
            />
            <TextField
              id="elevationMin"
              label="Maximum Elivation"
              type='number'
              defaultValue="0"
              margin="normal"
              onChange={this.handleElevationMin}
            />
            <div>
              <Button variant="contained" color="primary">
                    Add Scan
              </Button>
              <Button variant="contained">
                    Clear
              </Button>
            </div>
          </div>
          <div style={{display: 'grid', width: '100%', padding: '20px'}}>
            <TextField
              id="userfullname"
              label="User full"
              defaultValue="Yonatan Fessehaye"
              margin="normal"
            />
            <TextField
              id="useremail"
              label="email"
              defaultValue="fessehayeyonatan@gmail.com"
              margin="normal"
            />
            <TextField
              id="elevationMax"
              label="Maximum Elivation"
              type='number'
              defaultValue="2"
              margin="normal"
              onChange={this.handleElevationMax}
            />
            <TextField
              id="usercontact"
              label="Telephone"
              type='number'
              defaultValue="40998418"
            />
            <div>
              <Button variant="contained" color="secondary">
                            Add User
              </Button>
              <Button variant="contained">
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
        number: state.count,
    });

const mapDispatchToProps =dispatch=>
    ({
        addNewScan: (v) => dispatch(addScan(v)),
        addNewUser: (v) => dispatch(addUser(v))
    });

export default connect(mapStateToProps, mapDispatchToProps)(AddScan);


