import React from "react";
import Slider from "@material-ui/core/Slider";

class CardSlider extends React.Component {
  state = {
    volume: 0
  };

  handleSliderChange = value => {
    let volume = value.target.textContent;
    this.setState({ volume });
    if (volume > 80) {
      this.props.handleCardActionChange(
        "Listening to music at high volume could cause long-term hearing loss"
      );
    }
  };

  render() {
    return (
      <Slider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
        onChange={this.handleSliderChange}
        //I'm not sure if this "single source of truth is correct..."
        value={this.valueLabelDisplay}
      />
    );
  }
}

export default CardSlider;
