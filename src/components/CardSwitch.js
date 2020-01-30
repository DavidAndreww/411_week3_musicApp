import React from "react";
import Switch from "@material-ui/core/Switch";

class CardSwitch extends React.Component {
  state = {
    isOnline: true
  };

  handleOnlineChange = () => {
    let online = !this.state.isOnline;
    this.setState({ isOnline: online });
    if (online === false) {
      this.props.handler("Your application is offline.");
    }
  };

  render() {
    return (
      <Switch color="primary" checked={this.state.isOnline} onChange={() => this.handleOnlineChange()} />
    );
  }
}

export default CardSwitch;
