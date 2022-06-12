import React from "react";

// reactstrap components
import { Alert } from "reactstrap";

// Core Components


const Alertify= ({val}:any)=> {
  return (
    <>
    <h1>namste</h1>
    {
        val===1?<Alert color="success">
        <strong>Success!</strong> This is a success alert—check it out!
      </Alert>
      :
      <Alert color="danger">
      <strong>Danger!</strong> This is a danger alert—check it out!
        </Alert>
    } 
    </>
  );
}

export default Alertify;