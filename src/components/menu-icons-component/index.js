import * as React from 'react';
import { PropTypes } from "prop-types";

import MenuIcon from '@mui/icons-material/Menu';

const MenuIconsComponent = (props) => {
   
  return (
    <>
      <div>{props.childComponent(props)}</div>

    </>
  );
}

MenuIconsComponent.prototype = {
    
};

MenuIconsComponent.defaultProps = {
    
};


export default MenuIconsComponent;