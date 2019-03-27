import React from 'react';
import PropTypes from 'prop-types';

import './ScanListItem.css'

const ScanListItem = (props) => {

	const onMarkEdit = () => { props.onMarkEditScanItem(props.scan.id) }
	
	return (
		<tr className="ScanListItem">
			<td>{props.scan.name}</td>
			<td>by {props.scan.scannedByUserName}</td>
			<td>{`${props.scan.elevationMin} - ${props.scan.elevationMax}`}</td>
			<td><button onClick={onMarkEdit}>Edit</button></td>
		</tr>
	);
};

ScanListItem.propTypes = {
	onMarkEditScanItem: PropTypes.func,
	scan: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		elevationMin: PropTypes.number,
		elevationMax: PropTypes.number,
		scannedByUserId: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number
		  ]),
		scannedByUserName: PropTypes.string,
	})
};

export default ScanListItem;