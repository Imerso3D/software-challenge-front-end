import React from "react";
import PropTypes from 'prop-types';
import {Modal, Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'


const AddItemModal = ({scan, onItemChange, onSubmit, ...rest}) => {

    return (
        <Modal {...rest} bsSize="large">
            <Modal.Header closeButton>
                <Modal.Title>Add new scan</Modal.Title>
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
                            onChange={onItemChange()}
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
                            onChange={onItemChange()}
                        />
                    </Form.Group>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            Maximum elevation
                        </Form.Label>
                        <input
                            className="form-control"
                            type="text"
                            value={scan.elevationMax}
                            pattern={"[\\d{1,4}.\\d{1,3}]{1,7}"}
                            name="elevationMax"
                            onChange={onItemChange()}
                        />
                    </Form.Group>
                    <Form.Group className="col-xs-6 form-group">
                        <Form.Label className="control-label">
                            Minimum elevation
                        </Form.Label>
                        <input
                            className="form-control"
                            type="text"
                            value={scan.elevationMin}
                            pattern={"[\\d{1,4}*.*\\d{1,3}]{1,7}"}
                            name="elevationMin"
                            onChange={onItemChange()}
                        />
                    </Form.Group>
                    <Button disabled={!scan.name || !scan.userName || !scan.elevationMax || !scan.elevationMin} variant="primary" onClick={onSubmit}>Save changes</Button>
                </Form>
            </Modal.Body>

            <Modal.Footer/>
        </Modal>
    );
};
AddItemModal.propTypes = {
    onSubmit: PropTypes.func,
    onItemChange: PropTypes.func,
    scan: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        userName: PropTypes.string,
        elevationMax: PropTypes.number,
        elevationMin: PropTypes.number,
    }))
};
export default AddItemModal;
