import * as React from 'react';
import { PropTypes } from "prop-types";
import { Alert ,AlertTitle} from "@mui/material";
import Button from '@mui/material/Button';

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';


const AlertComponent = (props) => {
  const {titleText} = props;
  return (
    <>
     <ThemeProvider theme={muiTheme}>
      <Alert {...props}><AlertTitle>{titleText}</AlertTitle>{props.children}</Alert>
    </ThemeProvider>

    </>
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
