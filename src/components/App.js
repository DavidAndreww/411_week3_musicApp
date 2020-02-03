import React from "react";

//Import custom components
import NavBar from "./NavBar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  // Changes loggedIn state from true to false when login button in NavBar component is clicked
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
