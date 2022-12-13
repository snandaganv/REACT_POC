import * as React from 'react';
import { PropTypes } from "prop-types";
import { Icon } from "@mui/material";
import Home from "@mui/icons-material/Home";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';

const IconComponent = (props) => {

  //const { closeText} = props;
  
  return (
    <>
    <ThemeProvider theme={muiTheme}>
      <Icon {...props}>
            <Home></Home>
      </Icon>
      </ThemeProvider>

    </>
  );
}

IconComponent.prototype = {
    
};

IconComponent.defaultProps = {
    
};


export default IconComponent;