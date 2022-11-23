import {  Stack } from "@mui/material";
import RatingComponent from "../components/rating-component";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default {
    title: 'Feedback/Rating',
    component: RatingComponent,
    argTypes: {
        size: {
            options: ["small", "medium", "large"],
            control: { type: "radio" },
          },
          color: {
            options: ["default","primary", "secondary"],
            control: { type: "radio" },
          },
          iconstar:'star'
    },
};

const Template = (args) => <RatingComponent {...args}></RatingComponent>;

export const Default = Template.bind({});

Default.args = {
    hoverFeedback:false ,
    precision: 0.5,
    defaultValue: 2,
    size: "large",
    disabled:false,
    name:"no-value",
    readOnly:false,
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      },
      iconstar:'star'
     
   
}

export const HoverFeedback = Template.bind({});

HoverFeedback.args = {
    hoverFeedback:true,
    precision: 0.5,
    defaultValue: 2,
    size: "large",
    disabled:false,
    name:"no-value",
    readOnly:false,
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      },
    iconstar:'star'
}

export const Readonly = Template.bind({});

Readonly.args = {
    hoverFeedback:true,
    precision: 0.5,
    defaultValue: 2,
    size: "large",
    disabled:false,
    name:"no-value",
    readOnly:true,
    iconstar:'star',
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      }
}

export const Disabled = Template.bind({});

Disabled.args = {
    hoverFeedback:false,
    precision: 0.5,
    defaultValue: 2,
    size: "large",
    disabled:true,
    name:"no-value",
    readOnly:true,
    iconstar:'star',
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      }
}

export const NoRating = Template.bind({});

NoRating.args = {
    hoverFeedback:false,
    precision: 0.5,
    defaultValue: 0,
    size: "large",
    disabled:true,
    name:"no-value",
    readOnly:true,
    iconstar:'star',
    max:5,
    labels:{
        0.5: 'Useless',
        1: 'Useless+',
        1.5: 'Poor',
        2: 'Poor+',
        2.5: 'Ok',
        3: 'Ok+',
        3.5: 'Good',
        4: 'Good+',
        4.5: 'Excellent',
        5: 'Excellent+',
      }
}


