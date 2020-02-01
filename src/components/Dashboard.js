import React from "react";
import Notifications from "./Notifications";

//custom component imports
import CardSelect from "./CardSelect";

//material UI Imports
import Switch from "@material-ui/core/Switch";
import Slider from "@material-ui/core/Slider";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

class Dashboard extends React.Component {
  state = {
    notifications: [],
    isOnline: true,
    volume: 0
  };
  // handles updated notifications for each card action
  handleCardActionChange = message => {
    let notifications = this.state.notifications;
    this.setState({
      notifications: [...notifications, message]
    });
  };
  // handles changes for switch component
  handleOnlineChange = () => {
    let isOnline = !this.state.isOnline;
    this.setState({ isOnline });
    if (isOnline === false) {
      this.handleCardActionChange("Your application is offline.");
    }
  };
  //handles change for slider component
  handleSliderChange = value => {
    this.setState((prevState) => {
      let volume = value.target.textContent;
      volume > 80 && prevState >80 ? console.log()
    })
    console.log(value);
    // if (volume > 80) {
    //   this.handleCardActionChange(
    //     "Listening to music at high volume could cause long-term hearing loss."
    //   );
    // }
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
              <Switch
                color="primary"
                checked={this.state.isOnline}
                onChange={this.handleOnlineChange}
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
              <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100}
                onChange={this.handleSliderChange}
                // value={this.state.volume}
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
