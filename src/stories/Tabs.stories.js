import { Tabs, TabsComponent } from "../components/tabs-component";

export default {
  title: "Feedback/Tabs",
  component: Tabs,
  argTypes: {
    children: [],
    indicatorColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    allowScrollButtonsMobile: false,
    onChange: {
      action: "change",
    },
    centered: false,
    orientation: {
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    textColor: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => TabsComponent({...args});

export const Default = Template.bind({});

Default.args = {
  indicatorColor: "primary",
  allowScrollButtonsMobile: true,
  ariaLabel: "Story book Tabs",
  centered: false,
  orientation: "horizontal",
  textColor: "primary",
  tabsArray: [
    { index: 0, label: "Item First", icon: "home_icon", position: "start" },
    { index: 1, label: "Item Second", icon: "star_icon", position: "start" },
    {
      index: 2,
      label: "Item Third",
      icon: "calendar_view_day",
      position: "bottom",
    },
  ],
  scrollButtons: "auto",
  variant: "scrollable",
};

Default.parameters = {
  docs: {
    source: {
      code: `
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={\`simple-tabpanel-\${index}\`}
      aria-labelledby={\`simple-tab-\${index}\`}
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
);`
    }
  }
}

