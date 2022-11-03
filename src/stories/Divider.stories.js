import React from "react";
import Divider from '@mui/material/Divider';
import {ListDividers,InsetDividers,SubheaderDividers,MiddleDividers,DividerTexts,VerticalDividers,VerticalDividerMiddles,VerticalDividerTexts} from "../components/divider-component";
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
export default {
    title:"Data Display/Divider",
    component:Divider,
    argTypes: { 
    }
}
export const ListDivider = ListDividers.bind({});
ListDivider.args={
    listDividers:[{id:0,primary:'Inbox'},{id:1,primary:'Drafts'},{id:2, primary:'Spam'}],
    light:true
}

export const InsetDivider = InsetDividers.bind({});
InsetDivider.args={
   insetDividers:[{id:0, primary:'Photos',secondary:'Jan 9, 2014',icon:<ImageIcon />},
                  {id:1, primary:'Work',secondary:'Jan 7, 2014',icon:<WorkIcon />},
               {id:2, primary:'Vacation',secondary:'July 24, 2014',icon:<BeachAccessIcon />}],
               variant:'inset',
               component:'li'
}
 export const SubheaderDivider = SubheaderDividers.bind({});
 SubheaderDivider.args={
    dividers:[{id:0,primary:'Photos',secondary:'Jan 9, 2014',variant:''},
                        {id:1,primary:'Work',secondary:'Jan 7, 2014',variant:'inset'},
                       ],
                subdividers:[       {id:2,primary:'Vacation',secondary:'July 20, 2014',icon: <BeachAccessIcon />} ],      
                        component:'li',                   
 }

 export const MiddleDivider = MiddleDividers.bind({});
 MiddleDivider.args={
    variant:"middle",

 }

 export const DividerText = DividerTexts.bind({});
 DividerText.args={
    textaligns: 
       [{align:'center',text:'CENTER'},{ align:'left',text:'LEFT'},{align: 'right',text:'RIGHT'}],
    content : 
        <div>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`}
        </div>
      ,

 }

 export const VerticalDivider = VerticalDividers.bind({});
 VerticalDivider.args={
    orientation:'vertical',
     flexItem:true 

 }

 export const VerticalDividerMiddle = VerticalDividerMiddles.bind({});
 VerticalDividerMiddle.args={

    orientation:'vertical',
     variant:'middle',
      flexItem:true,
 }
export const VerticalDividerText = VerticalDividerTexts.bind({});
VerticalDividerText.args={   
   content :<div>
     {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
  Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Sed malesuada lobortis pretium.`}
   </div>,
   orientation:'vertical',
   flexItem:true,
}