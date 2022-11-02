import * as React from 'react';
import { PropTypes } from "prop-types";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import GridItemRecursive from './GridItemRecursive';


const TreeViewComponent = (props) => {
  const {treeViwList,ariaLabel} = props;
  



  
  
  return (
    <>
    <ThemeProvider theme={muiTheme}>

    <TreeView
      aria-label={ariaLabel}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
    >

      <GridItemRecursive familyTree={treeViwList}/>
     
    </TreeView>
    
    </ThemeProvider>
    </>
  );
}



TreeViewComponent.prototype = {
  treeViwList: PropTypes.any,
  ariaLabel: PropTypes.string,
};

TreeViewComponent.defaultProps = {
  treeViwList: [{'itemName':'Application',nodeId : 1,items:[{'itemName':'Calendar',nodeId:2}]},{'itemName':'Documents',nodeId: 5,items:[{'itemName':'OseS',nodeId:4},{'itemName':'MU',nodeId:8,items:[{'itemName':'index.js',nodeId:6}]}]}],
  ariaLabel: 'tree view list'
};


export default TreeViewComponent;