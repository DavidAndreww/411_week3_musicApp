import React from "react";
import { Button } from "@material-ui/core";

const LoginPage = ({ onLoginChange }) => {
  return (
    <form className="login-page" onSubmit={() => onLoginChange()}>
      <label>Username:</label>
      <br />
      <input name="userName" />
      <br />
      <label>Password:</label>
      <br />
      <input name="password" />
      <br />
      <Button color="primary" variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
