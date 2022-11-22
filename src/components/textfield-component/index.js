import * as React from 'react';
import { PropTypes } from "prop-types";
import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import InputAdornment from '@mui/material/InputAdornment';
import { Icon } from "@mui/material";
import "./index.scss";

const TextFieldComponent = (props) => {

  const { type, label, fullWidth,autoFocus,size,defaultValue,multiline,
    helperText,
    row,
    color,
    variant,
    error,
    disabled,
    icon,
    startIcon,
    endIcon,
  required} = props;
  const [value,setValue]=React.useState(defaultValue);
  const onChanged =(changed)=> {
    console.log(changed);
    setValue(changed.currentTarget.value);
  }
  
  return (
    <ThemeProvider theme={muiTheme}>
      <TextField required={required} value = {value} error={(required && !value) ? true: false} label={label} fullWidth={fullWidth} type={type} autoFocus={autoFocus} size={size} className={size === 'small' ? 'small-class-size':'medium-class-size'} defaultValue={defaultValue}  helperText={helperText} row={row} color={color} variant ={variant}  disabled={disabled}
       onChange={onChanged}
       InputProps={{
        startAdornment: (
          startIcon && <InputAdornment position="start">
            <Icon fontSize="small">{icon}</Icon>
          </InputAdornment>
        ),
        endAdornment: (
         endIcon && <InputAdornment position="end">
            <Icon fontSize="small">{icon}</Icon>
          </InputAdornment>
        ),
      }}></TextField>
      </ThemeProvider>
  );
}

TextFieldComponent.prototype = {
  label:PropTypes.string,
  type:PropTypes.string,
  autoFocus: PropTypes.boolean,
  size:PropTypes.string,
  fullWidth:PropTypes.boolean,
  multiline:PropTypes.boolean,
  helperText:PropTypes.string,
  rows:PropTypes.number,
  color:PropTypes.string,
  variant:PropTypes.string,
  error:PropTypes.boolean,
  disabled:PropTypes.boolean,
  defaultValue:PropTypes.string,
  required: PropTypes.boolean,
  icon: PropTypes.string,
  startIcon: PropTypes.boolean,
  endIcon: PropTypes.boolean
};

TextFieldComponent.defaultProps = {
  label:'',
  type:'text',
  autoFocus: true,
  size:'',
  fullWidth:true,
  multiline:false,
  helperText:'',
  rows:3,
  color:'',
  variant:'',
  error:false,
  disabled:false,
  defaultValue:'Please enter name',
  required: true,
  icon:'account_circle',
  startIcon: true,
  endIcon: false
};


export default TextFieldComponent;