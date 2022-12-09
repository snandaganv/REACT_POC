import BottomNavigation from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArchiveIcon from '@mui/icons-material/Archive';
import FolderIcon from '@mui/icons-material/Folder';
import {
    SimpleBottomNavigations,
    LabelBottomNavigations,
    FixedBottomNavigations,
} from "../components/bottomnavigation-component";


export default {
    title: 'Navigation/Bottom-Navigation',
    component: BottomNavigation,

};
const Template = (args) => <SimpleBottomNavigations {...args}></SimpleBottomNavigations>;

export const SimpleBottomNavigation = Template.bind({});
SimpleBottomNavigation.args = {
    navicons: [
        { icon: <RestoreIcon />, label: "Recents" },
        { icon: <FavoriteIcon />, label: "Favorites" },
        { icon: <LocationOnIcon />, label: "Nearby" },
    ],
};
const Template2 = (args) => <LabelBottomNavigations {...args}></LabelBottomNavigations>;

export const LabelBottomNavigation = Template2.bind({});
LabelBottomNavigation.args = {
    navicons: [
        { icon: <RestoreIcon />, label: "Recents", value: "recents" },
        { icon: <FavoriteIcon />, label: "Favorites", value: "favorites" },
        { icon: <LocationOnIcon />, label: "Nearby", value: "nearby" },
        { icon: <FolderIcon />, label: "folder", value: "folder" }
    ],
    showLabels: false,
};
const Template3 = (args) => <FixedBottomNavigations {...args}></FixedBottomNavigations>;

export const FixedBottomNavigation = Template3.bind({});
FixedBottomNavigation.args = {
    navicons: [
        { icon: <RestoreIcon />, label: "Recents" },
        { icon: <FavoriteIcon />, label: "Favorites" },
        { icon: <LocationOnIcon />, label: "Nearby" },
    ],
    messageExamples: [
        {
            primary: 'Brunch this week?',
            secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
            person: 'https://mui.com/static/images/avatar/5.jpg',
        },
        {
            primary: 'Birthday Gift',
            secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
            person: 'https://mui.com/static/images/avatar/1.jpg',
        },
        {
            primary: 'Recipe to try',
            secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
            person: 'https://mui.com/static/images/avatar/2.jpg',
        },
        {
            primary: 'Yes!',
            secondary: 'I have the tickets to the ReactConf for this year.',
            person: 'https://mui.com/static/images/avatar/3.jpg',
        },
        {
            primary: "Doctor's Appointment",
            secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
            person: 'https://mui.com/static/images/avatar/4.jpg',
        },
        {
            primary: 'Discussion',
            secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
            person: 'https://mui.com/static/images/avatar/5.jpg',
        },
        {
            primary: 'Summer BBQ',
            secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
            person: 'https://mui.com/static/images/avatar/1.jpg',
        },
    ]
};