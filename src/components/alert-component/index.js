import * as React from 'react';
import { PropTypes } from "prop-types";
import { Alert } from "@mui/material";

const AlertComponent = (props) => {

  //const { closeText} = props;
  
  return (
    <>
      <Alert {...props}></Alert>
    </>
  );
}

AlertComponent.prototype = {
    closeText:PropTypes.string,
};

AlertComponent.defaultProps = {
    closeText:'',
};


export default AlertComponent;
