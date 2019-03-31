import React from 'react';
import ReactDOM from 'react-dom';
import ScanList from './ScanList';
import {createScanData, createUserData} from "../data";

function scanListElement(){
    return<ScanList
        scans={createScanData()}
        users={createUserData()}
    />
}

it('basic render test', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(scanListElement(), div);
    ReactDOM.unmountComponentAtNode(div);
});
