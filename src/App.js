import React from 'react';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import './App.css';
import ScanContainer from "./components/ScanContainer";

const theme= createMuiTheme({
  palette: {
    type: 'dark',
  },
  typography:{
    useNextVariants: true,
  }
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        Software Challenge
      </header>
      <ScanContainer />
    </div>
  </MuiThemeProvider>
);

export default App;
