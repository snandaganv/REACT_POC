import { Icon, Tab as TabMUI, Tabs as TabsMUI } from "@mui/material";
// import TabPanel from "./TabPanel"
import { Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { PropTypes } from "prop-types";
import * as React from "react";
import muiTheme from "../../../.storybook/muiTheme";

export const Tabs = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <TabsMUI {...props}>{props.children}</TabsMUI>
    </ThemeProvider>
  );
};

export const Tab = (props) => {
  return (
    <ThemeProvider theme={muiTheme}>
      <TabMUI {...props}>{props.children}</TabMUI>
    </ThemeProvider>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const TabsComponent = (props) => {
  const {
    indicatorColor,
    ariaLabel,
    tabsArray,
    orientation,
    textColor,
    allowScrollButtonsMobile,
    variant,
    scrollButtons,
  } = props;
  const [value, setValue] = React.useState(tabsArray[0].index);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        variant={variant}
        scrollButtons={scrollButtons}
        value={value}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        aria-label={ariaLabel}
        orientation={orientation}
        textColor={textColor}
      >
        {tabsArray.map((item) => (
          <Tab
            icon={<Icon fontSize="small">{item.icon}</Icon>}
            iconPosition={item.position}
            label={item.label}
            {...a11yProps(item.index)}
            style={{ textTransform: "none" }}
          />
        ))}
      </Tabs>
      {tabsArray.map((item) => (
        <TabPanel value={value} index={item.index}>
          {item.label}
        </TabPanel>
      ))}
    </>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

TabsComponent.prototype = {
  indicatorColor: PropTypes.string,
  allowScrollButtonsMobile: PropTypes.boolean,
  ariaLabel: PropTypes.string,
  centered: PropTypes.boolean,
  orientation: PropTypes.string,
  textColor: PropTypes.string,
  tabsArray: PropTypes.array,
  scrollButtons: PropTypes.string,
  variant: PropTypes.string,
};

TabsComponent.defaultProps = {
  indicatorColor: "primary",
  allowScrollButtonsMobile: true,
  ariaLabel: "",
  centered: false,
  orientation: "",
  textColor: "",
  tabsArray: [],
  scrollButtons: "auto",
  variant: "scrollable",
};
