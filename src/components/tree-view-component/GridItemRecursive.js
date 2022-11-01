import TreeItem from '@mui/lab/TreeItem';
import * as React from 'react';
const GridItemRecursive =(props) => {
    const {familyTree} = props;
    return (
        <>

      {
        familyTree.map((child) => {
            if(child.items) {
                return (
                    <TreeItem nodeId={child.nodeId} label={child.itemName}>
                    <GridItemRecursive familyTree={child.items}/>
                    </TreeItem>
                );
            }
            else {
                return (
                    <>
                      <TreeItem nodeId={child.nodeId} label={child.itemName} />
                    </>
                  );
            }
          
        })
      }
        </>
    )
}
export default GridItemRecursive;