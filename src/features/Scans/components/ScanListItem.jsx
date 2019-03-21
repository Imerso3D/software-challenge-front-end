import React from 'react';
import PropTypes from 'prop-types';

import './ScanListItem.css'

const ScanListItem = (props) => {

	const onMarkEdit = () => { props.onMarkEditScanItem(props.scan.id) }
	
	return (
		<div className="ScanListItem">
			<span>{props.scan.name}</span>
			<span className="UserName">
				by {props.scan.scannedByUserName}
			</span>
			<span>{`${props.scan.elevationMin} - ${props.scan.elevationMax}`}</span>
			<button onClick={onMarkEdit}>Edit</button>
		</div>
	);
};

ScanListItem.propTypes = {
	onMarkEditScanItem: PropTypes.func,
	scan: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		elevationMin: PropTypes.number,
		elevationMax: PropTypes.number,
		scannedByUserId: PropTypes.number,
		scannedByUserName: PropTypes.string,
	})
};

export default ScanListItem;