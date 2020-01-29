import React from "react";
import Paper from "@material-ui/core/Paper";
import CardContent from "./CardContent";
import CardActions from "./CardActions";

const Card = ({title, content, type}) => {
  
  return (
    <Paper className="card" elevation={3}>
      <CardContent title={title} content={content}/>
      <CardActions type={type} />
    </Paper>
  );
};

export default Card;
