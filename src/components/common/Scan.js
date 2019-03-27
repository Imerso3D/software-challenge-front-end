import {Tabs,Tab} from  '@material-ui/core';
import React from 'react';

const  ScanHeader = () => (
  <div>
    <Tabs width={200} onChange={this.handleSortChange}>
      <Tab label='Person Name' value='username' />
      <Tab label='Material Type' value='material' />
      <Tab label='Elevation' value='elevation' />
    </Tabs>
  </div>
);

const ScanElement = ({name, username, elevation}) =>(
  <Tabs width={200}>
    <Tab label={name} />
    <Tab label={username} />
    <Tab label={elevation} />
  </Tabs>
    );

class Scan extends React.Component{

    handleSortChange = () =>{
        console.log('Clicked');
    };



render(){
return (
  <div>
    <div>
      <div className="Header">
              Scans:
      </div>
      <div className="ScanList">
        <ScanHeader />
        {scans.map((scan, i) => {
                  const user = users.find(u => u.id === scan.scannedByUserId);
                  return <ScanElement key={i} name={scan.name} username={user.name} />
              })}
      </div>
    </div>
  </div>
);
}
}

export default Scan;