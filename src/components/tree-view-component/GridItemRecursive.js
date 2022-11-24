import TreeItem from '@mui/lab/TreeItem';
import * as React from 'react';
const GridItemRecursive = (props) => {
  const { familyTree } = props;
  return (
    <React.Fragment>

      {
        familyTree.map((child) => {
          if (child.items) {
            return (
              <TreeItem nodeId={child.nodeId} label={child.itemName}>
                <GridItemRecursive familyTree={child.items} />
              </TreeItem>
            );
          }
          else {
            return (
              <React.Fragment>
                <TreeItem nodeId={child.nodeId} label={child.itemName} />
              </React.Fragment>
            );
          }

        })
      }
    </React.Fragment>
  )
}
export default GridItemRecursive;