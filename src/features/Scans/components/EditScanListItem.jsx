import React from 'react';
import PropTypes from 'prop-types';

import ScanItemForm from './ScanItemForm';
		
const EditScanListItem = (props) => (
	<ScanItemForm 
		scan={props.scan}
		users={props.users}
		onFormSubmit={props.onEditScanItem}
	/>
);

EditScanListItem.propTypes = {
	onEditScanItem: PropTypes.func,
	scan: PropTypes.shape({
		id: PropTypes.string,
		name: PropTypes.string,
		elevationMin: PropTypes.number,
		elevationMax: PropTypes.number,
		scannedByUserId: PropTypes.number,
		scannedByUserName: PropTypes.string,
	}),
	users: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}))
};

export default EditScanListItem;