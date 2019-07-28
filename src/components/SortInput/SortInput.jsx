import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import { getThemeColors } from "utils/color";

const colors = getThemeColors();
const useStyles = makeStyles(theme => ({
  button: {
    color: colors[1],
    marginTop: theme.spacing(2)
  },
  formControl: {
    color: colors[0],
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function ControlledOpenSelect({ handleSort }) {
  const classes = useStyles();
  const [sort, setSort] = React.useState("");
  const [open, setOpen] = React.useState(false);

  function handleChange(event) {
    setSort(event.target.value);
    handleSort(event.target.value);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <form autoComplete="off">
      <Button className={classes.button} onClick={handleOpen}>
        Sort:
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="demo-controlled-open-select">
          Sort By...
        </InputLabel>
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={sort}
          onChange={handleChange}
          inputProps={{
            name: "",
            id: "demo-controlled-open-select"
          }}
        >
          <MenuItem value={"name"} name={"Name"}>
            Name
          </MenuItem>
          <MenuItem value={"scannedByUserId"} name={"UserName"}>
            UserName
          </MenuItem>
          <MenuItem value={"elevationMax"} name={"Elevation"}>
            Elevation
          </MenuItem>
        </Select>
      </FormControl>
    </form>
  );
}
