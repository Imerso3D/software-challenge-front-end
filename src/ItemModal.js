import React from "react";
import {Form, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'


const ItemModal = ({scan, onItemChange, ...rest}) => {

    return (
        <Modal {...rest} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>Edit {scan.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            Scan's name
                        </Form.Label>
                        <input
                            className="form-control"
                            type="text"
                            value={scan.name}
                            name="name"
                            onChange={onItemChange(scan.id)}
                        />
                    </Form.Group>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            User name
                        </Form.Label>
                        <input
                            className="form-control"
                            type="text"
                            value={scan.userName}
                            name="userName"
                            onChange={onItemChange(scan.id)}
                        />
                    </Form.Group>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            Maximum elevation
                        </Form.Label>
                        <input
                            className="form-control"
                            type="number"
                            value={scan.elevationMax}
                            step={0.01}
                            name="elevationMax"
                            onChange={onItemChange(scan.id)}
                        />
                    </Form.Group>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            Minimum elevation
                        </Form.Label>
                        <input
                            className="form-control"
                            type="number"
                            value={scan.elevationMin}
                            step={0.01}
                            name="elevationMin"
                            onChange={onItemChange(scan.id)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer/>
        </Modal>
    );
};

export default ItemModal;
