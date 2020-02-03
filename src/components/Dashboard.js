import React from "react";
import Notifications from "./Notifications";

//custom component imports
import CardSwitch from './CardSwitch';
import CardSlider from './CardSlider'
import CardSelect from "./CardSelect";

//material UI Imports
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class Dashboard extends React.Component {
  state = {
    notifications: [],
    volume: 0
  };
  // handles updated notifications for each card action
  handleCardActionChange = message => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [...notifications, message]
    });
  };
  //handles change for slider component
  handleSliderChange = value => {
    let volume = value.target.textContent;
    this.setState({volume})
    if (volume > 80) {
      this.handleCardActionChange(
        "Listening to music at high volume could cause long-term hearing loss."
      );
    }
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
        <Notifications alerts={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;
