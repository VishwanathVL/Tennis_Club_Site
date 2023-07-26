import React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const ErrorHandler = ({error}) => {
  return (<>
    {error === 403 ?
      <Alert severity="info">User not in registered users list</Alert>
      : error === "Network Error" ? <Alert severity="error">
      <AlertTitle>Internal Server Error </AlertTitle>
    </Alert> :
    <Alert severity="error">
      <AlertTitle>Error: </AlertTitle>
      {error}
    </Alert>
  }
  </>
  );
  
};

export default ErrorHandler;
