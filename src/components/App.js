import React from "react";
import NavBar from "./NavBar";

class App extends React.Component {
  state = {
    loggedIn: false
  };

  onLoginChange = () => {
   this.setState({loggedIn: !this.state.loggedIn})
  }

  render() {
    return (
      <div>
        <NavBar onLoginChange={this.onLoginChange} title={'Spotify 2.2'}/>
        {this.state.loggedIn ? <p>Dashboard</p> : <p>Login Page</p>}
      </div>
    );
  }
}

export default App;
