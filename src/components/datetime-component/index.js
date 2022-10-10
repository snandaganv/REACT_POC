import React,{useState} from 'react';
import { PropTypes } from "prop-types";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker,DateTimePicker,TimePicker,CalendarPicker} from '@mui/x-date-pickers';
import { DateRangePicker} from '@mui/x-date-pickers-pro';
import dayjs from 'dayjs';

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import Box from "@mui/material/Box";
import "./index.scss";


const DateTimeComponent = (props) => {
  const {disabled,disableFuture,openTo,disableHighlightToday,disableMaskedInput,disableOpenPicker,disablePast,maxDate,minDate,
    label,variant,orientation,open,readOnly,views,ampm,ampmInClock,disableIgnoringDatePartForTimeValidation,
    minTime,maxTime,minutesStep,calendarr} = props;
  const [value,setValue]= useState(null);
  const [valueRange,setValueRange]= useState([null,null]);
  return (
    <>
     <ThemeProvider theme={muiTheme}>
     {
      variant === 'timeonly' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     <TimePicker
     ampm={ampm}
     ampmInClock= {ampmInClock}
     disabled={disabled}
     minTime={minTime}
    maxTime= {maxTime}
     disableMaskedInput={disableMaskedInput}
     disableOpenPicker={disableOpenPicker}
     disableIgnoringDatePartForTimeValidation={disableIgnoringDatePartForTimeValidation}
    label={label}
    openTo={openTo}
    value={value}
    readOnly={readOnly}
    minutesStep={minutesStep}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
  </LocalizationProvider>
      )
    }
    {
      variant === 'dateonly' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker
     disabled={disabled} disableFuture={disableFuture} disableOpenPicker={disableOpenPicker}
     disableHighlightToday={disableHighlightToday} orientation={orientation}
     disableMaskedInput={disableMaskedInput} readOnly={readOnly}
     disablePast={disablePast} maxDate={maxDate} minDate={minDate}  views={views}
    label={label}
    openTo={openTo}
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
  </LocalizationProvider>
      )
    } 
    {
      variant === 'calendar' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateRangePicker
     calendars={calendarr}
          value={valueRange}
          onChange={(newValue) => {
            setValueRange(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
  </LocalizationProvider>
      )
    } 

    {
      variant === 'datetime' && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DateTimePicker
     disabled={disabled} disableFuture={disableFuture} disableOpenPicker={disableOpenPicker}
     disableHighlightToday={disableHighlightToday}
     disableMaskedInput={disableMaskedInput} readOnly={readOnly}
     disablePast={disablePast} maxDate={maxDate} minDate={minDate}

     renderInput={(props) => <TextField {...props} />}
     label={label}
     openTo={openTo}
     value={value}
     onChange={(newValue) => {
       setValue(newValue);
     }}
  />
  </LocalizationProvider>
      )
    }
    </ThemeProvider>

    </>
  );
}

DateTimeComponent.prototype = {
  disabled: PropTypes.bool,
  disableFuture: PropTypes.bool,
  disableHighlightToday: PropTypes.bool,
  disableMaskedInput: PropTypes.bool,
  disableOpenPicker: PropTypes.bool,
  disablePast: PropTypes.bool,
  maxDate: PropTypes.string,
  minDate: PropTypes.string,
  open: PropTypes.bool,
  orientation: PropTypes.string,
  openTo: PropTypes.string,
  readOnly: PropTypes.bool,
  views: PropTypes.array,
  label:PropTypes.string,
  variant: PropTypes.string,
  ampm: PropTypes.bool,
  ampmInClock: PropTypes.bool,
  disableIgnoringDatePartForTimeValidation	: PropTypes.bool,
  minTime: PropTypes.string,
  maxTime: PropTypes.string,
  minutesStep: PropTypes.number,
  calendarr: PropTypes.number,
};

DateTimeComponent.defaultProps = {
  disabled: false,
  disableFuture: false,
  disableHighlightToday: false,
  disableMaskedInput: false,
  disableOpenPicker: false,
  disablePast: false,
  maxDate:dayjs('2034-01-01T00:00:00.000'),
  minDate: dayjs('2020-01-01T00:00:00.000'),
  open: false,
  orientation: 'landscape',
  openTo: 'day',
  readOnly: false,
  views: ['year','day'],
  label:'Basic Exampl',
  variant: 'dateonly',
  ampm: false,
  ampmInClock: false,
  disableIgnoringDatePartForTimeValidation: false,
  minTime:'',
  maxTime:'',
  minutesStep: 1,
  calendarr: 1,
};


export default DateTimeComponent;
