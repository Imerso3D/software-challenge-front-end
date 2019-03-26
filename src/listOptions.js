import React from 'react';

import CustomToolbar from "./CustomToolbar";
import Button from '@material-ui/core/Button';

export const columnsOptions = [
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
                            onClick={() => console.log({v: value, t: tableMeta, u: updateValue})}
                    >Edit</Button>
                );
            },
        }
    },
];

export const tableOptions = {
    selectableRows: false,
    customToolbar: () => {
        return (
            <CustomToolbar/>
        );
    }
};
