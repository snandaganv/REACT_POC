import * as React from 'react';
import { PropTypes } from "prop-types";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';



const SliderComponent = (props) => {
  const {disabled,defaultValue,size,step,min,max,valueLabelDisplay,marks,range,rangeValue,track,orientation} = props;
  const [value, setValue] = React.useState(range ? rangeValue:defaultValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <ThemeProvider theme={muiTheme}>
                  <Box height={300}>

      <Slider disabled={disabled} value={value} defaultValue={defaultValue} orientation={orientation} onChange={handleChange} size={size}
        valueLabelDisplay={valueLabelDisplay} step={step} marks={marks} min={min} max={max} track={track}
      >

      </Slider>
      </Box>
    
    </ThemeProvider>
  );
}

SliderComponent.prototype = {
    
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
  disableSwap:PropTypes.bool,
  max:PropTypes.number,
  min:PropTypes.number,
  name:PropTypes.string,
  orientation: PropTypes.string,
  size:PropTypes.string,
  step: PropTypes.number,
  valueLabelDisplay: PropTypes.string,
  marks:PropTypes.bool,
  range: PropTypes.bool,
  rangeValue: PropTypes.array,
  track:PropTypes.string,

};

SliderComponent.defaultProps = {
    
  defaultValue: 15,
  disabled: false,
  disableSwap:false,
  max:100,
  min:10,
  name:'test',
  orientation: 'horizontal',
  size:'medium',
  step: 5,
  valueLabelDisplay: 'auto',
  marks: true,
  range: false,
  rangeValue: [10,20],
  track:'normal'
};


export default SliderComponent;
