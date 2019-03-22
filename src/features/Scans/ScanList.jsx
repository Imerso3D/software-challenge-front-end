import React from 'react';
import uuid from 'uuid';

import './ScanList.css';
import ScanListItem from './components/ScanListItem';
import AddScanListItem from './components/AddScanListItem';
import EditScanListItem from './components/EditScanListItem';

const SORTERS = {
    'name': (a, b) => a.name.localeCompare(b.name),
    'username': (a, b) => a.scannedByUserName.localeCompare(b.scannedByUserName),
    'elevation': (a, b) => a.elevationMax > b.elevationMax ? 1 : -1
}

const populateScans = (scans, users) => scans
    .map(a => {
        let foundUser = users.find(b => b.id === parseInt(a.scannedByUserId.toString()));
        return Object.assign(a, {
            scannedByUserName: foundUser ? foundUser.name : 'unknown'
            });
        }
    );

class ScanList extends React.Component {

    state = {
        sortBy: 'name',
        scans: this.props.scans,
        editing: []
    };

    onAddScanItem = (newScanItem) => {
        newScanItem.id = uuid.v4();
        this.setState((state) => ({ scans: [...state.scans, newScanItem] }));
    }

    onMarkEditScanItem = (id) => {
        this.setState((state) => ({ editing: [...state.editing, id] }));
      }

    onEditScanItem = (updatedScanItem) => {
        this.setState((state) => ({
            scans: state.scans.map(scan => scan.id === updatedScanItem.id ? { ...scan, ...updatedScanItem } : scan),
            editing: state.editing.filter(id => updatedScanItem.id !== id)
        }));
    }
    
    render() {
        const { sortBy, scans, editing } = this.state;
        const { users } = this.props;
        const scansPopulated = populateScans(scans, users);
        
        const listItems = scansPopulated
            .sort(SORTERS[sortBy])
            .map((scan, i) => 
                editing.includes(scan.id)
                ? <EditScanListItem
                    key={i}
                    scan={scan}
                    users={users}
                    onEditScanItem={this.onEditScanItem}
                />
                : <ScanListItem 
                    key={i} 
                    scan={scan} 
                    onMarkEditScanItem={this.onMarkEditScanItem} 
                />
            );

        return (
            <div className="Container">
                <div className="Header">Add new header:</div>
                <AddScanListItem
                    users={users}
                    onAddScanItem={this.onAddScanItem} 
                />
                <div className="Header">Scans:</div>
                <table className="ScanList">
                    <thead>
                        <tr>
                            <td><button onClick={() => this.setState({sortBy:'name'})}>Sort by Name</button></td>
                            <td><button onClick={() => this.setState({sortBy:'username'})}>Sort by User Name</button></td>
                            <td><button onClick={() => this.setState({sortBy:'elevation'})}>Sort by Elevation</button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {listItems}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ScanList;
