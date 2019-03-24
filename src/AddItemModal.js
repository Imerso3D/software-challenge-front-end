import React from "react";
import {Modal, Button} from "react-bootstrap";

const AddItemModal = ({scan, onItemChange, onSubmit, ...rest}) => {

    console.log('scan:',scan);

    return (
        <Modal {...rest} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>Add new scan</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    value={scan.name}
                    name="name"
                    onChange={onItemChange}
                />
                <input
                    type="text"
                    value={scan.userName}
                    name="userName"
                    onChange={onItemChange}
                />
                <input
                    type="text"
                    value={scan.elevationMax}
                    pattern={"[\\d{1,4}.\\d{1,3}]{1,7}"}
                    name="elevationMax"
                    onChange={onItemChange}
                />
                <input
                    type="text"
                    value={scan.elevationMin}
                    pattern={"[\\d{1,4}*.*\\d{1,3}]{1,7}"}
                    name="elevationMin"
                    onChange={onItemChange}
                />

            </Modal.Body>
            <Button variant="secondary">Close</Button>
            <Button variant="primary" onClick={onSubmit}>Save changes</Button>
            <Modal.Footer/>
        </Modal>
    );
};

export default AddItemModal;
