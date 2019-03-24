import {createScanData, createUserData} from './data'
import uuid from 'uuid';

const scans = createScanData();
const users = createUserData();

export const createFullScansList = () =>
    scans.map(scan =>{
        let user = users.find(user => user.id === scan.scannedByUserId);
        let scanId = uuid.v4();
        return Object.assign({id:scanId},scan, {userName: user ? user.name : 'unknown user'}, {showModal: false})
    });
