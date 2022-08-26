import * as React from 'react';
import { PropTypes } from "prop-types";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const BreadcrumbsComponent = (props) => {
  const onClicked =(event)=> {
    console.log(event);
  }
  
  return (
    <>
      <Breadcrumbs {...props} onClick={onClicked}></Breadcrumbs>
    </>
  );
}

BreadcrumbsComponent.prototype = {
  expandText:PropTypes.string,
  itemsAfterCollapse: PropTypes.number,
  itemsBeforeCollapse: PropTypes.number,
  maxItems: PropTypes.number,
};

BreadcrumbsComponent.defaultProps = {
  expandText:'Show Link',
  itemsAfterCollapse: 2,
  itemsBeforeCollapse: 2,
  maxItems: 6,
};


export default BreadcrumbsComponent;