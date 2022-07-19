import * as React from 'react';
import { PropTypes } from "prop-types";
import { Icon } from "@mui/material";
import Home from "@mui/icons-material/Home";

const IconComponent = (props) => {

  //const { closeText} = props;
  
  return (
    <>
      <Icon {...props}>
            <Home></Home>
      </Icon>

    </>
  );
}

IconComponent.prototype = {
    
};

IconComponent.defaultProps = {
    
};


export default IconComponent;