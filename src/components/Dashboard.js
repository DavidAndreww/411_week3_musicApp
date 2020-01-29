import React from "react";
import Card from "./Card";

class Dashboard extends React.Component {
  render() {
    const onlineCardTitle = "Online Mode";
    const onlineCardContent = "Is this application connected to the internet?";

    const volumeCardTitle = "Master Volume";
    const volumeCardContent =
      "Overrides all other settings in this application.";

    const soundCardTitle = "Sound Quality";
    const soundCardContent =
      "Manually control the music quality in event of poor connection.";
    return (
      <div className="dashboard">
        <Card title={onlineCardTitle} content={onlineCardContent} type='switch'/>
        <Card title={volumeCardTitle} content={volumeCardContent} type='slider'/>
        <Card title={soundCardTitle} content={soundCardContent} />
      </div>
    );
  }
}

export default Dashboard;
