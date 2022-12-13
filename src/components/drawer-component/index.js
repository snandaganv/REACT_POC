import { Global } from '@emotion/react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { default as AppBar, default as MuiAppBar } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { default as Drawer, default as MuiDrawer } from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Skeleton from '@mui/material/Skeleton';
import { styled, ThemeProvider, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import muiTheme from '../../../.storybook/muiTheme';


export const DrawersTemporary = ({ hideBackdrop, variant, elevation, drawernav, drawerlist }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <ThemeProvider theme={muiTheme}>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {drawernav.map((drawernav, text, index) =>
                        <ListItem key={drawernav.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                <ListItemText primary={drawernav.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
                <Divider />
                <List>
                    {drawerlist.map((drawerlist, text, index) =>
                        <ListItem key={drawerlist.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                <ListItemText primary={drawerlist.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>
        </ThemeProvider>
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <Drawer
                            anchor={anchor}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            hideBackdrop={hideBackdrop}
                            variant={variant}
                            elevation={elevation}

                        >
                            {list(anchor)}
                        </Drawer>
                    </React.Fragment>
                ))}
            </div>
        </ThemeProvider>
    );
}

export const DrawersSwipeableTemporary = ({ disableBackdropTransition, disableDiscovery, drawernav, drawerlist, drawerbtn }) => {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <ThemeProvider theme={muiTheme}>
            <Box
                sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
                role="presentation"
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <List>
                    {drawernav.map((drawernav, text, index) =>
                        <ListItem key={drawernav.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                <ListItemText primary={drawernav.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
                <Divider />
                <List>
                    {drawerlist.map((drawerlist, text, index) =>
                        <ListItem key={drawerlist.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                <ListItemText primary={drawerlist.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </Box>
        </ThemeProvider>
    );

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                        <SwipeableDrawer
                            anchor={anchor}
                            disableBackdropTransition={disableBackdropTransition}
                            disableDiscovery={disableDiscovery}
                            open={state[anchor]}
                            onClose={toggleDrawer(anchor, false)}
                            onOpen={toggleDrawer(anchor, true)}
                        >
                            {list(anchor)}
                        </SwipeableDrawer>
                    </React.Fragment>
                ))}
            </div>
        </ThemeProvider>
    );
}
DrawersSwipeableTemporary.prototype = {
    disableBackdropTransition: PropTypes.bool,
    disableDiscovery: PropTypes.bool,
    hysteresis: PropTypes.number,
    minFlingVelocity: PropTypes.number,
};

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

export const DrawersSwipeableEdge = (props) => {
    const { window, disableBackdropTransition, disableDiscovery, label } = props;
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };


    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={muiTheme}>
            <Root>
                <CssBaseline />
                <Global
                    styles={{
                        '.MuiDrawer-root > .MuiPaper-root': {
                            height: `calc(50% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                />
                <Box sx={{ textAlign: 'center', pt: 1 }}>
                    <Button onClick={toggleDrawer(true)}>{label}</Button>
                </Box>
                <SwipeableDrawer
                    container={container}
                    disableBackdropTransition={disableBackdropTransition}
                    disableDiscovery={disableDiscovery}
                    anchor="bottom"
                    open={open}
                    onClose={toggleDrawer(false)}
                    onOpen={toggleDrawer(true)}
                    swipeAreaWidth={drawerBleeding}
                    disableSwipeToOpen={false}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <StyledBox
                        sx={{
                            position: 'absolute',
                            top: -drawerBleeding,
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            visibility: 'visible',
                            right: 0,
                            left: 0,
                        }}
                    >
                        <Puller />
                        <Typography sx={{ p: 2, color: 'text.secondary' }}>51 results</Typography>
                    </StyledBox>
                    <StyledBox
                        sx={{
                            px: 2,
                            pb: 2,
                            height: '100%',
                            overflow: 'auto',
                        }}
                    >
                        <Skeleton variant="rectangular" height="100%" />
                    </StyledBox>
                </SwipeableDrawer>
            </Root>
        </ThemeProvider>
    );
}
DrawersSwipeableEdge.prototype = {
    disableBackdropTransition: PropTypes.bool,
    disableDiscovery: PropTypes.bool,
    hysteresis: PropTypes.number,
};

const drawerWidth = 240;

interface Props {

    window?: () => Window;
}

export const DrawersResponsive = (props: Props,) => {

    const { window, header, elevation, data, drawernav, drawerlist, } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Toolbar />
                <Divider />
                <List>
                    {drawernav.map((drawernav, text, index) =>
                        <ListItem key={drawernav.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                <ListItemText primary={drawernav.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
                <Divider />
                <List>
                    {drawerlist.map((drawerlist, text, index) =>
                        <ListItem key={drawerlist.id} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                <ListItemText primary={drawerlist.primary} />
                            </ListItemButton>
                        </ListItem>
                    )}
                </List>
            </div>
        </ThemeProvider>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        elevation={elevation}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBarleft = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})
    (({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export const DrawersPersistentLeft = ({ data, header, drawernav, drawerlist, }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarleft position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBarleft>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {drawernav.map((drawernav, text, index) =>
                            <ListItem key={drawernav.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                    <ListItemText primary={drawernav.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List>
                        {drawerlist.map((drawerlist, text, index) =>
                            <ListItem key={drawerlist.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                    <ListItemText primary={drawerlist.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
                <Main open={open}>
                    <DrawerHeader />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Main>
            </Box>
        </ThemeProvider>
    );
}

const Mainright = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }),
);

const AppBarright = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})
    (({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: drawerWidth,
        }),
    }));

const DrawerHeaderRight = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export const DrawersPersistentRight = ({ data, header, drawernav, drawerlist, }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarright position="fixed" open={open}>
                    <Toolbar>
                        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
                            {header}
                        </Typography>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="end"
                            onClick={handleDrawerOpen}
                            sx={{ ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </AppBarright>
                <Mainright open={open}>
                    <DrawerHeaderRight />

                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Mainright>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                        },
                    }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                >
                    <DrawerHeaderRight>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeaderRight>
                    <Divider />
                    <List>
                        {drawernav.map((drawernav, text, index) =>
                            <ListItem key={drawernav.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                    <ListItemText primary={drawernav.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List>
                        {drawerlist.map((drawerlist, text, index) =>
                            <ListItem key={drawerlist.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                    <ListItemText primary={drawerlist.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const AppBarmin = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})
    (({ theme, open }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

const DrawerMin = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export const DrawersMini = ({ data, header, drawernav, drawerlist }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBarmin position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{
                                marginRight: 5,
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBarmin>
                <DrawerMin variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {drawernav.map((drawernav, text, index) =>
                            <ListItem key={drawernav.id} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {drawernav.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={drawernav.primary} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List>
                        {drawerlist.map((drawerlist, text, index) =>
                            <ListItem key={drawerlist.id} disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {drawerlist.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={drawerlist.primary} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </DrawerMin>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export const DrawersPermanentLeft = ({ data, header, drawerlist, drawernav }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {drawernav.map((drawernav, text, index) =>
                            <ListItem key={drawernav.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                    <ListItemText primary={drawernav.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List>
                        {drawerlist.map((drawerlist, text, index) =>
                            <ListItem key={drawerlist.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                    <ListItemText primary={drawerlist.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export const DrawersPermanentRight = ({ data, header, drawerlist, drawernav }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{ width: `calc(100% - ${drawerWidth}px)`, mr: `${drawerWidth}px` }}
                >
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
                >
                    <Toolbar />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Box>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="permanent"
                    anchor="right"
                >
                    <Toolbar />
                    <Divider />
                    <List>
                        {drawernav.map((drawernav, text, index) =>
                            <ListItem key={drawernav.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                    <ListItemText primary={drawernav.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                    <Divider />
                    <List>
                        {drawerlist.map((drawerlist, text, index) =>
                            <ListItem key={drawerlist.id} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                    <ListItemText primary={drawerlist.primary} />
                                </ListItemButton>
                            </ListItem>
                        )}
                    </List>
                </Drawer>
            </Box>
        </ThemeProvider>
    );
}

export const DrawersClipped = ({ data, header, drawerlist, drawernav }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div">
                            {header}
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {drawernav.map((drawernav, text, index) =>
                                <ListItem key={drawernav.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{drawernav.icon}</ListItemIcon>
                                        <ListItemText primary={drawernav.primary} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                        <Divider />
                        <List>
                            {drawerlist.map((drawerlist, text, index) =>
                                <ListItem key={drawerlist.id} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>{drawerlist.icon}</ListItemIcon>
                                        <ListItemText primary={drawerlist.primary} />
                                    </ListItemButton>
                                </ListItem>
                            )}
                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {data.map((item) => (
                        <Typography paragraph>
                            {item.content}
                        </Typography>
                    ))}
                </Box>
            </Box>
        </ThemeProvider>
    );
}