import React from "react";

//custom component imports
import CardSwitch from './CardSwitch';
import CardSlider from './CardSlider'
import CardSelect from "./CardSelect";
import Notifications from "./Notifications";

//material UI Imports
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class Dashboard extends React.Component {
  state = {
    notifications: [],
  };

  // handles updated notifications for each card action
  handleCardActionChange = message => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [message, ...notifications]
    });
  };

  render() {
    return (
      <div className="dashboard">
        <div className="card-container">
          <Card className="card">
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                Online Mode
              </Typography>
              <Typography>
                Is this application connected to the internet?
              </Typography>
            </CardContent>
            <CardActions>
              <CardSwitch
                handleCardActionChange={this.handleCardActionChange}
              />
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                Master Volume
              </Typography>
              <Typography>
                Overrides all other volume settings in this application.
              </Typography>
            </CardContent>
            <CardActions>
              <CardSlider
                handleCardActionChange={this.handleCardActionChange}
              />
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent>
              <Typography variant="h4" color="textPrimary">
                Sound Quality
              </Typography>
              <Typography>
                Manually control the music quality in the event of a poor
                conection.
              </Typography>
            </CardContent>
            <CardActions>
              <CardSelect
                handleCardActionChange={this.handleCardActionChange}
              />
            </CardActions>
          </Card>
        </div>
        <Notifications notifications={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;
