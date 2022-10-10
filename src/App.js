
import * as React from 'react';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Dashbord from './pages/Dashbord';
import LogIn from './pages/LogIn';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: '#fff',
        main: '#fff',
        dark: '#002884',
        contrastText: '#fff',
      }
   
    }
  });

  console.log(theme)
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="dashbord" element={<Dashbord />} />
        </Routes>
      </div>
    </ThemeProvider>

  );
}

export default App;
