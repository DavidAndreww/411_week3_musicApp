import React from "react";
import Card from "./Card";
import Notifications from "./Notifications";

class Dashboard extends React.Component {
  state = {
    notifications: [],
  };

  handleCardActionChange = (message) => {
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
          <Card
            title={onlineCardTitle}
            content={onlineCardContent}
            type="switch"
            handler={this.handleCardActionChange}
          />
          <Card
            title={volumeCardTitle}
            content={volumeCardContent}
            type="slider"
            handler={this.handleCardActionChangeitit}
          />
          <Card
            title={soundCardTitle}
            content={soundCardContent}
            type="select"
            handler={this.handleCardActionChange}
          />
        </div>
        <Notifications alerts={this.state.notifications} />
      </div>
    );
  }
}

export default Dashboard;
