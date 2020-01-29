import React from "react";
import Card from "./Card";
import Notifications from "./Notifications";

class Dashboard extends React.Component {
  state = {
    isOnline: true,
    notifications: [],
    volumeLevel: 30,
    soundQuality: 'normal'
  }

  handleOnlineChange = () =>{
    this.setState({ isOnline: !this.state.isOnline })
    if(this.state.isOnline === false){
      let notifications = this.state.notifications
      this.setState({ notifications: [...notifications, 'Your application is offline.'] })
    }
  }

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
            handler={this.handleOnlineChange}
          />
          <Card
            title={volumeCardTitle}
            content={volumeCardContent}
            type="slider"
          />
          <Card
            title={soundCardTitle}
            content={soundCardContent}
            type="select"
          />
        </div>
        <Notifications />
      </div>
    );
  }
}

export default Dashboard;
