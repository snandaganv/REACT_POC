import * as React from 'react';
import { PropTypes } from "prop-types";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadcrumbsComponent = (props) => {
  const {linkArray,underline,color} = props;
  const onClicked =(event)=> {
    console.log(event);
  }
  
  return (
    <>
      <Breadcrumbs {...props} onClick={onClicked}>
      {linkArray.map((item) => <Link href={item.href} underline={underline} color={underline}>{item.label}</Link>)}
      </Breadcrumbs>
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
};


export default BreadcrumbsComponent;