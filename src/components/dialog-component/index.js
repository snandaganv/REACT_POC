import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../../.storybook/muiTheme';


const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
    open: boolean;
    selectedValue: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, selectedValue, open, fullScreen, fullWidth, disableEscapeKeyDown } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value: string) => {
        onClose(value);
    };

    return (
        <Dialog onClose={handleClose} open={open} fullScreen={fullScreen} fullWidth={fullWidth} disableEscapeKeyDown={disableEscapeKeyDown}>
            <DialogTitle>Set backup account</DialogTitle>
            <List sx={{ pt: 0 }}>
                {emails.map((email) => (
                    <ListItem button onClick={() => handleListItemClick(email)} key={email}>
                        <ListItemAvatar>
                            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                <PersonIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={email} />
                    </ListItem>
                ))}
                <ListItem autoFocus button onClick={() => handleListItemClick('addAccount')}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Add account" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export const DialogsSimple = ({ label, fullScreen, fullWidth, disableEscapeKeyDown }) => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Typography variant="subtitle1" component="div">
                    Selected: {selectedValue}
                </Typography>
                <br />

                <Button style={{ textTransform: "capitalize" }} onClick={handleClickOpen} >
                    {label}
                </Button>

                <SimpleDialog
                    fullScreen={fullScreen}
                    fullWidth={fullWidth}
                    selectedValue={selectedValue}
                    onClose={handleClose}
                    open={open}
                    disableEscapeKeyDown={disableEscapeKeyDown}
                />
            </div>
        </ThemeProvider>
    );
}
DialogsSimple.propTypes = {
    label: PropTypes.string,
    fullScreen: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disableEscapeKeyDown: PropTypes.bool,
};



export const DialogsAlert = ({ label, disableSpacing, labelledby, describedby, alerttextdisagree, alerttextagree, dividers }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby={labelledby}
                    aria-describedby={describedby}
                >
                    <DialogTitle>
                        {labelledby}
                    </DialogTitle>
                    <DialogContent dividers={dividers}>
                        <DialogContentText>
                            {describedby}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions disableSpacing={disableSpacing}>
                        <Button onClick={handleClose}>{alerttextdisagree}</Button>
                        <Button onClick={handleClose} autoFocus>
                            {alerttextagree}
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const DialogsSlideAlert = ({ label, labelledby, describedby, alerttextdisagree, alerttextagree }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                    aria-labelledby={labelledby}
                    aria-describedby={describedby}
                >
                    <DialogTitle> {labelledby}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {describedby}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose}>Agree</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export const DialogsForm = ({ alerttextdisagree, alerttextagree, label, describedby }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {describedby}
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                            variant="standard"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>{alerttextdisagree}</Button>
                        <Button onClick={handleClose}>{alerttextagree}</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

export const DialogsCustomized = ({ label, dialogtypo, dividers, submit }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Modal title
                    </BootstrapDialogTitle>
                    <DialogContent dividers={dividers}>
                        {dialogtypo.map((item) => (
                            <Typography gutterBottom>
                                {item.label}
                            </Typography>
                        ))}
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            {submit}
                        </Button>
                    </DialogActions>
                </BootstrapDialog>
            </div>
        </ThemeProvider>
    );
}


export const DialogsFullScreen = ({ label }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar sx={{ position: 'relative' }}>
                        <Toolbar>
                            <IconButton
                                edge="start"
                                color="inherit"
                                onClick={handleClose}
                                aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                                Sound
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <List>
                        <ListItem button>
                            <ListItemText primary="Phone ringtone" secondary="Titania" />
                        </ListItem>
                        <Divider />
                        <ListItem button>
                            <ListItemText
                                primary="Default notification ringtone"
                                secondary="Tethys"
                            />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}

export const DialogsMaxWidth = ({ label, content, selectoptions }) => {
    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleMaxWidthChange = (event) => {
        setMaxWidth(
            // @ts-expect-error autofill of arbitrary value is not handled.
            event.target.value,
        );
    };

    const handleFullWidthChange = (event) => {
        setFullWidth(event.target.checked);
    };

    return (
        <React.Fragment>
            <ThemeProvider theme={muiTheme}>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog
                    fullWidth={fullWidth}
                    maxWidth={maxWidth}
                    open={open}
                    onClose={handleClose}
                >
                    <DialogTitle>Optional sizes</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {content}
                        </DialogContentText>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                m: 'auto',
                                width: 'fit-content',
                            }}
                        >
                            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                                <InputLabel htmlFor="max-width">maxWidth</InputLabel>
                                <Select
                                    autoFocus
                                    value={maxWidth}
                                    onChange={handleMaxWidthChange}
                                    label="maxWidth"
                                    inputProps={{
                                        name: 'max-width',
                                        id: 'max-width',
                                    }}
                                >
                                    <MenuItem value={false}>false</MenuItem>
                                    {selectoptions.map(item => <MenuItem value={item.value}>{item.label}</MenuItem>)}
                                </Select>
                            </FormControl>
                            <FormControlLabel
                                sx={{ mt: 1 }}
                                control={
                                    <Switch checked={fullWidth} onChange={handleFullWidthChange} />
                                }
                                label="Full width"
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </ThemeProvider>
        </React.Fragment>
    );
}

const options = [
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

function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = React.useState(valueProp);
    const radioGroupRef = React.useRef(null);

    React.useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);

    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };

    const handleCancel = () => {
        onClose();
    };

    const handleOk = () => {
        onClose(value);
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Dialog
                sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
                maxWidth="xs"
                TransitionProps={{ onEntering: handleEntering }}
                open={open}
                {...other}
            >
                <DialogTitle>Phone Ringtone</DialogTitle>
                <DialogContent dividers>
                    <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        value={value}
                        onChange={handleChange}
                    >
                        {options.map((option) => (
                            <FormControlLabel
                                value={option}
                                key={option}
                                control={<Radio />}
                                label={option}
                            />
                        ))}
                    </RadioGroup>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCancel}>
                        Cancel
                    </Button>
                    <Button onClick={handleOk}>Ok</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}

ConfirmationDialogRaw.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    value: PropTypes.string.isRequired,
};

export const DialogsConfirmation = ({ }) => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('Dione');

    const handleClickListItem = () => {
        setOpen(true);
    };

    const handleClose = (newValue) => {
        setOpen(false);

        if (newValue) {
            setValue(newValue);
        }
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <List component="div" role="group">
                    <ListItem button divider disabled>
                        <ListItemText primary="Interruptions" />
                    </ListItem>
                    <ListItem
                        button
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="phone ringtone"
                        onClick={handleClickListItem}
                    >
                        <ListItemText primary="Phone ringtone" secondary={value} />
                    </ListItem>
                    <ListItem button divider disabled>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys" />
                    </ListItem>
                    <ConfirmationDialogRaw
                        id="ringtone-menu"
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        value={value}
                    />
                </List>
            </Box>
        </ThemeProvider>
    );
}

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export const DialogsDraggable = ({ label, disableSpacing }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen}>
                    {label}
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    PaperComponent={PaperComponent}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Subscribe
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions disableSpacing={disableSpacing}>
                        <Button autoFocus onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleClose}>Subscribe</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}


export const DialogsScroll = ({ label, disableSpacing, alerttextdisagree, alerttextagree }) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <ThemeProvider theme={muiTheme}>
            <div>
                <Button onClick={handleClickOpen('paper')}>{label}</Button>
                <Button onClick={handleClickOpen('body')}>scroll=body</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    scroll={scroll}
                    aria-labelledby="scroll-dialog-title"
                    aria-describedby="scroll-dialog-description"
                >
                    <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
                    <DialogContent dividers={scroll === 'paper'}>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            {[...new Array(50)]
                                .map(
                                    () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                                )
                                .join('\n')}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions disableSpacing={disableSpacing}>
                        <Button onClick={handleClose}>{alerttextdisagree}</Button>
                        <Button onClick={handleClose}>{alerttextagree}</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </ThemeProvider>
    );
}


