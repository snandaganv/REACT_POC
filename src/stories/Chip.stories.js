import { Chip } from "@mui/material";
import {
  ChipsBasics,
  ChipClickables,
  ChipsColors,
  ChipSizes,
  ChipIcons,
  ChipAvatars,
  ChipClickableLinks,
} from "../components/Chip";

export default {
  title: "Data Display/Chip",
  component: Chip,
  argTypes: {
    variant: {
      options: ["filled", "outlined"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium"],
      control: { type: "radio" },
    },
    color: {
      options: ["primary", "success", "secondary", "error", "info", "warning"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
    direction: {
      options: ["row", "row-reverse", "column", "column-reverse"],
      control: { type: "radio" },
    },
  },
};
const Template = (args)=><ChipsBasics {...args}></ChipsBasics>
export const ChipsBasic = Template.bind({});
ChipsBasic.args = {
  label: "Chip",
  variant: "outlined",
  color: "primary",
  size: "medium",
  direction: "row",
  disabled: false,
};

const ChipClickableTemplate = (args)=><ChipClickables {...args}></ChipClickables>
export const ChipClickable = ChipClickableTemplate.bind({});
ChipClickable.args={
  label:'Clickable',
  variant:'outlined',
  color:'primary'
}
const ChipsColorTemplate = (args)=><ChipsColors {...args}></ChipsColors>
export const ChipsColor = ChipsColorTemplate.bind({});
ChipsColor.args={
  colors:['primary','success','error','info','warning']
}

const ChipSizesTemplate = (args)=><ChipSizes {...args}></ChipSizes>
export const ChipSize = ChipSizesTemplate.bind({});
ChipSize.args={
  sizes:['small','medium'],
  color:'primary',
  variant:'outlined'
}

const ChipAvatarsTemplate = (args)=><ChipAvatars {...args}></ChipAvatars>
export const ChipAvatar = ChipAvatarsTemplate.bind({});
ChipAvatar.args={
  label:'Avatar',
  variant:'outlined',
  color:'primary'
}

const ChipIconsTemplate = (args)=><ChipIcons {...args}></ChipIcons>
export const ChipIcon = ChipIconsTemplate.bind({});
ChipIcon.args={
  chipicons:[{icon:'face',label:'Custom delete icon',variant:'' ,deleteIcon:'',color:'primary'},
  {icon:'face',label:'Custom delete icon',variant:'outlined' ,color:'primary'},
  {icon:'',label:'Custom delete icon',deleteIcon:'cancel',color:'primary'},
  {icon:'',label:'Custom delete icon',variant:'outlined' ,deleteIcon:'cancel',color:'primary'},
  {icon:'face',label:'Custom delete icon',deleteIcon:'cancel',color:'primary'},
  {icon:'face',label:'Custom delete icon',variant:'outlined' ,deleteIcon:'cancel',color:'primary'}
 
],
}
const ChipClickableLinksTemplate = (args)=><ChipClickableLinks {...args}></ChipClickableLinks>
export const ChipClickableLink = ChipClickableLinksTemplate.bind({});
ChipClickableLink.args={
  label:'Clickable Link',
  component:'a',
  href:'https://design.arisglobal.com/agcomp/chip',
  color:'primary',
  variant:'outlined'
}

