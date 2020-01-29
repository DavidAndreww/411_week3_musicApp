import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel'

const CardSelect = ({ handler }) => {
  return (
    <FormControl className="select">
        <InputLabel id="demo-simple-select-label">Quality</InputLabel>
        <Select id="soundQuality" onChange={handler}>
          <MenuItem value='low'>Low</MenuItem>
          <MenuItem value='normal'>Normal</MenuItem>
          <MenuItem value='high'>High</MenuItem>
        </Select>
      </FormControl>
  );
};

export default CardSelect;
