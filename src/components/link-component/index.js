import * as React from 'react';
import { PropTypes } from "prop-types";
import { Link } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';

const LinkComponent = (props) => {
  
  return (
    <ThemeProvider theme={muiTheme}>
    <Link {...props}>{props.children}</Link>
    </ThemeProvider>
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
    variant: 'body1',
    href:'',
};


export default LinkComponent;
