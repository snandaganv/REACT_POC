import React from "react";
import Divider from '@mui/material/Divider';
import {ListDividers,InsetDividers,SubheaderDividers,MiddleDividers,DividerTexts,VerticalDividers,VerticalDividerMiddles,VerticalDividerTexts} from "../components/divider-component";

export default {
    title:"Data Display/Divider",
    component:Divider,
    argTypes: { 
    }
}

const ListDividersTemplate = (args)=><ListDividers {...args}></ListDividers>
export const ListDivider = ListDividersTemplate.bind({});
ListDivider.args={
    listDividers:[{id:0,primary:'Inbox'},{id:1,primary:'Drafts'},{id:2, primary:'Spam'}],
    light:true
}

const InsetDividersTemplate = (args)=><InsetDividers {...args}></InsetDividers>
export const InsetDivider = InsetDividersTemplate.bind({});
InsetDivider.args={
   insetDividers:[{id:0, primary:'Photos',secondary:'Jan 9, 2014',icon:'image'},
                  {id:1, primary:'Work',secondary:'Jan 7, 2014',icon:'work'},
               {id:2, primary:'Vacation',secondary:'July 24, 2014',icon:'beach_access'}],
               variant:'inset',
               component:'li'
}

const SubheaderDividersTemplate = (args)=><SubheaderDividers {...args}></SubheaderDividers>
 export const SubheaderDivider = SubheaderDividersTemplate.bind({});
 SubheaderDivider.args={
    dividers:[{id:0,primary:'Photos',secondary:'Jan 9, 2014',variant:''},
                        {id:1,primary:'Work',secondary:'Jan 7, 2014',variant:'inset'},
                       ],
                subdividers:[       {id:2,primary:'Vacation',secondary:'July 20, 2014',icon: 'beach_access'} ],      
                        component:'li',                   
 }

 const MiddleDividersTemplate = (args)=><MiddleDividers {...args}></MiddleDividers>
 export const MiddleDivider = MiddleDividersTemplate.bind({});
 MiddleDivider.args={
    variant:"middle",

 }

 const DividerTextsTemplate = (args)=><DividerTexts {...args}></DividerTexts>
 export const DividerText = DividerTextsTemplate.bind({});
 DividerText.args={
    textaligns: 
       [{align:'center',text:'CENTER'},{ align:'left',text:'LEFT'},{align: 'right',text:'RIGHT'}],
    content :`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
       Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
       Sed malesuada lobortis pretium.`,

 }

 const VerticalDividersTemplate = (args)=><VerticalDividers {...args}></VerticalDividers>
 export const VerticalDivider = VerticalDividersTemplate.bind({});
 VerticalDivider.args={
    orientation:'vertical',
     flexItem:true 

 }


const VerticalDividerMiddlesTemplate = (args)=><VerticalDividerMiddles {...args}></VerticalDividerMiddles>
 export const VerticalDividerMiddle = VerticalDividerMiddlesTemplate.bind({});
 VerticalDividerMiddle.args={

    orientation:'vertical',
     variant:'middle',
      flexItem:true,
 }

 const VerticalDividerTextsTemplate = (args)=><VerticalDividerTexts {...args}></VerticalDividerTexts>
export const VerticalDividerText = VerticalDividerTextsTemplate.bind({});
VerticalDividerText.args={   
   content :`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
  Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  Sed malesuada lobortis pretium.`,
   orientation:'vertical',
   flexItem:true,
}