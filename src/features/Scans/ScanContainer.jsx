import React from 'react';
import uuid from 'uuid';
import ScanList from './ScanList';
import {createScanData, createUserData} from '../../data/data';

/**
 * Adding this function here as it is quite unsafe to work with data that has no unique indetifier
 * in a 'real world' this data structure should already have it's IDs
 */ 
const populateWithUniqueIds = (data) => data.map(a => a.id = uuid.v4());

class ScanContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            scans: createScanData(),
            users: createUserData(),
        };
    }

    componentDidMount() {
        this.setState({ scans: populateWithUniqueIds(this.state.scans) });
    }

    render() {
        return (
            <div>
                <ScanList
                    scans={this.state.scans}
                    users={this.state.users}
                />
            </div>
        );
    }
}

export default ScanContainer;
