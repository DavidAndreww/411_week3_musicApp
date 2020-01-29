import React from "react";
import Card from "./Card";
import CardSwitch from "./CardSwitch";
import CardSlider from './CardSlider';

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
        <Card title={onlineCardTitle} content={onlineCardContent} action={<CardSwitch />}/>
        <Card title={volumeCardTitle} content={volumeCardContent} action={<CardSlider />}/>
        <Card title={soundCardTitle} content={soundCardContent} />
      </div>
    );
  }
}

export default Dashboard;
