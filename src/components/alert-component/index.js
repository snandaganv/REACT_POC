import * as React from 'react';
import { PropTypes } from "prop-types";
import { Alert ,AlertTitle} from "@mui/material";

const AlertComponent = (props) => {
  const {titleText} = props;
  return (
    <Alert {...props}><AlertTitle>{titleText}</AlertTitle>{props.children}</Alert>
  );
}

AlertComponent.prototype = {
    closeText:PropTypes.string,
    children: PropTypes.node,
    titleText: PropTypes.string,
};

AlertComponent.defaultProps = {
    closeText:'',
    children: [],
    titleText:'',
};


export default AlertComponent;
