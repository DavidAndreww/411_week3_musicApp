import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

class CardSelect extends React.Component {
  state = {
    value: ""
  };

  // if select value is set to low, runs handleCardActionChange to display message in Dashboard
  handleSelectChange = e => {
    let quality = e.target.value;
    this.setState({ value: quality });
    if (quality === "low") {
      this.props.handleCardActionChange("Sound quality has been degraded.");
    }
  };

  render() {
    return (
      <FormControl className="select">
        <InputLabel>Sound Quality</InputLabel>
        <Select
          value={this.state.value}
          id="soundQuality"
          onChange={this.handleSelectChange}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="normal">Normal</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default CardSelect;
