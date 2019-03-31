import React, {useState} from 'react';
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import './ScanEdit.css';
import Input from "@material-ui/core/Input/Input";
import TextField from "@material-ui/core/TextField/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import ScanRowData from './ScanRowData';
import Button from "@material-ui/core/Button/Button";
import CardActions from "@material-ui/core/CardActions/CardActions";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import ScannerIcon from '@material-ui/icons/Scanner';
import IconButton from "@material-ui/core/IconButton/IconButton";

const getIdOrRandomIfNotDefined = (id) => {
    return (id === undefined) ? Math.floor(Math.random() * 100000) : id;
};


function ScanEdit({scan, users, addFunction}) {

    const isDataCorrect = () => {
        return name !== '' && elevationMax !== '' && elevationMin !== '' && userId !== undefined;
    };

    const onSave = () => {
        if (isDataCorrect()) {
            addFunction(new ScanRowData(id, name, elevationMax, elevationMin, userId, findUserNameForId(userId)));
        }
    };

    const id = getIdOrRandomIfNotDefined(scan.id);
    const [name, setName] = useState(scan.name || '');
    const [elevationMax, setElevationMax] = useState(scan.elevationMax || 0);
    const [elevationMin, setElevationMin] = useState(scan.elevationMin || 0);
    const [userId, setUserId] = useState(scan.userId || 0);

    const findUserNameForId = (id) => {
        return users.find(u => u.id === id).name;
    };

    return (
        <Card className="EditBody">
            <CardHeader
                title={
                    <div>
                        <IconButton color="primary" disabled={true}>
                            Edit Scan
                            <ScannerIcon/>
                        </IconButton>
                    </div>
                }
            />
            <CardContent className="CardInputs">
                <TextField
                    className="NameInput"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    label="Name"
                    type="text"
                    name="name"
                    required
                />
                <br/>
                <TextField
                    value={elevationMax}
                    onChange={e => setElevationMax(e.target.value)}
                    label="Elevation Max"
                    type="number"
                    name="elevationMax"
                    required
                />
                <br/>
                <Input
                    value={elevationMin}
                    onChange={e => setElevationMin(e.target.value)}
                    label="Elevation Min"
                    type="number"
                    name="elevationMin"
                    required
                />
                <br/>
                <TextField
                    select
                    className="SelectField"
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    label="User"
                    name="user"
                    required
                >
                    {users.map(user => (
                        <MenuItem key={user.id} value={user.id}>
                            {user.name}
                        </MenuItem>
                    ))}
                </TextField>
            </CardContent>
            <CardActions className="CardActions">
                <Button color="primary" className="SaveButton"
                        onClick={() => onSave()}>
                    Save
                </Button>
            </CardActions>
        </Card>
    )
}

export default ScanEdit;