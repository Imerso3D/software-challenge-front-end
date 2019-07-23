import React from 'react';
import { Card, Col, Row } from 'antd' ;
import './ScanList.css'


class ScanList extends React.Component {
    

    render() {
        return (
            <div>
                
                 <div className="Header">
                    Scans:
                </div>
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={16} >
                   {console.log()}
                {this.props.scans.map((scan, i) => {
                        return (
                            
                        <Col  key={i} span={12}>
                            <Card title={scan.name} bordered={false}>
                           By: {this.props.users[scan.scannedByUserId].name}
                            </Card>
                        </Col>
                        );
                    })}
                       </Row>
                </div>
               
            </div>
        );
    }
}

export default ScanList;
