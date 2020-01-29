import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const CardSelect = ({ handler }) => {
  const handleSelectChange = e => {
    let quality = e.target.value;
    if (quality === "low") {
      handler('Sound quality has been degraded.');
    }
  };

  return (
    <FormControl className="select">
      <InputLabel id="demo-simple-select-label">Quality</InputLabel>
      <Select id="soundQuality" onChange={handleSelectChange}>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="normal">Normal</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CardSelect;
