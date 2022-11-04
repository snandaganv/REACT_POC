import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import { PropTypes } from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/material/styles";
import muiTheme from "../../../.storybook/muiTheme";

export const FloatingActionButtons = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
        <Fab variant="extended">
          Navigate
          <NavigationIcon />
        </Fab>
        <Fab disabled aria-label="like">
          <FavoriteIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};
FloatingActionButtons.propTypes = {};
FloatingActionButtons.defaultProps = {};

export const DefaultFloatingActionButton = (props) => {
  const {
    color,
    variant,
    size,
    href,
    disabled,
    disableRipple,
    icons,
    label,
    onClick,
  } = props;
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color={color}
          variant={variant}
          size={size}
          href={href}
          disabled={disabled}
          disableRipple={disableRipple}
          onClick={onClick}
        >
          {label}
          {icons}
        </Fab>
      </Box>
    </ThemeProvider>
  );
};

DefaultFloatingActionButton.propTypes = {
  color: PropTypes.oneOf([
    "default",
    "error",
    "info",
    "inherit",
    "primary",
    "secondary",
    "success",
    "warning",
  ]),
  variant: PropTypes.oneOf(["circular", "extended"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  disableRipple: PropTypes.bool,
  href: PropTypes.node,
  label: PropTypes.node,
};

DefaultFloatingActionButton.defaultProps = {
  color: "primary",
  variant: "extended",
  size: "medium",
  disabled: false,
  disableRipple: false,
  href: "",
  label: "",
};

export const FloatingActionButtonSizes = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
          <AddIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};
FloatingActionButtonSizes.propTypes = {};
FloatingActionButtonSizes.defaultProps = {};

export const FloatingActionButtonExtendedSizes = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab variant="extended" size="small" color="primary" aria-label="add">
          Extended
          <NavigationIcon />
        </Fab>
        <Fab variant="extended" size="medium" color="primary" aria-label="add">
          Extended
          <NavigationIcon />
        </Fab>
        <Fab variant="extended" color="primary" aria-label="add">
          Extended
          <NavigationIcon />
        </Fab>
      </Box>
    </ThemeProvider>
  );
};
FloatingActionButtonExtendedSizes.propTypes = {};
FloatingActionButtonExtendedSizes.defaultProps = {};

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

export const FloatingActionButtonAnimations = (props) => {
  const { tabsArray, boxHeight, boxWidth, bgcolor } = props;
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

  return (
    <ThemeProvider theme={muiTheme}>
      <Box
        sx={{
          bgcolor: bgcolor,
          width: boxWidth,
          position: "relative",
          minHeight: boxHeight,
        }}
      >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            {tabsArray.map((item) => (
              <Tab
                key={item.index}
                label={item.label}
                {...a11yProps(item.index)}
              ></Tab>
            ))}
          </Tabs>
        </AppBar>
        <Box axis={theme.direction === "rtl" ? "x-reverse" : "x"} index={value}>
          {tabsArray.map((item) => (
            <TabPanel key={item.index} value={value} index={item.index}>
              {item.content}
            </TabPanel>
          ))}
        </Box>
        {tabsArray.map((fab, index) => (
          <Zoom
            key={fab.color}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${
                value === index ? transitionDuration.exit : 0
              }ms`,
            }}
            unmountOnExit
          >
            <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
      </Box>
    </ThemeProvider>
  );
};

FloatingActionButtonAnimations.propTypes = {
  tabsArray: PropTypes.array,
  boxHeight: PropTypes.number,
  boxWidth: PropTypes.number,
};

FloatingActionButtonAnimations.defaultProps = {
  tabsArray: [],
  boxHeight: 200,
  boxWidth: 500,
};
