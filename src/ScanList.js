import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'

//local dependencies
import './ScanList.css'
import ItemModal from './ItemModal';
import {createFullScansList} from "./fullScansList";

class ScanList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scansList: createFullScansList(),
            isReverse: false,
        };
        this.toItemChange = this.toItemChange.bind(this);
    };


    sortScanList(dataType, sortByElement, isItNumeric, isReverse) {

        const sortedList = isItNumeric ? (
            isReverse ?
                (
                    dataType.reverse((firstItem, secondItem) => firstItem[sortByElement] - secondItem[sortByElement])
                ) : (
                    dataType.sort((firstItem, secondItem) => firstItem[sortByElement] - secondItem[sortByElement])
                )
        ) : (
            isReverse ?
                (
                    dataType.reverse((firstItem, secondItem) => firstItem[sortByElement].localeCompare(secondItem[sortByElement]))
                ) : (
                    dataType.sort((firstItem, secondItem) => firstItem[sortByElement].localeCompare(secondItem[sortByElement]))
                )
        );

        this.setState(
            {
                scansList: sortedList,
                isReverse: !isReverse
            })
    };

    toFormUpdate() {
        return e => {
            const field = e.target.name;
            const {form} = this.state;
            form[field] = e.target.value;
            this.setState({form})
        }
    }

    toModalHide() {
        return () => {
            let {scansList} = this.state;
            scansList = scansList.map(scan => ({
                ...scan,
                showModal: false,
            }));
             this.setState({ scansList })
        }
    }

    /*toModalShow() {
        return e => {
            e.preventDefault();

            this.setState({showModal: true})
        }
    }*/

    toEditItem(selectedItem) {
        return e => {
            e.preventDefault();
            let {scansList} = this.state;
            scansList = scansList.map(item => ({
                ...item,
                showModal: selectedItem.id === item.id,
            }));
            this.setState({scansList})
        }
    }

    toItemChange(itemId) {
        return e => {
            console.log('itemId: ',itemId);
            let {scansList} = this.state;
            scansList = scansList.map(item => {
                if (item.id === itemId) {
                    item[e.target.name] = e.target.value
                }
                return item
            });
            this.setState({scansList})
        }
    }

    render() {
        const {
            scansList,
            isReverse,
        } = this.state;

        console.log('scansList: ',scansList);
        const items = scansList.map((scan, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{scan.name}</td>
                <td>{scan.userName}</td>
                <td>{scan.elevationMax}</td>
                <td>{scan.elevationMin}</td>
                <td>
                    <Button
                        className="btn btn-primary"
                        onClick={this.toEditItem(scan)}
                    >
                        Edit
                    </Button>
                </td>
            </tr>
        );

        const itemsButtons = scansList.map((scan) => (
            <ItemModal
                key={scan.id}
                show={scan.showModal}
                onHide={this.toModalHide()}
                onItemChange={this.toItemChange}
                scan={scan}
            />
        ));

        /*const addNewScan = () => (
            <ItemModal
                key={index}
                show={scan.showModal}
                onHide={this.toModalHide()}
                onItemChange={this.toItemChange}
                scan={scan}
            />
        );
*/
        return (
            <React.Fragment>
                <row>
                    <Button onClick={() => this.sortScanList(scansList, 'name', false, isReverse,)}
                            className="btn btn-primary">Sort by
                        Name</Button>
                    <Button onClick={() => this.sortScanList(scansList, 'userName', false, isReverse)}
                            className="btn btn-primary">Sort by
                        Username
                    </Button>
                    <Button onClick={() => this.sortScanList(scansList, 'elevationMin', true, isReverse)}
                            className="btn btn-primary">Sort by
                        MinElevation
                    </Button>
                    <Button onClick={() => this.sortScanList(scansList, 'elevationMax', true, isReverse)}
                            className="btn btn-primary">Sort by
                        MaxElevation
                    </Button>
                </row>
                <table className={"table"}>
                    <tbody>
                    {items}
                    </tbody>
                </table>
                {itemsButtons}
            </React.Fragment>
    );
    }
    }

    export default ScanList;


/*import React from 'react';
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

export default ScanList;*/

