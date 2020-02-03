import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

class CardSelect extends React.Component {
  state= {
    quality: ''
  }
   handleSelectChange = e => {
    let quality = e.target.value;
    if (quality === "low") {
      this.props.handleCardActionChange("Sound quality has been degraded.");
    }
    this.setState({quality})
  };

  render() {
    return (
      <FormControl className="select">
        <InputLabel>Quality</InputLabel>
        <Select id="soundQuality" onChange={this.handleSelectChange}>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    );
  }
};

export default CardSelect;
