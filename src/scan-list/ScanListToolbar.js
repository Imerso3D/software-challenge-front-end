import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";


function ScanListToolbar({addFunction}) {
    return (
        <React.Fragment>
            <Tooltip title={"custom icon"}>
                <IconButton  className="AddScanButton" onClick={() => addFunction()}>
                    <AddIcon color="primary"/>
                </IconButton>
            </Tooltip>
        </React.Fragment>
    );

}

export default ScanListToolbar;
