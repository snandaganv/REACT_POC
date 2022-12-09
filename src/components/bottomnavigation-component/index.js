import AvatarComponent from '../avatar-component';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { PapersBasic } from '../paper-component';
import { ThemeProvider } from "@mui/material/styles";
import React from 'react';
import muiTheme from "../../../.storybook/muiTheme";

export const SimpleBottomNavigations = ({ navicons, }) => {
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

export const LabelBottomNavigations = ({ navicons, showLabels }) => {
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

export const FixedBottomNavigations = ({ navicons }) => {
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
                                <AvatarComponent sizes="large" type="image" src={person} />
                            </ListItemAvatar>
                            <ListItemText primary={primary} secondary={secondary} />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
                    <PapersBasic elevation={3}>
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
                    </PapersBasic>
                </Box>
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
