import React, {useState} from 'react';
import Card from "@material-ui/core/es/Card/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import './ScanEdit.css';
import Input from "@material-ui/core/es/Input/Input";
import TextField from "@material-ui/core/es/TextField/TextField";
import MenuItem from '@material-ui/core/es/MenuItem';

function ScanEdit({scan, users, addFunction}) {

    const onSave = () => {
        addFunction()
    };

    const [name, setName] = useState(scan.name);
    const [elevationMax, setElevationMax] = useState(scan.elevationMax);
    const [elevationMin, setElevationMin] = useState(scan.elevationMin);
    const [userId, setUserId] = useState(scan.userId);

    const findUserNameForId = (id) => {
        users.find(u => u.id === id);
    };

    return (
        <Card className="EditBody">
            <CardContent>
                <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                    type="text"
                    name="name"
                    required
                />
                <br/>
                <Input
                    value={elevationMax}
                    onChange={e => setElevationMax(e.target.value)}
                    placeholder="Elevation Max"
                    type="number"
                    name="elevationMax"
                    required
                />
                <br/>
                <Input
                    value={elevationMin}
                    onChange={e => setElevationMin(e.target.value)}
                    placeholder="Elevation Min"
                    type="number"
                    name="elevationMin"
                    required
                />
                <br/>
                <TextField
                    select
                    value={userId}
                    onChange={e => setUserId(e.target.value)}
                    placeholder="User"
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
        </Card>
    )
}

export default ScanEdit;