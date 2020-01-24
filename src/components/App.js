import React from 'react';
import NavBar from './NavBar'

class App extends React.Component {
  state = {
    loggedIn: false,
    online: false,
    notifications: ''
  }
  render () {
    return (
      <NavBar />
    )
  }
}

export default App;
