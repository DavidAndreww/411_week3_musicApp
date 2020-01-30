import React from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "./CardContent";
import CardSwitch from './CardSwitch'

const Card = ({ title, content, type, handler }) => {
  return (
    <Paper className="card" elevation={3}>
      <CardContent title={title} content={content} />
      <CardSwitch />
    </Paper>
  );
};

export default Card;
