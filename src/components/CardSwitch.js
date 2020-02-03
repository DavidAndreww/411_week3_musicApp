import React from "react";
import Switch from "@material-ui/core/Switch";

class CardSwitch extends React.Component {
  state = {
    isOnline: true
  };
  
  // sets isOnline to its opposite, and if false, runs handleCardActionChange to display message in Dashboard
  handleOnlineChange = () => {
    let isOnline = !this.state.isOnline;
    this.setState({ isOnline });
    if (isOnline === false) {
      this.props.handleCardActionChange("Your application is offline");
    }
  };

  render() {
    return (
      <Switch
        color="primary"
        checked={this.state.isOnline}
        onChange={this.handleOnlineChange}
      />
    );
  }
}

export default CardSwitch;
