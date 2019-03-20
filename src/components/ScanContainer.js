import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ScanList from './ScanList';
import EditScan from './EditScan';
import AddScan from './AddScan';

import './rootScansStyle.css';


class ScanContainer extends React.Component {

    renderScanList = () => <ScanList {...this.props} />;

    editScanList   = () => <EditScan  />;

    addScanList  = () => <AddScan  />;


    render() {
        return (
          <Router>
            <div style={{'display':'grid',  'grid-template-columns': '1fr 1fr 1fr', 'align-text':'center'}}>
              <Link to="/">Scan List</Link>
              <Link to="/edit">Edit Scan</Link>
              <Link to="/add">Add Scan</Link>
            </div><br/>
            <div className='ScanList'>
              <Route exact path="/" component={this.renderScanList} />
              <Route exact path="/edit" component={this.editScanList} />
              <Route exact path="/add" component={this.addScanList} />
            </div>
          </Router>
        );
    }
}

const mapStateToProps = (state) => ({
    scans: state.allScans,
    users: state.allUsers,
    });

export default connect(mapStateToProps)(ScanContainer);
