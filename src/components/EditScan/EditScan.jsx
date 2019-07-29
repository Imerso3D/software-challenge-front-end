import React from "react";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: "none"
  }
}));

const EditScan = ({
  open,
  saveScan,
  scanData,
  handleInputChange,
  handleModalClose,
  handleModalOpen
}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  return (
    <div>
      <div>
        <Modal
          style={modalStyle}
          className={classes.paper}
          open={open}
          onClose={handleModalClose}
        >
          <form className={""} noValidate autoComplete="off">
            <TextField
              required
              id="name"
              label="Name (of Scan)"
              defaultValue={scanData.name}
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />

            <TextField
              required
              id="scannedByUserId"
              label="User Name"
              defaultValue={scanData.scannedByUserId}
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />

            <TextField
              required
              id="elevationMax"
              label="Max Elevation"
              defaultValue={scanData.elevationMax}
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />
            <TextField
              required
              id="elevationMin"
              label="Min Elevation"
              defaultValue={scanData.elevationMin}
              className={""}
              margin="normal"
              onChange={handleInputChange}
            />
            <Button variant="contained" onClick={handleModalClose}>
              Cancel
            </Button>
            <Button variant="contained" onClick={saveScan}>
              Submit
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default EditScan;
