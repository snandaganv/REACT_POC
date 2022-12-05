import * as React from 'react';
import { PropTypes } from "prop-types";
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import muiTheme from "../../../.storybook/muiTheme";
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { Icon } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import EditIcon from '@mui/icons-material/Edit';

export const SpeedDialsBasic = ({ actions, direction, hidden, tooltipOpen, tooltipPlacement, ariaLabel }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel={ariaLabel}
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    direction={direction}
                    hidden={hidden}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={<Icon>{action.icon}</Icon>}
                            tooltipTitle={action.name}
                            tooltipOpen={tooltipOpen}
                            tooltipPlacement={tooltipPlacement}

                        />
                    ))}
                </SpeedDial>
            </Box>
        </ThemeProvider>
    );
}
SpeedDialsBasic.propTypes = {
    actions: PropTypes.array,
    direction: PropTypes.oneOf([
        "up",
        "down",
        "left",
        "right",
    ]),
    hidden: PropTypes.bool,
    tooltipOpen: PropTypes.bool,
    ariaLabel: PropTypes.string,
};
const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));


export const SpeedDialsPlayground = ({ actions }) => {
    const [direction, setDirection] = React.useState('up');
    const [hidden, setHidden] = React.useState(false);

    const handleDirectionChange = (event) => {
        setDirection(event.target.value);
    };

    const handleHiddenChange = (event) => {
        setHidden(event.target.checked);
    };

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                <FormControlLabel
                    control={
                        <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
                    }
                    label="Hidden"
                />
                <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
                    <FormLabel component="legend">Direction</FormLabel>
                    <RadioGroup
                        aria-label="direction"
                        name="direction"
                        value={direction}
                        onChange={handleDirectionChange}
                        row
                    >
                        <FormControlLabel value="up" control={<Radio />} label="Up" />
                        <FormControlLabel value="right" control={<Radio />} label="Right" />
                        <FormControlLabel value="down" control={<Radio />} label="Down" />
                        <FormControlLabel value="left" control={<Radio />} label="Left" />
                    </RadioGroup>
                </FormControl>
                <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
                    <StyledSpeedDial
                        ariaLabel="SpeedDial playground example"
                        hidden={hidden}
                        icon={<SpeedDialIcon />}
                        direction={direction}
                    >
                        {actions.map((action) => (
                            <SpeedDialAction
                                key={action.name}
                                icon={<Icon>{action.icon}</Icon>}
                                tooltipTitle={action.name}
                            />
                        ))}
                    </StyledSpeedDial>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
export const SpeedDialsControlledOpen = ({ actions }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial controlled open example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={<Icon>{action.icon}</Icon>}
                            tooltipTitle={action.name}
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </ThemeProvider>
    );
}

export const SpeedDialsCustomIcon = ({ actions }) => {
    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <SpeedDial
                    ariaLabel="SpeedDial openIcon example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon openIcon={<EditIcon />} />}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={<Icon>{action.icon}</Icon>}
                            tooltipTitle={action.name}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </ThemeProvider>
    );
}

export const SpeedDialsTooltipOpen = ({ actions }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <ThemeProvider theme={muiTheme}>
            <Box sx={{ height: 330, transform: 'translateZ(0px)', flexGrow: 1 }}>
                <Backdrop open={open} />
                <SpeedDial
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    open={open}
                >
                    {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={<Icon>{action.icon}</Icon>}
                            tooltipTitle={action.name}
                            tooltipOpen
                            onClick={handleClose}
                        />
                    ))}
                </SpeedDial>
            </Box>
        </ThemeProvider>
    );
}