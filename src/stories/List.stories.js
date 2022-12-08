import React from "react";
import List from '@mui/material/List';
import {BasicLists,NestedLists,FolderLists,SelectedListItems,AlignItemsLists,InteractiveLists,CheckboxLists,SwitchListSecondarys,PinnedSubheaderLists,GutterlessLists} from "../components/list-component";
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
const Template9 = (args) => <BasicLists {...args}></BasicLists>;
export const BasicList = Template9.bind({});
BasicList.args = {   
  
basicLists:[{id:0,primary:'Inbox',icon:<InboxIcon />},{id:1,primary:'Drafts',icon:<DraftsIcon />},{id:2,primary:'Trash'},{id:4,primary:'Spam'}],
  
  disablePadding:true,
};
const Template7 = (args) => <NestedLists {...args}></NestedLists>;
export const NestedList = Template7.bind({});
NestedList.args={  
  basicLists:[{id:0,primary:'sent mail',icon: <SendIcon />},
  {id:1,primary:'drafts', icon: <DraftsIcon />}],
      nestedLists:[{id:2,primary:'inbox',icon:<InboxIcon />, primary1:'Started', icon1:  <StarBorder />}],
            disablePadding:true,
            timeout:"auto",
                
}
const Template8 = (args) => <FolderLists {...args}></FolderLists>;
export const FolderList = Template8.bind({});
FolderList.args={  
  folderLists:[{id:1,label: 'Photo',date:'Jan 9, 2014',icon:<ImageIcon/>},{id:2,label: 'Work',date:'Jan 7, 2014',icon:<WorkIcon/>},{id:3,label: 'Vacation',date:'July 20, 2014',icon:<BeachAccessIcon/>}],
 }
 const Template = (args) => <SelectedListItems {...args}></SelectedListItems>;
export const SelectedListItem =  Template.bind({});
SelectedListItem.args={
  selectedListItems:[{id:0,primary:'Inbox',icon:  <InboxIcon />},{id:1,primary:'Drafts',icon:  <DraftsIcon />},{id:2,primary:'Trash',icon:''},{id:3,primary:'Spam',icon:''}]
}
const Template1 = (args) => <AlignItemsLists {...args}></AlignItemsLists>;
export const AlignItemsList = Template1.bind({});
AlignItemsList.args={
alignmentLists:[{primary:'Brunch this weekend?',secondaryText1:'Ali Connors',secondaryText2:"— I'll be in your neighborhood doing errands this…",src:"/static/images/avatar/1.jpg"},
                  {primary:'Summer BBQ',secondaryText1:'to Scott, Alex, Jennifer ',secondaryText2:"— Wish I could come, but I'm out of town this…",src:"/static/images/avatar/2.jpg"},
                  {primary:'Oui Oui',secondaryText1:'Sandra Adams ',secondaryText2:"— Do you have Paris recommendations? Have you ever…",src:"/static/images/avatar/3.jpg"}],

       
  alignItems: "flex-start",
  dvariant:"inset",
  variant:"body2",
  color:"text.primary"
          }
          const Template2 = (args) => <InteractiveLists {...args}></InteractiveLists>;
export const InteractiveList = Template2.bind({});
InteractiveList.args={  
interactiveLists:[{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'},
{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'},
{icon: <FolderIcon />,primary:'Single-line item',icon1: <DeleteIcon />,secondary:'Secondary text'}],
edge:'end'

}
const Template3 = (args) => <CheckboxLists {...args}></CheckboxLists>;
export const CheckboxList = Template3.bind({});
CheckboxList.args={
  checkboxLists:["List Item 1", "List Item 2","List Item 3"],
  edge:"end",
  dense:true,
  disablePadding:true,
  disableRipple:false,
  cedge:"start"
}
const Template4 = (args) => <SwitchListSecondarys {...args}></SwitchListSecondarys>;

export const SwitchListSecondary = Template4.bind({});
SwitchListSecondary.args={
  switchLists:[{primary:'Wi-Fi',id:'switch-list-label-wifi',value:'wifi',icon:<WifiIcon/>},
  {primary:'Bluetooth',id:'switch-list-label-bluetooth',value:'bluetooth',icon:<BluetoothIcon/>}],
  edge:"end",

}
const Template5 = (args) => <PinnedSubheaderLists {...args}></PinnedSubheaderLists>;
export const PinnedSubheaderList = Template5.bind({});
PinnedSubheaderList.args={
  pinnedSubheaderLists:["I'm sticky 1","I'm sticky 2","I'm sticky 3","I'm sticky 4"],
  pinnedSubLists:['Item 0','Item 1','Item 2']

}


const Template6 = (args) => <GutterlessLists {...args}></GutterlessLists>;
export const GutterlessList = Template6.bind({});
GutterlessList.args={
  gutterlessLists:[{id:0,primary:"List Item 1"},{id:1,primary:"List Item 2"},{id:3,primary:"List Item 3"}],
  disableGutters:true,

}


