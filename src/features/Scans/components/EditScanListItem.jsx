import React from 'react';
import PropTypes from 'prop-types';

import ScanItemForm from './ScanItemForm';
import './EditScanListItem.css'
		
const EditScanListItem = (props) => (
	<tr className="ScanListItem">
		<td colSpan="4">
			<ScanItemForm 
				scan={props.scan}
				users={props.users}
				onFormSubmit={props.onEditScanItem}
			/>
		</td>
	</tr>
);

EditScanListItem.propTypes = {
	onEditScanItem: PropTypes.func,
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
	}),
	users: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}))
};

export default EditScanListItem;