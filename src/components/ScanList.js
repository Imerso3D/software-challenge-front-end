import React from 'react';

import {Tabs,Tab,ListItem,ListItemText} from  '@material-ui/core';

import './rootScansStyle.css';
import ScanModal from './common/Modal';

const  ScanHeader = (props) => (
  <Tabs onChange={props.handleSort}>
    <Tab label='Material Type' value='material' style={{marginLeft:'30px'}} />
    <Tab label='Person Name' value='username' style={{marginLeft:'70px'}}  />
    <Tab label='Elevation Max' value='elevationMax' />
    <Tab label='Elevation Min' value='elevationMin' style={{marginLeft:'-40px'}}  />
  </Tabs>
);


const ScanElement = (props) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: '2fr 2fr 1fr 1fr',
    'text-align': 'center'
  };
  return (
    <ListItem button alignItems="center" style={style}>
        <span style={{'margin-left':'-10px', 'display':'flex'}}>
          <ScanModal {...props} />
          <ListItemText primary={props.materialType} style={{'margin-left':'-20px'}} />
        </span>
      <ListItemText primary={props.username} />
      <ListItemText primary={props.elevationMax} />
      <ListItemText primary={props.elevationMin} />
    </ListItem>
  );
};

const ScanList = (props) =>{
  const {scans, users} = props;
  return (
    <div>
      <ScanHeader handleSort={props.handleSort} />
      {scans.map((scan, i) => {
        const user = users.find(u => u.id === scan.scannedByUserId);
        if (user!==undefined || scan.name!=='')
          return <ScanElement key={i} eid={i} scans={scans} materialType={scan.name} uid={scan.scannedByUserId} username={user.name} elevationMax={scan.elevationMax} elevationMin={scan.elevationMin} />

      })}
    </div>
  );
};

class Scan extends React.Component{

  state = {currentSort:{type:'material', direction:'ascending'},scans:this.props.scans, users:this.props.users};

  handleSort = (e,value) =>{
    const {scans, users} = this.state;
    if (value === 'username')
    {
      users.sort((a,b)=>(a.name> b.name?1:-1));
      scans.sort((a,b)=>( users.indexOf(users.find(u=>u.id === a.scannedByUserId))> users.indexOf(users.find(u=>u.id === b.scannedByUserId))?1:-1));
      this.setState({scans});
    }
    else if (value === 'material')
    {
      scans.sort((a,b)=>(a.name> b.name?1:-1));
      this.setState({scans});
    }
    else
    {
      scans.sort((a,b)=>(a[value]>b[value]?1:-1));
      this.setState({scans});
    }
  };


  render(){
    return  <ScanList {...this.state} handleSort={this.handleSort} />;
  }
}

export default Scan;