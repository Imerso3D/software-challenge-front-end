import React, {useReducer} from 'react';
import './ScanList.css'
import MUIDataTable from "mui-datatables";
import {columnsOptions, tableOptions} from './listOptions';

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

    let tableData = scans.map(scan => Object.assign({}, {...scan}, {...getUserName(users, scan)}));

    return (
        <div>
            <div className="Header">
                Scans:
            </div>
            <div className="ScanList">
                <MUIDataTable
                    data={tableData}
                    columns={columnsOptions}
                    options={tableOptions}
                />
            </div>
        </div>
    );
}

export default ScanList;
