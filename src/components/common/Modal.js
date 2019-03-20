import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {EditIcon} from "../../assets/image/Icons";

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
});

class ScanModal extends React.Component {
    render() {
        const { classes } = this.props;
        const {scans, users,elementIndex, materialType } = this.props;
        console.log('open status: ', this.props.open)
        return (
          <div>
              <input type='text' defaultValue={materialType} value={materialType} onClick={this.props.openModal} /><EditIcon />
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={false}
              onClose={this.props.closeModal}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <div>
                  <p value={scans[elementIndex].name}>{scans[elementIndex].name}</p>
                </div>
              </div>
            </Modal>
          </div>
        );
    }
}

const SimpleModalWrapped = withStyles(styles)(ScanModal);

export default SimpleModalWrapped;