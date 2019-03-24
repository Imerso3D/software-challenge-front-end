import React, {Component} from 'react';
import './App.css';
import ScanContainer from "./ScanContainer";

class App extends Component {

    render() {
        return (
            <div className="App">
            <header className="App-header">
            Sortable list of scans
        </header>
        <ScanContainer />
        </div>
    );
    }
}

export default App;
