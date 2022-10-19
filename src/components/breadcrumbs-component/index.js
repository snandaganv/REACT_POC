import * as React from 'react';
import { PropTypes } from "prop-types";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import { Icon } from "@mui/material";


const BreadcrumbsComponent = (props) => {
  const {linkArray,underline,color,separatorIcon} = props;
  const onClicked =(event)=> {
    console.log(event);
  }
  
  return (
    <>
    <ThemeProvider theme={muiTheme}>
      {separatorIcon ? <Breadcrumbs {...props}
        separator={<Icon fontSize="small">{separatorIcon}</Icon>}
        aria-label="breadcrumb"
      >
      {linkArray.map((item,i,arr) => arr.length - 1 === i ? <Typography color="text.primary">{item.label}</Typography>:<Link href={item.href} underline={underline} color={underline} style={{opacity:'0.6'}}>{item.label}</Link>)}
      </Breadcrumbs>
      : <Breadcrumbs {...props} onClick={onClicked}>
      {linkArray.map((item,i,arr) => arr.length - 1 === i ? <Typography color="text.primary">{item.label}</Typography>:<Link href={item.href} underline={underline} color={underline} style={{opacity:'0.6'}}>{item.label}</Link>)}
      </Breadcrumbs>}
      </ThemeProvider>
    </>
  );
}

BreadcrumbsComponent.prototype = {
  expandText:PropTypes.string,
  itemsAfterCollapse: PropTypes.number,
  itemsBeforeCollapse: PropTypes.number,
  maxItems: PropTypes.number,
  separator:PropTypes.string,
  linkArray:PropTypes.array,
  color:PropTypes.string,
  underline:PropTypes.string,
  separatorIcon: PropTypes.string,
};

BreadcrumbsComponent.defaultProps = {
  expandText:'Show Link',
  itemsAfterCollapse: 2,
  itemsBeforeCollapse: 2,
  maxItems: 3,
  separator:'›',
  linkArray:[],
  color:'inherit',
  underline:'hover',
  separatorIcon: 'calendar_view_day'
};


export default BreadcrumbsComponent;