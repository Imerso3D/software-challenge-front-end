import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import SaveIcon from '@material-ui/icons/Save';
import blue from '@material-ui/core/colors/blue';
import { EditIcon } from "../../assets/image/Icons";
import { addScan, addUser } from "../../assets/data/actions/actions";

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
};

class SimpleDialog extends React.Component {
  handleClose = () => {
    this.props.onClose(this.props.selectedValue);
  };

  handleListItemClick = value => {
    this.props.onClose(value);
  };

  handleMaterialType = e => {
    console.log('Event value: ', e.target.value);
  };

  handleSaveChanges = e => {
    console.log('Event value: ', e.target.value);
    this.props.addNewScan({
      name: 'Villa',
      elevationMax: 3.3,
      elevationMin: 0.05,
      scannedByUserId: 0,
    })
  };

  render() {
    const {materialType, username, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Edit Scan</DialogTitle>
        <div>
          <List>
              <ListItem button >
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
            <ListItem button onClick={() => this.handleSaveChanges}>
                  <SaveIcon />
              <ListItemText primary="Save" />
            </ListItem>
          </List>
        </div>
      </Dialog>
    );
  }
}

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
    console.log('Props from Redux: ', this.props.users);
    return (
      <div>
        <a variant="outlined" color="primary" onClick={this.handleClickOpen}><EditIcon/></a>
        <SimpleDialog
          selectedValue={this.state.selectedValue}
          open={this.state.open}
          onClose={this.handleClose}
          materialType={this.props.materialType}
          username={this.props.username}
          addNewScan={this.props.addNewScan}
        />
      </div>
    );
  }
}

const mapDispatchToProps =dispatch=>
  ({
    addNewScan: (v) => dispatch(addScan(v)),
    addNewUser: (v) => dispatch(addUser(v))
  });

export default connect(mapDispatchToProps)(ScanModal);