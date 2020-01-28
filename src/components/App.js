import React from "react";
import NavBar from "./NavBar";
import LoginPage from './LoginPage'

class App extends React.Component {
  state = {
    loggedIn: false
  };

  onLoginChange = () => {
   this.setState({ loggedIn: !this.state.loggedIn })
  }

  render() {
    return (
      <div>
        <NavBar onLoginChange={this.onLoginChange} loggedInState={this.state.loggedIn}/>
        {this.state.loggedIn ? <p>Dashboard</p> : <p>Login Page</p>}
      </div>
    );
  }
}

export default App;
