import React from 'react';
import {connect} from 'react-redux';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';
import { EditIcon } from "../../assets/image/Icons";
import { addScan, addUser } from "../../assets/data/actions/actions";

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleMaterialType = e => {
    console.log('Event value: ', e.target.value);
  };

  handleSaveChanges = e => {
    console.log('Event value: ', e.target.value);

    const newChangedScan = {
      name: 'Sample',
      elevationMax: 0.1,
      elevationMin: 9.0,
      scannedByUserId: 2,
    };
    this.props.addNewScan(newChangedScan)
  };

  render() {
    console.log('Props from Redux: ', this.props.usersList);
    const {materialType, username, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Edit Scan</DialogTitle>
        <div>
          <List>
            <ListItem button>
              <TextField
                id="materialTypeId"
                label="Material"
                defaultValue={materialType}
                margin="normal"
                onChange={this.handleMaterialType}
              />
              <TextField
                id="usernameId"
                label="User"
                defaultValue={username}
                margin="normal"
                onChange={this.handleMaterialType}
              />
            </ListItem>
            <Button variant="contained" onClick={this.handleSaveChanges}>
              <SaveIcon />
              <ListItemText primary="Save" />
            </Button>
          </List>
        </div>
      </Dialog>
    );
  }
}


const mapDispatchToProps =dispatch=>
  ({
    addNewScan: (v) => dispatch(addScan(v)),
    addNewUser: (v) => dispatch(addUser(v))
  });
const mapStateToProps=state=>
  ({
    scansList: state.allScans,
    usersList: state.allUsers,
  });

const SimpleDialogWrapped =  connect(mapStateToProps, mapDispatchToProps)(SimpleDialog);

class ScanModal extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {

    return (
      <div>
        <a variant="outlined" color="primary" onClick={this.handleClickOpen}><EditIcon /></a>
        <SimpleDialogWrapped
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          materialType={this.props.materialType}
          username={this.props.username}
        />
      </div>
    );
  }
}

export default ScanModal;