import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './tabs.scss'
import FormSing from '../FormSing';
import FormReg from '../FormReg';
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ 
      width: '307px',
      margin:`0 ${'auto'}` 
     
    }}>
      <Box className='tabs-nav'>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab className='tabs-nav__item' sx={{color:'#fff', fontSize:'30px'}} label="Enters" {...a11yProps(0)} />
          <Tab className='tabs-nav__item' sx={{color:'#fff', fontSize:'30px'}} label="Register" {...a11yProps(1)} />

        </Tabs>
      </Box>
      <TabPanel className='tabs-nav__body' value={value} index={0}>
        <FormSing/>
      </TabPanel>
      <TabPanel className='tabs-nav__body' value={value} index={1}>
        <FormReg/>
      </TabPanel>

    </Box>
  );
}