import React from 'react';

import {Tabs,Tab,ListItem,ListItemText} from  '@material-ui/core';

import './rootScansStyle.css';
import ScanModal from './common/Modal';
const  ScanHeader = (props) => (
  <Tabs width={200} onChange={props.handleSort}>
    <Tab label='Material Type' value='material' />
    <Tab label='Person Name' value='username' />
    <Tab label='Elevation Max' value='elevationMax' />
    <Tab label='Elevation Min' value='elevationMin' />
  </Tabs>
);


const ScanElement = (props) => {
    const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    textAlign: 'left'
    };
    return (
      <ListItem button alignItems="center" style={style}>
        <ListItemText primary={props.materialType} />
        <ListItemText primary={props.username} />
        <ListItemText primary={props.elevationMax} />
        <ListItemText primary={props.elevationMin} />
        <ScanModal {...props} />
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
              if (user!==undefined)
                        return <ScanElement key={i} scans={scans} materialType={scan.name} username={user.name} elevationMax={scan.elevationMax} elevationMin={scan.elevationMin} />
              else return null;
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