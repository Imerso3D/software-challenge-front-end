import React, {Component} from 'react';
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import './App.css';
import ScanContainer from "./components/ScanContainer";

const theme= createMuiTheme({
    palette:{
        primary:blue,
    },
    typography:{
        useNextVariants: true,
    }
});

class App extends Component {

    render() {
        return (
          <MuiThemeProvider theme={theme}>
            <div className="App">
              <header className="App-header">
                    Software Challenge
              </header>
              <ScanContainer />
            </div>
          </MuiThemeProvider>
        );
    }
}

export default App;
