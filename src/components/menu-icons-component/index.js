import * as React from 'react';
import { PropTypes } from "prop-types";
import MenuIcon from '@mui/icons-material/Menu';
//import MenuBookIcon from '@mui/icons-material/MenuBook';

const MenuIconsComponent = (props) => {

   
  return (
    <>
      <MenuIcon {...props}></MenuIcon>

    </>
  );
}

MenuIconsComponent.prototype = {
    
};

MenuIconsComponent.defaultProps = {
    
};


export default MenuIconsComponent;