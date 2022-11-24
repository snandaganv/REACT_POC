import React from "react";
import { PropTypes } from "prop-types";
import { Menu } from "@mui/material";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";
import { ContentCut, ContentCopy, ContentPaste, PersonAdd, Settings, Logout, Cloud, Check, Drafts, Send, PriorityHigh } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
    Box,
    Paper,
    MenuList,
    MenuItem,
    Typography,
    Icon,
    Divider,
    ListItemText,
    ListItemIcon,
    ListItem,
    List,
    IconButton,
    Avatar,
    Tooltip,
} from "@mui/material";

export const BasicMenus = ({ label, menulist }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ThemeProvider theme={muiTheme}>
                <Button
                    onClick={handleClick}
                    style={{ textTransform: "capitalize" }}
                >
                    {label}
                </Button>
            </ThemeProvider>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose} >
                {menulist.map(item => <MenuItem onClick={handleClose} value={item.value}>{item.label}</MenuItem>)}
            </Menu>
        </div>
    );
}

BasicMenus.propTypes = {
    label: PropTypes.string,
    dense: PropTypes.bool,
};

export const DenseMenus = ({ dense, densetext, densetext1, denseicon, autoFocus, disableGutters, divider }) => {
    return (
        <Paper sx={{ width: 320 }}>
            <MenuList dense={dense} autoFocus={autoFocus}>
                {denseicon.map((item) => (
                    <MenuItem disableGutters={disableGutters} divider={divider}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.text}</ListItemText>
                    </MenuItem>
                ))}
                <Divider />
                {densetext.map((item) => (
                    <MenuItem disableGutters={disableGutters}>
                        <ListItemText>{item.textspacaf}</ListItemText>
                    </MenuItem>
                ))}
                {densetext1.map((item) => (
                    <MenuItem disableGutters={disableGutters}>
                        <ListItemText>{item.textspacbf}</ListItemText>
                    </MenuItem>
                ))}
                <Divider />
                <MenuItem>
                    <ListItemText>Custom spacing...</ListItemText>
                </MenuItem>

            </MenuList>
        </Paper>
    );
}
DenseMenus.propTypes = {
    dense: PropTypes.bool,
    autoFocus: PropTypes.bool,
    disableGutters: PropTypes.bool,
    divider: PropTypes.bool,
};

export const IconMenus = ({ menuicons, menuclip }) => {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%' }} >
            <MenuList>
                {menuicons.map((item) => (
                    <MenuItem>
                        <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                        <Typography variant="body2" color="text.secondary">{item.typography}</Typography>
                    </MenuItem>
                ))}
                <Divider />
                {menuclip.map((item) => (
                    <MenuItem>
                        <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </MenuItem>
                ))}

            </MenuList>
        </Paper >
    );
}

const options = [
    'Show some love to MUI',
    'Show all notification content',
    'Hide sensitive notification content',
    'Hide all notification content',
];

export const SimpleListMenus = ({ }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Device settings"
                sx={{ bgcolor: 'background.paper' }}
            >
                <ListItem
                    button
                    onClick={handleClickListItem}
                >
                    <ListItemText
                        primary="When device is locked"
                        secondary={options[selectedIndex]}
                    />
                </ListItem>
            </List>
            <Menu
                id="lock-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        disabled={index === 0}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}


export const AccountMenus = ({ }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
}


const options1 = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;

export const LongMenus = ({ }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {options1.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}

export const TypographyMenus = ({ typomenus }) => {
    return (
        <Paper sx={{ width: 230 }}>
            <MenuList>
                {typomenus.map((item) => (
                    <MenuItem>
                        <ListItemIcon fontSize="small">{item.icon}</ListItemIcon>
                        <Typography variant="inherit">{item.label}</Typography>
                        <Typography variant="inherit" noWrap>{item.textlbl}</Typography>
                    </MenuItem>
                ))}

            </MenuList>
        </Paper>
    );
}

export const PositionedMenus = ({ menulist, label }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <ThemeProvider theme={muiTheme}>
                <Button
                    onClick={handleClick}
                    style={{ textTransform: "capitalize" }}
                >
                    {label}
                </Button>
            </ThemeProvider>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {menulist.map(item => <MenuItem onClick={handleClose} value={item.value}>{item.label}</MenuItem>)}
            </Menu>
        </div>
    );
}

export const ContextMenus = ({ typo, contxtmenu }) => {
    const [contextMenu, setContextMenu] = React.useState(null);

    const handleContextMenu = (event: React.MouseEvent) => {
        event.preventDefault();
        setContextMenu(
            contextMenu === null
                ? {
                    mouseX: event.clientX + 2,
                    mouseY: event.clientY - 6,
                }
                :
                null,
        );
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    return (
        <div onContextMenu={handleContextMenu} style={{ cursor: 'context-menu' }}>
            {typo.map((item) => (<Typography>{item.label} </Typography>))}
            <Menu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null
                        ? { top: contextMenu.mouseY, left: contextMenu.mouseX }
                        : undefined
                }
            >
                {contxtmenu.map(item => <MenuItem onClick={handleClose} value={item.value}>{item.label}</MenuItem>)}
            </Menu>
        </div>
    );
}