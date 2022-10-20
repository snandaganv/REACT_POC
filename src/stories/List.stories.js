import React from "react";
import List from '@mui/material/List';
import {BasicLists,NestedLists,FolderLists,SelectedListItems,AlignItemsLists,InteractiveLists,CheckboxLists,SwitchListSecondarys,PinnedSubheaderLists,GutterlessLists,VirtualizedLists} from "../components/list-component";
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import StarBorder from '@mui/icons-material/StarBorder';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

export default {
    title:"Data Display/List",
    component:List,
    argTypes: { 
    }
}
export const BasicList = BasicLists.bind({});
BasicList.args = {   
  
basicLists:[{id:0,primary:'Inbox',icon:<InboxIcon />},{id:1,primary:'Drafts',icon:<DraftsIcon />},{id:2,primary:'Trash'},{id:4,primary:'Spam'}],
  
  disablePadding:true,
};

export const NestedList = NestedLists.bind({});
NestedList.args={  
  basicLists:[{id:0,primary:'sent mail',icon: <SendIcon />},
  {id:1,primary:'drafts', icon: <DraftsIcon />}],
      nestedLists:[{id:2,primary:'inbox',icon:<InboxIcon />, primary1:'Started', icon1:  <StarBorder />}],
            disablePadding:true,
            timeout:"auto",
                
}

export const FolderList = FolderLists.bind({});
FolderList.args={  
  folderLists:[{id:1,label: 'Photo',date:'Jan 9, 2014',icon:<ImageIcon/>},{id:2,label: 'Work',date:'Jan 7, 2014',icon:<WorkIcon/>},{id:3,label: 'Vacation',date:'July 20, 2014',icon:<BeachAccessIcon/>}],
 }
export const SelectedListItem =  SelectedListItems.bind({});
SelectedListItem.args={
  selectedListItems:[{id:0,primary:'Inbox',icon:  <InboxIcon />},{id:1,primary:'Drafts',icon:  <DraftsIcon />},{id:2,primary:'Trash',icon:''},{id:3,primary:'Spam',icon:''}]
}

export const AlignItemsList = AlignItemsLists.bind({});
AlignItemsList.args={
alignmentLists:[{primary:'Brunch this weekend?',secondaryText1:'Ali Connors',secondaryText2:"— I'll be in your neighborhood doing errands this…",src:"/static/images/avatar/1.jpg"},
                  {primary:'Summer BBQ',secondaryText1:'to Scott, Alex, Jennifer ',secondaryText2:"— Wish I could come, but I'm out of town this…",src:"/static/images/avatar/2.jpg"},
                  {primary:'Oui Oui',secondaryText1:'Sandra Adams ',secondaryText2:"— Do you have Paris recommendations? Have you ever…",src:"/static/images/avatar/3.jpg"}],

       
  alignItems: "flex-start",
  dvariant:"inset",
  variant:"body2",
  color:"text.primary"
          }
export const InteractiveList = InteractiveLists.bind({});
InteractiveList.args={  
interactiveLists:[{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'},
{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'},
{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'}],
edge:'end'

}
export const CheckboxList = CheckboxLists.bind({});
CheckboxList.args={
  checkboxLists:["List Item 1", "List Item 2","List Item 3"],
  edge:"end",
  dense:true,
  disablePadding:true,
  disableRipple:false,
  cedge:"start"
}

export const SwitchListSecondary = SwitchListSecondarys.bind({});
SwitchListSecondary.args={
  switchLists:[{primary:'Wi-Fi',id:'switch-list-label-wifi',value:'wifi',icon:<WifiIcon/>},
  {primary:'Bluetooth',id:'switch-list-label-bluetooth',value:'bluetooth',icon:<BluetoothIcon/>}],
  edge:"end",

}

export const PinnedSubheaderList = PinnedSubheaderLists.bind({});
PinnedSubheaderList.args={
  pinnedSubheaderLists:["I'm sticky 1","I'm sticky 2","I'm sticky 3","I'm sticky 4"],
  pinnedSubLists:['Item 0','Item 1','Item 2']

}



export const GutterlessList = GutterlessLists.bind({});
GutterlessList.args={
  gutterlessLists:[{id:0,primary:"List Item 1"},{id:1,primary:"List Item 2"},{id:3,primary:"List Item 3"}],
  disableGutters:true,

}


export const VirtualizedList = VirtualizedLists.bind({});
VirtualizedList.args={
  itemCount:200,

}