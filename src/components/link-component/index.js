import * as React from 'react';
import { PropTypes } from "prop-types";
import { Link } from "@mui/material";

const LinkComponent = (props) => {
  
  return (
    <Link {...props}>{props.children}</Link>
  );
}

LinkComponent.prototype = {
    children: PropTypes.node,
    color: PropTypes.string,
    underline:PropTypes.string,
    variant: PropTypes.string,
    href:PropTypes.string,
}

LinkComponent.defaultProps = {
    children: [],
    color: '',
    underline: '',
    variant: '',
    href:'',
};


export default LinkComponent;
