import * as React from 'react';
import { PropTypes } from "prop-types";
import { TextField } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';

const TextFieldComponent = (props) => {

  const { type, label, fullWidth,autoFocus,size,defaultValue,multiline,
    helperText,
    row,
    color,
    variant,
    error,
    disabled} = props;
  const onChanged =(changed)=> {
    console.log(changed)
  }
  
  return (
    <>
    <ThemeProvider theme={muiTheme}>
      <TextField label={label} fullWidth={fullWidth} type={type} autoFocus={autoFocus} size={size} defaultValue={defaultValue}  helperText={helperText} row={row} color={color} variant ={variant} error={error} disabled={disabled} onChange={onChanged}></TextField>
      </ThemeProvider>
    </>
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
  defaultValue:PropTypes.string
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
  defaultValue:'Please enter name'
};


export default TextFieldComponent;