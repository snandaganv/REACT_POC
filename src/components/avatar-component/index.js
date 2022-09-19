import * as React from 'react';
import { PropTypes } from "prop-types";
import { Avatar } from "@mui/material";

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';

const AvatarComponent = (props) => {

  const { type, src, avatarText,width,height,variant } = props;

  function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

  const stringAvatar = (name) =>{
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: (name.indexOf(' ') === -1) ? name[0] : `${name.split(' ')[0][0]}${name.split(' ')[1][0] || ''}`,
    };
  }

  return (
    <>
    {type === 'text' ?
    <ThemeProvider theme={muiTheme}>
      <Avatar {...stringAvatar(avatarText)}></Avatar>
      </ThemeProvider>
      :
      <ThemeProvider theme={muiTheme}>
      <Avatar src={src} sx={{ width: width, height: height }} variant={variant}></Avatar>
      </ThemeProvider>
    }
    </>
  );
}

AvatarComponent.prototype = {
  avatarText: PropTypes.string,
  type: PropTypes.string,
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

AvatarComponent.defaultProps = {
  avatarText : '',
  type : 'text',
  src : '',
  width:24,
  height:24
};


export default AvatarComponent;