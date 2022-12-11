import {
  FloatingActionButtons,
  DefaultFloatingActionButton,
  FloatingActionButtonSizes,
  FloatingActionButtonExtendedSizes,
  FloatingActionButtonAnimations,
} from "../components/fab-component";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab } from "@mui/material";

export default {
  title: "Input/Floating Action Button",
  component: Fab,
  argTypes: {
    color: {
      options: [
        "default",
        "error",
        "info",
        "inherit",
        "primary",
        "secondary",
        "success",
        "warning",
      ],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    onClick: { action: "Clicked" },
  },
};

export const DefaultFloatingActionButtonCircle =
  DefaultFloatingActionButton.bind({});
DefaultFloatingActionButtonCircle.args = {
  color: "default",
  variant: "circular",
  size: "medium",
  disabled: false,
  disableRipple: false,
  href: "",
  icons: <AddIcon />,
};
DefaultFloatingActionButtonCircle.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        color="default"
        variant="circular"
        size="medium"
        disabled=false
        disableRipple=false
      >
        <AddIcon />
      </Fab>
    </Box>`,
      language: "html",
    },
  },
};

export const DefaultFloatingActionButtonExtended =
  DefaultFloatingActionButton.bind({});
DefaultFloatingActionButtonExtended.args = {
  color: "default",
  variant: "extended",
  size: "medium",
  disabled: false,
  disableRipple: false,
  href: "",
  icons: <AddIcon />,
  label: "Fab",
};
DefaultFloatingActionButtonExtended.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab
        color="default"
        variant="extended"
        size="medium"
        disabled=false
        disableRipple=false
        onClick={onClick}
      >
        label="Fab"
        <AddIcon />
      </Fab>
    </Box>`,
      language: "html",
    },
  },
};

export const FloatingActionButton = FloatingActionButtons.bind({});
FloatingActionButton.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& > :not(style)": { m: 1 } }}>
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
    </Box>`,
      language: "react",
      type: "JSX",
    },
  },
};
export const FloatingActionButtonSize = FloatingActionButtonSizes.bind({});
FloatingActionButtonSize.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab size="medium" color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>`,
      language: "html",
    },
  },
};

export const FloatingActionButtonExtendedSize =
  FloatingActionButtonExtendedSizes.bind({});
FloatingActionButtonExtendedSize.parameters = {
  docs: {
    source: {
      code: `<Box sx={{ "& > :not(style)": { m: 1 } }}>
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
    </Box>`,
      language: "html",
    },
  },
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

export const FloatingActionButtonAnimation =
  FloatingActionButtonAnimations.bind({});
FloatingActionButtonAnimation.args = {
  tabsArray: [
    {
      index: 0,
      label: "Item First",
      content: "Content First",
      color: "primary",
      sx: fabStyle,
      icon: <AddIcon />,
    },
    {
      index: 1,
      label: "Item Second",
      content: "Content Second",
      color: "secondary",
      sx: fabStyle,
      icon: <EditIcon />,
    },
    {
      index: 2,
      label: "Item Third",
      content: "Content Third",
      color: "error",
      sx: fabStyle,
      icon: <UpIcon />,
    },
  ],
  boxHeight: 200,
  boxWidth: 500,
  bgcolor: "background.paper",
};
FloatingActionButtonAnimation.parameters = {
  docs: {
    source: {
      code: `const theme = useTheme();
      const [value, setValue] = React.useState(0);
    
      const handleChange = (event: unknown, newValue: number) => {
        setValue(newValue);
      };
    
      const handleChangeIndex = (index: number) => {
        setValue(index);
      };
    
      const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
      };
    
      const fabs = [
        {
          color: 'primary' as 'primary',
          sx: fabStyle as SxProps,
          icon: <AddIcon />,
          label: 'Add',
        },
        {
          color: 'secondary' as 'secondary',
          sx: fabStyle as SxProps,
          icon: <EditIcon />,
          label: 'Edit',
        },
        {
          color: 'inherit' as 'inherit',
          sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
          icon: <UpIcon />,
          label: 'Expand',
        },
      ];
          <Box
      sx={{
        bgcolor: 'background.paper',
        width: 500,
        position: 'relative',
        minHeight: 200,
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
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
      {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))}
    </Box>`,
      language: "html",
    },
  },
};
