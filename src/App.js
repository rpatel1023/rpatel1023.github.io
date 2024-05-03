import HomePage from './pages/HomePage/HomePage';
import React, { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IconButton } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App" style={{ backgroundColor: darkMode ? "#1D222C" : "#CED5D7" }}>
        <IconButton onClick={toggleDarkMode} sx={{ position: 'absolute', right: 15, top: 15, color: darkMode ? 'white' : 'black' }}>
          {darkMode ? <DarkModeOutlinedIcon/> : <LightModeOutlinedIcon/>}
        </IconButton>
        <HomePage darkMode={darkMode} />
      </div>
    </ThemeProvider>

  );
}

export default App;
