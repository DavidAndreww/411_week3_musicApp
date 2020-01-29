import React from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "./CardContent";
import CardActions from "./CardActions";

const Card = () => {
  return (
    <Paper className="card" elevation={3}>
      <CardContent />
      <CardActions />
    </Paper>
  );
};

export default Card;
