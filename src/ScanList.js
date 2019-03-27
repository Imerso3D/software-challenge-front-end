import React, {useState, useReducer} from 'react';
import './ScanList.css'
import MUIDataTable from "mui-datatables";
import {columnsOptions, tableOptions} from './listOptions';
import Modal from "@material-ui/core/es/Modal/Modal";
import ScanEdit from "./ScanEdit";

const getUserName = (users, scan) => {
    const user = users.find(u => u.id === scan.scannedByUserId);
    return {userName: user.name, userId: user.id};
};


const reducer = (state, action) => {
    switch (action.type) {
        case "update":
            return {...state};
        case "add":
            return {...state};
        default:
            return state;
    }
};

function ScanList(props) {
    const [{scans, users}, dispatch] = useReducer(reducer, props);

    const [isModalOpened, setModalOpen] = useState(false);
    const [editMode, setEditMode] = useState('');
    const [scanToEdit, setScanToEdit] = useState({});

    const openEditMode = (initialState, actionType) => {
        setScanToEdit(initialState);
        setEditMode(actionType);
        setModalOpen(true);
    };

    let tableData = scans.map(scan => Object.assign({}, {...scan}, {...getUserName(users, scan)}));

    return (
        <div>
            <div className="Header">
                Scans:
            </div>
            <div className="ScanList">
                <MUIDataTable
                    data={tableData}
                    columns={columnsOptions(openEditMode)}
                    options={tableOptions(openEditMode)}
                />
            </div>
            <Modal open={isModalOpened}
                   onClose={() => setModalOpen(false)}
            >
                <ScanEdit scan={scanToEdit}
                          users={users}
                          editFunction={
                              (scan) => {
                                  dispatch({type: editMode, scan});
                                  setModalOpen(false)
                              }}
                />
            </Modal>

        </div>
    );
}

export default ScanList;
