import React from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import uuid from "uuid";

//local dependencies
import './ScanList.css'
import ItemModal from './ItemModal';
import AddItemModal from './AddItemModal';
import {createFullScansList} from "./fullScansList";

class ScanList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scansList: createFullScansList(),
            isReverse: false,
            isModalOpen: false,
            temporaryItem: {
                id: null,
                name: null,
                userName: null,
                elevationMax: null,
                elevationMin: null,
                showModal: false
            }
        };
        this.toItemChange = this.toItemChange.bind(this);
        this.toAddItem = this.toAddItem.bind(this);
        this.toSubmitAddingItem = this.toSubmitAddingItem.bind(this);
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

    modalShow = () => {
        this.setState({isModalOpen: true});
    };

    handleModalHide = () => {
        this.setState({isModalOpen: false})
    };

    toModalHide() {
        return () => {
            let {scansList} = this.state;
            scansList = scansList.map(scan => ({
                ...scan,
                showModal: false,
            }));
            this.setState({scansList})
        }
    }

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
            console.log('itemId: ', itemId);
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

    toAddItem(itemId) {
        return e => {
            console.log('itemId: ', itemId);
            let {temporaryItem} = this.state;
            temporaryItem[e.target.name] = e.target.value;
            this.setState({temporaryItem});
            console.log('temporaryItem: ', temporaryItem);
        }
    }

    toSubmitAddingItem() {
        const id = uuid.v4();
        this.setState(prevState => ({
                temporaryItem: {id, ...prevState.temporaryItem},
                scansList: [...prevState.scansList, this.state.temporaryItem],
                isModalOpen: false
            })
        );
    }

    render() {
        const {
            scansList,
            isReverse,
            isModalOpen,
            temporaryItem,
        } = this.state;

        console.log('scansList: ', scansList);

        const tableLabels = (
            <tr className="bg-secondary">
                <td>Id</td>
                <td>Scan name</td>
                <td>User name</td>
                <td>Max elevation</td>
                <td>Min elevation</td>
                <td>Edit</td>
            </tr>
        );
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

        const addNewScan = (
            <AddItemModal
                show={isModalOpen}
                onHide={this.handleModalHide}
                onItemChange={this.toAddItem}
                onSubmit={this.toSubmitAddingItem}
                scan={temporaryItem}
            />
        );

        return (
            <React.Fragment>
                <div className="btn-toolbar">
                    <div className="btn-group mr-5">
                        <Button className="btn btn-primary btn-toolbar" onClick={this.modalShow}>Add new scan</Button>
                        {addNewScan}
                    </div>
                    <div className="btn-group mr-5">
                        <Button
                            onClick={() => this.sortScanList(scansList, 'name', false, isReverse,)}
                            className="btn btn-info">Sort by Name</Button>
                        <Button onClick={() => this.sortScanList(scansList, 'userName', false, isReverse)}
                                className="btn btn-info">Sort by Username
                        </Button>
                        <Button onClick={() => this.sortScanList(scansList, 'elevationMin', true, isReverse)}
                                className="btn btn-info">Sort by MinElevation
                        </Button>
                        <Button onClick={() => this.sortScanList(scansList, 'elevationMax', true, isReverse)}
                                className="btn btn-info">Sort by MaxElevation
                        </Button>
                    </div>
                </div>
                <table className={"table"}>
                    <tbody>
                    {tableLabels}
                    {items}
                    </tbody>
                </table>
                {itemsButtons}
            </React.Fragment>
        );
    }
}

export default ScanList;
