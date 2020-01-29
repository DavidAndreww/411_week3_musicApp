import React from "react";
import Card from "./Card";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Dashboard;
