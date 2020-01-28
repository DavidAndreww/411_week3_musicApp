import React from 'react';
import { Button } from '@material-ui/core';

const LoginPage = () => {

  return (
    <form>
      <label>Username:</label>
      <input name="userName" />
      <label>Password:</label>
      <input name="password" />
      <Button color="primary" variant="contained">Login</Button>
    </form>
  )
}

export default LoginPage;