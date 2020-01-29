import React from "react";
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

class App extends React.Component {
  state = {
    loggedIn: true
  };

  onLoginChange = () => {
    this.setState({ loggedIn: !this.state.loggedIn });
  };

  render() {
    return (
      <div className="main">
        <NavBar
          onLoginChange={this.onLoginChange}
          loggedInState={this.state.loggedIn}
        />
        {this.state.loggedIn ? (
          <Dashboard />
        ) : (
          <LoginPage onLoginChange={this.onLoginChange} />
        )}
      </div>
    );
  }
}

export default App;
