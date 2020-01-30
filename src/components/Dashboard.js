import React from "react";
import Notifications from "./Notifications";
import CardSwitch from "./CardSwitch";
import CardSelect from "./CardSelect";
import CardSlider from "./CardSlider";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from '@material-ui/core/Typography'

class Dashboard extends React.Component {
  state = {
    notifications: []
  };

  handleCardActionChange = message => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [...notifications, message]
    });
  };

  render() {
    const onlineCardTitle = "Online Mode";
    const onlineCardContent = "Is this application connected to the internet?";

    const volumeCardTitle = "Master Volume";
    const volumeCardContent =
      "Overrides all other settings in this application.";

    const soundCardTitle = "Sound Quality";
    const soundCardContent =
      "Manually control the music quality in the event of a poor connection.";
    return (
      <div className="dashboard">
        <div className="card-container">
        <Card>
          <CardContent>
            <Typography variant="h4" color="textPrimary">
              Online Mode
            </Typography>
            <Typography>
              Is this application connected to the internet?
            </Typography>
          </CardContent>
          <CardActions>
            <CardSwitch handler={this.handleCardActionChange}/>
          </CardActions>
        </Card>
        <Card>
        <CardContent>
            <Typography variant="h4" color="textPrimary">
              Master Volume
            </Typography>
            <Typography>
              Overrides all other settings in this application.
            </Typography>
          </CardContent>
          <CardActions>
            <CardSlider handler={this.handleCardActionChange}/>
          </CardActions>
        </Card>
        <Card>
        <CardContent>
            <Typography variant="h4" color="textPrimary">
              Sound Quality
            </Typography>
            <Typography>
              Manually control the music quality in the event of a poor conection.
            </Typography>
          </CardContent>
          <CardActions>
            <CardSelect handler={this.handleCardActionChange}/>
          </CardActions>
        </Card>
          
        </div>
        <Notifications alerts={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;


{/* <div className="dashboard">
        <div className="card-container">
          <Card title={onlineCardTitle} content={onlineCardContent}>
            <CardSwitch handler={this.handleCardActionChange} />
          </Card>
          <Card title={volumeCardTitle} content={volumeCardContent}>
            <CardSlider handler={this.handleCardActionChange} />
          </Card>
          <Card title={soundCardTitle} content={soundCardContent}>
            <CardSelect handler={this.handleCardActionChange} />
          </Card>
        </div>
        <Notifications alerts={this.state.notifications} />
      </div> */}
