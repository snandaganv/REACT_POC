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
const BasicListsTemplate = (args)=><BasicLists {...args}></BasicLists>
export const BasicList = BasicListsTemplate.bind({});
BasicList.args = {   
  
basicLists:[{id:0,primary:'Inbox',icon:'inbox'},{id:1,primary:'Drafts',icon:'drafts'},{id:2,primary:'Trash'},{id:4,primary:'Spam'}],
  
  disablePadding:true,
};

const NestedListsTemplate = (args)=><NestedLists {...args}></NestedLists>
export const NestedList = NestedListsTemplate.bind({});
NestedList.args={  
  basicLists:[{id:0,primary:'sent mail',icon: 'send'},
  {id:1,primary:'drafts', icon: 'drafts'}],
      nestedLists:[{id:2,primary:'inbox',icon:'inbox', primary1:'Started', icon1:  'star_border'}],
            disablePadding:true,
            timeout:"auto",
                
}

const FolderListsTemplate = (args) => <FolderLists {...args}></FolderLists>
export const FolderList = FolderListsTemplate.bind({});
FolderList.args={  
  folderLists:[{id:1,label: 'Photo',date:'Jan 9, 2014',icon:'image'},{id:2,label: 'Work',date:'Jan 7, 2014',icon:'work'},{id:3,label: 'Vacation',date:'July 20, 2014',icon:'beach_access'}],
 }

 const SelectedListItemsTemplate = (args) => <SelectedListItems {...args}></SelectedListItems>
export const SelectedListItem =  SelectedListItemsTemplate.bind({});
SelectedListItem.args={
  selectedListItems:[{id:0,primary:'Inbox',icon:  'inbox'},{id:1,primary:'Drafts',icon:  'drafts'},{id:2,primary:'Trash',icon:''},{id:3,primary:'Spam',icon:''}]
}

const AlignItemsListsTemplate = (args) => <AlignItemsLists {...args}></AlignItemsLists>
export const AlignItemsList = AlignItemsListsTemplate.bind({});
AlignItemsList.args={
alignmentLists:[{primary:'Brunch this weekend?',secondaryText1:'Ali Connors',secondaryText2:"— I'll be in your neighborhood doing errands this…",src:"/static/images/avatar/1.jpg"},
                  {primary:'Summer BBQ',secondaryText1:'to Scott, Alex, Jennifer ',secondaryText2:"— Wish I could come, but I'm out of town this…",src:"/static/images/avatar/2.jpg"},
                  {primary:'Oui Oui',secondaryText1:'Sandra Adams ',secondaryText2:"— Do you have Paris recommendations? Have you ever…",src:"/static/images/avatar/3.jpg"}],

       
  alignItems: "flex-start",
  dvariant:"inset",
  variant:"body2",
  color:"text.primary"
          }

 const InteractiveListsTemplate = (args) => <InteractiveLists {...args}></InteractiveLists>         
export const InteractiveList = InteractiveListsTemplate.bind({});
InteractiveList.args={  
interactiveLists:[{icon: 'folder',primary:'Single-line item',icon1: 'delete',secondary:'Secondary text'},
{icon: 'folder',primary:'Single-line item',icon1: 'delete',secondary:'Secondary text'},
{icon: 'folder',primary:'Single-line item',icon1: 'delete',secondary:'Secondary text'}],
edge:'end'

}

const CheckboxListsTemplate = (args) => <CheckboxLists {...args}></CheckboxLists>
export const CheckboxList = CheckboxListsTemplate.bind({});
CheckboxList.args={
  checkboxLists:["List Item 1", "List Item 2","List Item 3"],
  edge:"end",
  dense:true,
  disablePadding:true,
  disableRipple:false,
  cedge:"start"
}


const SwitchListSecondarysTemplate = (args) => <SwitchListSecondarys {...args}></SwitchListSecondarys>
export const SwitchListSecondary = SwitchListSecondarysTemplate.bind({});
SwitchListSecondary.args={
  switchLists:[{primary:'Wi-Fi',id:'switch-list-label-wifi',value:'wifi',icon:'wifi'},
  {primary:'Bluetooth',id:'switch-list-label-bluetooth',value:'bluetooth',icon:'bluetooth'}],
  edge:"end",

}

const PinnedSubheaderListsTemplate = (args) => <PinnedSubheaderLists {...args}></PinnedSubheaderLists>
export const PinnedSubheaderList = PinnedSubheaderListsTemplate.bind({});
PinnedSubheaderList.args={
  pinnedSubheaderLists:["I'm sticky 1","I'm sticky 2","I'm sticky 3","I'm sticky 4"],
  pinnedSubLists:['Item 0','Item 1','Item 2']

}


const GutterlessListsTemplate = (args) =><GutterlessLists {...args}></GutterlessLists>
export const GutterlessList = GutterlessListsTemplate.bind({});
GutterlessList.args={
  gutterlessLists:[{id:0,primary:"List Item 1"},{id:1,primary:"List Item 2"},{id:3,primary:"List Item 3"}],
  disableGutters:true,

}


