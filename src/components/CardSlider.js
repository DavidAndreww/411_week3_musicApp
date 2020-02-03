import React from "react";
import Slider from "@material-ui/core/Slider";

class CardSlider extends React.Component {
  state = {
    volume: 0
  };
  
  // if slider value is greater than 80, runs handleCardActionChange to display message in Dashboard
  handleSliderChange = value => {
    let volume = value.target.textContent;
    //I couldn't figure out how to use prevState to only run handleCardActionChange the first time volume goes over 80, instead of alerting at every single onChange event
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
        //I'm not sure if this "single source of truth is accurate..."
        value={this.valueLabelDisplay}
      />
    );
  }
}

export default CardSlider;
