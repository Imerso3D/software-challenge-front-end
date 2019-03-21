import React from 'react';
import { HashRouter as Router, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';

import ScanList from './ScanList';
import AddScan from './AddScan';

import './rootScansStyle.css';


class ScanContainer extends React.Component {

  renderScanList = () => <ScanList {...this.props} />;

  addScanList  = () => <AddScan  />;

  linkStyle =()=> ({ 'width':'60%', marginLeft:'20%', marginTop: '10px','display':'grid',  'grid-template-columns': '1fr 1fr', 'align-text':'center'});

  render() {
    return (
      <Router>
        <div style={this.linkStyle()}>
          <Link to="/" style={{'color':'gray'}}>Scan List</Link>
          <Link to="/add" style={{'color':'gray'}}>Add Scan</Link>
        </div>
        <br />
        <div className='ScanList'>
          <Route exact path="/" component={this.renderScanList} />
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
