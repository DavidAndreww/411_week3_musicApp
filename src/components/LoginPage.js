import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const LoginPage = ({ onLoginChange }) => {
  return (
    <form className="login-page" onSubmit={() => onLoginChange()}>
      <TextField variant="outlined" label="Username:" />
      <br />
      <br />
      <TextField variant="outlined" label="Password" />
      <br />
      <Button color="primary" variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};

export default LoginPage;
