import * as React from 'react';
import { PropTypes } from "prop-types";
import { Alert } from "@mui/material";

const AlertComponent = (props) => {
  
  return (
    <Alert {...props}>{props.children}</Alert>
  );
}

AlertComponent.prototype = {
    closeText:PropTypes.string,
    children: PropTypes.node,
};

AlertComponent.defaultProps = {
    closeText:'',
    children: [],
};


export default AlertComponent;
