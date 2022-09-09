import * as React from 'react';
import { PropTypes } from "prop-types";
import { Tabs } from "@mui/material";
import Tab from '@mui/material/Tab';
import TabPanel from './TablePanel';

const TabsComponent = (props) => {
  const {indicatorColor,ariaLabel,tabsArray,orientation,textColor,allowScrollButtonsMobile,variant,scrollButtons} = props;
  const [value, setValue] = React.useState(tabsArray[0].index);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  return (
    <>
      <Tabs allowScrollButtonsMobile={allowScrollButtonsMobile} variant={variant} scrollButtons={scrollButtons} value={value} onChange={handleChange} indicatorColor={indicatorColor} aria-label={ariaLabel} orientation={orientation} textColor={textColor}>
          {tabsArray.map((item) => <Tab label={item.label} {...a11yProps(item.index)}/>)}
      </Tabs>
      {tabsArray.map((item) => <TabPanel value={value} index={item.index}>{item.label}</TabPanel>)}
      
    </>
  );
}


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

TabsComponent.prototype = {
  indicatorColor:PropTypes.string,
    allowScrollButtonsMobile: PropTypes.boolean,
    ariaLabel: PropTypes.string,
    centered:PropTypes.boolean,
    orientation:PropTypes.string,
    textColor:PropTypes.string,
    tabsArray:PropTypes.array,
    scrollButtons: PropTypes.string,
    variant:PropTypes.string,
};

TabsComponent.defaultProps = {
  indicatorColor:'primary',
    allowScrollButtonsMobile: true,
    ariaLabel: '',
    centered:false,
    orientation:'',
    textColor: '',
    tabsArray:[],
    scrollButtons:'auto',
    variant:'scrollable'
};


export default TabsComponent;