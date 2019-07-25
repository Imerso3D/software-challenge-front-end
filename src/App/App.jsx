import React, {Component} from 'react';
import './App.css';
import {ScanContainer} from "containers";

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Software Challenge
                </header>
                <ScanContainer />
            </div>
        );
    }
}

export default App;
