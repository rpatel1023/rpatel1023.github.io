import React from 'react';
import { Tab, Tabs } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import Box from '@mui/material/Box';
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import HtmlIcon from '@mui/icons-material/Html';
import Projects from '../Projects/Projects';
import About from '../About/About';
import Contact from '../Contact/Contact';

import './Editor.css'; 

const useStyles = makeStyles(theme => ({
  customTabRoot: props => ({
    color: "#73C991",
    backgroundColor: props.darkMode ? "#181818": "#AEB8BB",
    flexGrow: 1,
    minWidth: 0,
  }),
  customTabIndicator: {
    backgroundColor: "#1F1F1F",
    height: 6,
    boxShadow: '0 2px 2px -2px white'
  }
}));



const ColorTabs = ({darkMode}) => {
  const [value, setValue] = React.useState(0);

  const tabContents = [
    <Projects darkMode={darkMode}/>,
    <About darkMode={darkMode}/>,
    <Contact darkMode={darkMode}/>
  ]

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles({darkMode});
  return (
    <Box>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor='inherit'
        classes={{
          root: classes.customTabRoot,
          indicator: classes.customTabIndicator
        }}
      >
        <Tab label="Projects" icon={<HtmlIcon sx={{ fontSize: 20 }} />} iconPosition="start" style={{ color: darkMode ? "#73C991": "#4E2851",   fontSize: '11px', fontFamily: "system-ui", }} />
        <Tab label="About" icon={<JavascriptIcon sx={{ fontSize: 20 }} />} iconPosition="start" style={{ color: darkMode ? "#E5B46F": "#184255", fontSize: '11px', fontFamily: "system-ui", }} />
        <Tab label="Contact " icon={<CssIcon sx={{ fontSize: 20 }} />} iconPosition="start" style={{ color: darkMode ? "#C1CCCC": "#272726",  fontSize: '11px', fontFamily: "system-ui", }} />
      </Tabs>
      {tabContents[value]}
    </Box>
  );
}

const Editor = ({darkMode}) => {
  const terminalColor = darkMode ? "darkMode" : "lightMode"

  return (
    <Box sx={{gap: 1, display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "flex-start", minHeight: "60vh", width: "100%"}}>
    <div className='editor' style={{ width: '100%' }}>
      <div className={`editor-header ${terminalColor}`} style={{ width: '100%' }}>
        <div className="header-button red" />
        <div className="header-button yellow" />
        <div className="header-button green" />
      </div>
      <div style={{ marginBottom: '5vh', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Box className={`page ${terminalColor}`} style={{ width: '100%'}}>
          <ColorTabs darkMode={darkMode}/>
        </Box>
      </div>
    </div>
    </Box>
  );
};

export default Editor;