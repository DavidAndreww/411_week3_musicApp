import React from "react";
import { Button } from "@material-ui/core";

const LoginPage = () => {
  return (
      <form className="login-page">
      <label>Username:</label>
      <br />
      <input name="userName" />
      <br />
      <label>Password:</label>
      <br />
      <input name="password" />
      <br />
      <Button color="primary" variant="contained">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
