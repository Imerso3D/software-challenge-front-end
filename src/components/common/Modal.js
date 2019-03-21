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
import { editScan, editUser } from "../../assets/data/actions/actions";

class SimpleDialog extends React.Component {
  state={formerScan:this.props.materialType,currentScan:this.props.materialType,formerUser: this.props.username, currentUser:this.props.username};

  handleClose = () => {
    const {onClose, selectedValue} = this.props;
    onClose(selectedValue);
  };

  handleMaterialType = e => {
    const v = e.target.value;
    if(e==='')
      this.setState({currentScan: this.state.currentScan});
    else
      this.setState({currentScan: v});
  };

  handleUserName = e => {
    const v = e.target.value;
    if(e==='')
      this.setState({currentUser: this.state.currentUser});
    else
      this.setState({currentUser: v});
  };

  handleSaveChanges = e => {
    const {currentScan, currentUser} = this.state;
    const {scansList, usersList, eid, uid, elevationMax, elevationMin, materialType, username, editNewScan, editNewUser} = this.props;
    const newScanList = scansList;
    const newUserList = usersList;

    const oldScan ={
      name: materialType,
      elevationMax,
      elevationMin,
      scannedByUserId: uid
    };
    const oldUser={
      id:uid,
      name:username
    };

    let newScan = oldScan;
    let newUser = oldUser;

    const scanIndex = eid;
    const userIndex = uid;

    if(currentScan !== materialType)
    {
      newScan = {...oldScan, name:currentScan};
      newScanList[scanIndex] = newScan;
      editNewScan(newScanList);
    }
    if(currentUser !== username)
    {
      newUser = {...oldUser, name: currentUser};
      newUserList[userIndex] = newUser;
      editNewUser(newUserList);
    }

    this.handleClose();
  };

  render() {
    const {materialType, username, ...other } = this.props;
    return (
      <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" {...other}>
        <DialogTitle id="simple-dialog-title">Edit Scan or User's name</DialogTitle>
        <div>
          <List>
            <ListItem button>
              <TextField
                id="materialTypeId"
                label="Scan name"
                defaultValue={materialType}
                margin="normal"
                onChange={this.handleMaterialType}
              />
              <TextField
                id="usernameId"
                label="User name"
                defaultValue={username}
                margin="normal"
                onChange={this.handleUserName}
              />
            </ListItem>
            <Button variant="contained" onClick={this.handleSaveChanges} style={{'marginLeft':'30%'}}>
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
    editNewScan: (v) => dispatch(editScan(v)),
    editNewUser: (v) => dispatch(editUser(v))
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
    const {open, selectedValue} = this.state;
    const {materialType, username, elevationMax, elevationMin, uid,eid} = this.props;
    return (
      <div>
        <a variant="outlined" color="primary" onClick={this.handleClickOpen}><EditIcon /></a>
        <SimpleDialogWrapped
          selectedValue={selectedValue}
          open={open}
          onClose={this.handleClose}
          materialType={materialType}
          username={username}
          elevationMax={elevationMax}
          elevationMin={elevationMin}
          uid={uid}
          eid={eid}
        />
      </div>
    );
  }
}

export default ScanModal;