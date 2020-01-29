import React from "react";
import Slider from "@material-ui/core/Slider";

const CardSlider = () => {
  return (
    <Slider
      defaultValue={30}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      step={10}
      marks
      min={0}
      max={100}
    />
  );
};

export default CardSlider;
