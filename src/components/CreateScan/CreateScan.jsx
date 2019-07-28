import React from "react";
import TextField from "@material-ui/core/TextField";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

const CreateScan = ({
  open,
  createScan,
  handleInputChange,
  handleModalClose,
  handleModalOpen
}) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={open ? handleModalClose : handleModalOpen}
      >
        Create Scan
      </Button>
      <Modal open={open} onClose={handleModalClose}>
        <form className={""} noValidate autoComplete="off">
          <TextField
            required
            id="name"
            label="Name (of Scan)"
            placeholder="Scan Title"
            className={""}
            margin="normal"
            onChange={handleInputChange}
          />

          <TextField
            required
            id="scannedByUserId"
            label="User Name"
            className={""}
            margin="normal"
            onChange={handleInputChange}
          />

          <TextField
            required
            id="elevationMax"
            label="Max Elevation"
            placeholder="8,848 m"
            className={""}
            margin="normal"
            onChange={handleInputChange}
          />
          <TextField
            required
            id="elevationMin"
            label="Min Elevation"
            placeholder="-10,994 m"
            className={""}
            margin="normal"
            onChange={handleInputChange}
          />
          <Button variant="contained" onClick={createScan}>
            Create
          </Button>
        </form>
      </Modal>
    </div>
  );
};

export default CreateScan;
