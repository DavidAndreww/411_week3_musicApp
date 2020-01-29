import React from "react";
import CardSwitch from './CardSwitch'
import CardSlider from './CardSlider'

const CardActions = ({ type }) => {
  switch (type) {
    case "switch":
      return <CardSwitch />;
    case "slider":
       return <CardSlider />;
    default:
      return null;
  }
};

export default CardActions;