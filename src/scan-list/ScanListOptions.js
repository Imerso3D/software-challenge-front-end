import React from 'react';

import ScanListToolbar from "./ScanListToolbar";
import Button from '@material-ui/core/Button';
import ScanRowData from './ScanRowData';
import {EDIT_MODE} from './ScanList';

const extractScanData = (row) => {
    const [id, name, elevationMax, elevationMin, userId, userName] = row;
    return new ScanRowData(id, name, elevationMax, elevationMin, userId, userName);
};

export const tableOptions = (openScanInEditMode) => {
    return {
        selectableRows: false,
        customToolbar: () => {
            return (
                <ScanListToolbar addFunction={() => openScanInEditMode({}, EDIT_MODE.ADD)}/>
            );
        }
    }
};


export const columnsOptions = (openScanInEditMode) => [
    {
        name: "id",
        label: "Scan ID",
        options: {
            display: false,
            filter: false,
            sort: false,
        }
    },
    {
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "elevationMax",
        label: "Elevation",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "elevationMin",
        label: "Elevation",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "userId",
        label: "User id",
        options: {
            display: false,
            filter: false,
            sort: false,
        }
    },
    {
        name: "userName",
        label: "User name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "Edit",
        options: {
            filter: false,
            customBodyRender: (value, tableMeta, updateValue) => {
                return (
                    <Button color="primary"
                            onClick={() => openScanInEditMode(extractScanData(tableMeta.rowData), EDIT_MODE.UPDATE)
                            }
                    >Edit</Button>
                );
            },
        }
    },
];
