import * as React from 'react';
import { PropTypes } from "prop-types";
import { Card } from "@mui/material";

const CardComponent = (props) => {
  
  return (
    <Card {...props}>{props.children}</Card>
  );
}

CardComponent.prototype = {
    closeText:PropTypes.string,
    children: PropTypes.node,
    raised: PropTypes.bool,
};

CardComponent.defaultProps = {
    closeText:'',
    children: [],
    raised:false,
};


export default CardComponent;
