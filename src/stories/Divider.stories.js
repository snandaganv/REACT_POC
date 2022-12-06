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
const Template1 = (args) => <ListDividers {...args}></ListDividers>;
export const ListDivider = Template1.bind({});
ListDivider.args={
    listDividers:[{id:0,primary:'Inbox'},{id:1,primary:'Drafts'},{id:2, primary:'Spam'}],
    light:true
}
const Template2 = (args) => <InsetDividers {...args}></InsetDividers>;
export const InsetDivider = Template2.bind({});
InsetDivider.args={
   insetDividers:[{id:0, primary:'Photos',secondary:'Jan 9, 2014',icon:<ImageIcon />},
                  {id:1, primary:'Work',secondary:'Jan 7, 2014',icon:<WorkIcon />},
               {id:2, primary:'Vacation',secondary:'July 24, 2014',icon:<BeachAccessIcon />}],
               variant:'inset',
               component:'li'
}
const Template3 = (args) => <SubheaderDividers {...args}></SubheaderDividers>;
 export const SubheaderDivider = Template3.bind({});
 SubheaderDivider.args={
    dividers:[{id:0,primary:'Photos',secondary:'Jan 9, 2014',variant:''},
                        {id:1,primary:'Work',secondary:'Jan 7, 2014',variant:'inset'},
                       ],
                subdividers:[       {id:2,primary:'Vacation',secondary:'July 20, 2014',icon: <BeachAccessIcon />} ],      
                        component:'li',                   
 }
 const Template4 = (args) => <MiddleDividers {...args}></MiddleDividers>;
 export const MiddleDivider = Template4.bind({});
 MiddleDivider.args={
    variant:"middle",

 }
 const Template5 = (args) => <DividerTexts {...args}></DividerTexts>;
 export const DividerText = Template5.bind({});
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
 const Template6 = (args) => <VerticalDividers {...args}></VerticalDividers>;
 export const VerticalDivider = Template6.bind({});
 VerticalDivider.args={
    orientation:'vertical',
     flexItem:true 

 }
 const Template7 = (args) => <VerticalDividerMiddles {...args}></VerticalDividerMiddles>;
 export const VerticalDividerMiddle = Template7.bind({});
 VerticalDividerMiddle.args={

    orientation:'vertical',
     variant:'middle',
      flexItem:true,
 }
 const Template8 = (args) => <VerticalDividerTexts {...args}></VerticalDividerTexts>;
export const VerticalDividerText = Template8.bind({});
VerticalDividerText.args={   
   content :<div>
     {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
  Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Sed malesuada lobortis pretium.`}
   </div>,
   orientation:'vertical',
   flexItem:true,
}