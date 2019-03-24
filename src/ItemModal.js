import React from "react";
import {Modal} from "react-bootstrap";

const ItemModal = ({scan, onItemChange, ...rest}) => {

    return (
        <Modal {...rest} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>Edit {scan.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <input
                    type="text"
                    value={scan.name}
                    name="name"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="text"
                    value={scan.userName}
                    name="userName"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="text"
                    value={scan.elevationMax}
                    pattern={"[\\d{1,4}.\\d{1,3}]{1,7}"}
                    name="elevationMax"
                    onChange={onItemChange(scan.id)}
                />
                <input
                    type="text"
                    value={scan.elevationMin}
                    pattern={"[\\d{1,4}*.*\\d{1,3}]{1,7}"}
                    name="elevationMin"
                    onChange={onItemChange(scan.id)}
                />

            </Modal.Body>
            <Modal.Footer/>
        </Modal>
    );
};

export default ItemModal;
