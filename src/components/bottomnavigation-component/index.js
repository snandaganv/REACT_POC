import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import PropTypes from "prop-types";
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import ArchiveIcon from '@mui/icons-material/Archive';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

export const BottomNavigationsSimple = ({ navicons, }) => {
    const [value, setValue] = React.useState(0);

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ width: 500, "backgroundColor": "#212943" }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    {navicons.map((item) => (
                        <BottomNavigationAction icon={item.icon} label={item.label} />

                    ))}
                </BottomNavigation>

            </Box>
        </ThemeProvider>
    );
}

export const BottomNavigationsLabel = ({ navicons, showLabels }) => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange} showLabels={showLabels}>
                {navicons.map((item) => (
                    <BottomNavigationAction icon={item.icon} label={item.label} value={item.value} />
                ))}
            </BottomNavigation>
        </ThemeProvider>
    );
}

function refreshMessages() {
    const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

    return Array.from(new Array(50)).map(
        () => messageExamples[getRandomInt(messageExamples.length)],
    );
}

export const BottomNavigationsFixed = ({ navicons, messages1 }) => {
    const [value, setValue] = React.useState(0);
    const ref = React.useRef(null);
    const [messages, setMessages] = React.useState(() => refreshMessages());

    React.useEffect(() => {
        ref.current.ownerDocument.body.scrollTop = 0;
        setMessages(refreshMessages());
    }, [value, setMessages]);

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ pb: 7 }} ref={ref}>
                <CssBaseline />
                <List>
                    {messages.map(({ primary, secondary, person }, index) => (
                        <ListItem button key={index + person}>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" src={person} />
                            </ListItemAvatar>
                            <ListItemText primary={primary} secondary={secondary} />
                        </ListItem>
                    ))}
                </List>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        {navicons.map((item) => (
                            <BottomNavigationAction icon={item.icon} label={item.label} />
                        ))}
                    </BottomNavigation>
                </Paper>
            </Box>
        </ThemeProvider>
    );
}

const messageExamples = [
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
];
