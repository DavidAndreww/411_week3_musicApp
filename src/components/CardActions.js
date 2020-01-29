import React from "react";
import CardSwitch from './CardSwitch'
import CardSlider from './CardSlider'
import CardSelect from './CardSelect'

const CardActions = ({ type, handler }) => {
  switch (type) {
    case "switch":
      return <CardSwitch handler={handler} />;
    case "slider":
       return <CardSlider />;
    case "select":
      return <CardSelect />;
    default:
      return null;
  }
};

export default CardActions;