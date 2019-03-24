import React from 'react';
import {Button} from 'react-bootstrap';

//local dependencies
import ScanList from './ScanList';
import {createFullScansList} from "./fullScansList";


class ScanContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scansList: createFullScansList(),
            isReverse: false,
        };
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

    render() {
        const {
            scansList,
            isReverse,
        } = this.state;

        return (
            <div>
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

                <ScanList
                    scansList={this.state.scansList}
                />
            </div>
        );
    }
}

export default ScanContainer;
