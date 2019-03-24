import React from 'react';
import './ScanList.css'


class ScanList extends React.Component {

    render() {

        const items = this.props.scansList.map((scan,i) => {
            return (
                <div
                    className="ScanListItem"
                    key={i}
                >
                    {scan.name}
                    <div className="UserName">
                        by {scan.userName}
                    </div>
                </div>
            );
        });

        return (
            <div>
                <div className="Header">
                    Scans:
                </div>
                <div className="ScanList">
                    {items}
                </div>
            </div>
        );
    }
}

export default ScanList;
