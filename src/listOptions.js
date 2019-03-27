import React from 'react';

import CustomToolbar from "./CustomToolbar";
import Button from '@material-ui/core/Button';
import Scan from './Scan';

export const columnsOptions = (openEditMode) => [
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
                            onClick={() => openEditMode(extractScanData(tableMeta.rowData), "update")
                            }
                    >Edit</Button>
                );
            },
        }
    },
];

function extractScanData(row) {
    let [name, elevationMax, elevationMin, userId, userName] = row;
    return new Scan(name, elevationMax, elevationMin, userId, userName);
}


export const tableOptions = (openEditMode) => {
    return {
        selectableRows: false,
        customToolbar: () => {
            return (
                <CustomToolbar addFunction={() => openEditMode({}, "add")}/>
            );
        }
    }
};
