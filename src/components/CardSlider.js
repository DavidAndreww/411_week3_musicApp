import React from "react";
import Slider from "@material-ui/core/Slider";

const CardSlider = ({ handler }) => {
  const handleSliderChange = (value) => {
    let volume = value.target.textContent;
    if (volume > 80){
      handler('Listening to music at high volume could cause long-term hearing loss')
    }
  }
  return (
    <Slider
      defaultValue={30}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      marks
      min={0}
      max={100}
      onChange={handleSliderChange}
    />
  );
};

export default CardSlider;
