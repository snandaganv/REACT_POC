import * as React from 'react';
import { PropTypes } from "prop-types";
import SearchIcon from '@mui/icons-material/Search';
//import MenuBookIcon from '@mui/icons-material/MenuBook';

const SearchIconsComponent = (props) => {

   
  return (
    <>
      <SearchIcon {...props}></SearchIcon>

    </>
  );
}

SearchIconsComponent.prototype = {
    
};

SearchIconsComponent.defaultProps = {
    
};


export default SearchIconsComponent;