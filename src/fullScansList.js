import {createScanData, createUserData} from './data'

const scans = createScanData();
const users = createUserData();

export const createFullScansList = () =>
    scans.map(scan =>{
        let user = users.find(user => user.id === scan.scannedByUserId);
        return Object.assign(scan, {userName: user ? user.name : 'unknown user'})
    });
