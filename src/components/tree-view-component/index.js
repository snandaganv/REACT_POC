import * as React from 'react';
import { PropTypes } from "prop-types";
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Icon } from "@mui/material";
import GridItemRecursive from './GridItemRecursive';
let result = [];

function loop(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].items instanceof Array) {
      result.push(arr[i].nodeId);
      loop(arr[i].items);
    }
  }
  return result;    
}

let allIds = [];

function loopAll(arr) {
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].items instanceof Array) {
      allIds.push(arr[i].nodeId);
      loopAll(arr[i].items);
    }
    else {
      allIds.push(arr[i].nodeId)
    }
  }
  return allIds;    
}
const TreeViewComponent = (props) => {
  const {treeViwList,ariaLabel,endIcon,expandIcon,collapseIcon} = props;
  const nodeIdAll = loop(treeViwList);
  const nodeIdAlls = loopAll(treeViwList);

  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);


  const handleToggle = (event,nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event,nodeIds) => {
    setSelected(nodeIds);
  };
const handleExpandClick = () => {
  setExpanded((oldExpanded) =>
    oldExpanded.length === 0 ? nodeIdAll : [],
  );
};

const handleSelectClick = () => {
  setSelected((oldSelected) =>
    oldSelected.length === 0 ? nodeIdAlls : [],
  );
};
  



  
  
  return (
    
    <ThemeProvider theme={muiTheme}>
    <Box sx={{ mb: 1 }}>
        <Button onClick={handleExpandClick}>
          {expanded.length === 0 ? 'Expand all' : 'Collapse all'}
        </Button>
        <Button onClick={handleSelectClick}>
          {selected.length === 0 ? 'Select all' : 'Unselect all'}
        </Button>
      </Box>
    <TreeView
      aria-label={ariaLabel}
      defaultCollapseIcon={<Icon fontSize="small">{collapseIcon}</Icon>}
      defaultExpandIcon={<Icon fontSize="small">{expandIcon}</Icon>}
      defaultEndIcon={<Icon fontSize="small">{endIcon}</Icon>}
      sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      multiSelect
    >

      <GridItemRecursive familyTree={treeViwList}/>
     
    </TreeView>
    
    </ThemeProvider>
  );
}



TreeViewComponent.prototype = {
  treeViwList: PropTypes.any,
  ariaLabel: PropTypes.string,
  endIcon:PropTypes.string,
  expandIcon:PropTypes.string,
  collapseIcon:PropTypes.string,
};

TreeViewComponent.defaultProps = {
  treeViwList: [{'itemName':'Application',nodeId : 1,items:[{'itemName':'Calendar',nodeId:2}]},{'itemName':'Documents',nodeId: 5,items:[{'itemName':'OseS',nodeId:4},{'itemName':'MU',nodeId:8,items:[{'itemName':'index.js',nodeId:6}]}]}],
  ariaLabel: 'tree view list',
  endIcon:'close_square',
  expandIcon:'expand_more_icon',
  collapseIcon:'chevron_right_icon',
};


export default TreeViewComponent;