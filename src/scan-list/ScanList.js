import React, {useState, useReducer} from 'react';
import './ScanList.css'
import MUIDataTable from "mui-datatables";
import {columnsOptions, tableOptions} from './ScanListOptions';
import Modal from "@material-ui/core/Modal/Modal";
import ScanEdit from "./ScanEdit";

export const EDIT_MODE = {
    UPDATE: "update",
    ADD: "add"
};

const reducer = (state, action) => {
    switch (action.type) {
        case EDIT_MODE.UPDATE:
            // TODO: call external API to update data at server side here
            const newState = Object.assign([], state);
            const updatedElementIdx = newState.findIndex(el => el.id === action.scan.id);
            newState[updatedElementIdx] = action.scan.toRawData();
            return newState;
        case EDIT_MODE.ADD:
            // TODO: call external API to add data at server side here
            return [...state, action.scan.toRawData()];
        default:
            return state;
    }
};

function ScanList({scans, users}) {

    const [scanList, dispatch] = useReducer(reducer, assignTmpIdToScans(scans));

    const [isModalOpened, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [scanToEdit, setScanToEdit] = useState({});

    const openScanInEditMode = (initialState, editMode) => {
        setScanToEdit(initialState);
        setEditMode(editMode);
        setModalOpen(true);
    };

    const tableData = scanList.map((scan) => Object.assign({...scan}, {...getUserDataForScan(users, scan)}));
    return (
        <div>
            <div className="Header">
                Scans:
            </div>
            <div className="ScanList">
                <MUIDataTable
                    data={tableData}
                    columns={columnsOptions(openScanInEditMode)}
                    options={tableOptions(openScanInEditMode)}
                />
            </div>
            <Modal open={isModalOpened}
                   onClose={() => setModalOpen(false)}>
                <ScanEdit scan={scanToEdit}
                          users={users}
                          addFunction={
                              (scan) => {
                                  dispatch({type: editMode, scan});
                                  setModalOpen(false)
                              }}
                />
            </Modal>

        </div>
    );
}

const getUserDataForScan = (users, scan) => {
    const user = users.find(u => u.id === scan.scannedByUserId);
    return {userName: user.name, userId: user.id};
};

const assignTmpIdToScans = (scans) => {
    // server should return unique id for each scan we got
    // until it's implemented we will assign temporary values
    return scans.map((s, id) => Object.assign({id: id}, {...s}));
};

export default ScanList;
