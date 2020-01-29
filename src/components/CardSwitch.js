import React from "react";
import Switch from "@material-ui/core/Switch";

class CardSwitch extends React.Component {
  state = {
    isOnline: true
  };

  handleOnlineChange = () => {
    this.setState({ isOnline: !this.state.isOnline });
    if (this.state.isOnline === false) {
      this.props.handler("Your application is offline");
    }
  };

  render() {
    return (
      <Switch color="primary" onChange={() => this.handleOnlineChange()} />
    );
  }
}

export default CardSwitch;
