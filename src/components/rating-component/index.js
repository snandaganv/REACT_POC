import * as React from 'react';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { any, PropTypes } from "prop-types";
import { Rating } from "@mui/material";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import variable from '../../assets/styles/variables.scss'



const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function getprimaryorsecondaryratingcolor(color) {
    if(color==='primary')
    {
    return {
        "& .MuiRating-iconFilled": {
            color:  variable.primaryMain
      },
      '& .MuiRating-iconHover': {
        color:  variable.primaryMain
      }
    };
    }
    else if(color==='secondary')
    {
        return {
            "& .MuiRating-iconFilled": {
              color:  variable.secondaryPrimary
          },
          '& .MuiRating-iconHover': {
            color:  variable.secondaryPrimary
          }
        };
    }
}

function getcustomratingcolor(iconColor,iconHoverColor) {
    if(iconColor!==null && iconHoverColor!==null && iconColor!=='' && iconHoverColor!==''  )
    {
    return {
        "& .MuiRating-iconFilled": {
        color:  iconColor
      },
      '& .MuiRating-iconHover': {
        color: iconHoverColor,
      }
    };
}
else
{
    return null
}
  }


  const RatingComponent = (props) => {
    const {precision,size,name,defaultValue,disabled,readOnly,hoverFeedback,max,labels,icon,emptyIcon,color} = props;
    const [value, setNewvalue] =  React.useState(defaultValue);
  
    const [hover, setHover] = React.useState(-1);
    
    //Below Line if allowing cutom user colors, currently below line is commented as we are not allowing custom colors
    //Only primary or secondary colors are available
   //const customiconstyle=getcustomratingcolor(ratingColor,ratingHoverColor);
    const customiconstyle=getprimaryorsecondaryratingcolor(color);
    return (
      <ThemeProvider theme={muiTheme}>
         <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
    
      <Rating
      size={size}
        name={name}
        value={value}
        precision={precision}
        getLabelText={getLabelText}
        disabled={disabled}
        readOnly={readOnly}
        max={max}
        onChange={(event, newvalue) => {
            setNewvalue(newvalue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={emptyIcon}

        sx={icon && customiconstyle}

        icon={icon}

      />
      {value !== null && hoverFeedback && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
      </ThemeProvider>
    );
  }


  RatingComponent.prototype = {
    hoverFeedback:PropTypes.bool,
    precision: PropTypes.number,
    defaultValue:PropTypes.number,
    size:PropTypes.oneOf(["small", "medium", "large"]),
    name:PropTypes.string,
    disabled:PropTypes.bool,
    readOnly:PropTypes.bool,
    max: PropTypes.number,
    labels:PropTypes.array,
    icon:any,
    emptyIcon:any,
    color: PropTypes.string,
  };
  
  RatingComponent.defaultProps = {
    hoverFeedback:false,
    precision: 0.5,
    defaultValue: 2,
    size: "small",
    name:"no-value",
    disabled:false,
    readOnly:false,
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      },
  icon:<StarIcon  fontSize="inherit" />,
  emptyIcon:<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />,
  color: 'default',
  };
  
 
  export default RatingComponent;
