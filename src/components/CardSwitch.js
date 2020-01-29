import React from "react";
import Switch from "@material-ui/core/Switch";

const CardSwitch = ({ handler }) => {
  return (
    <Switch color="primary" onChange={() => handler()}/>
  );
};

export default CardSwitch;
