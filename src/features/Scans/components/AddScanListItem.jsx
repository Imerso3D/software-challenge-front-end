import React from 'react';
import PropTypes from 'prop-types';

import ScanItemForm from './ScanItemForm';

const getInitialState = ({
	id: '',
	name: '',
	elevationMin: '',
	elevationMax: '',
	scannedByUserId: ''
});

const AddScanListItem = (props) => (
	<ScanItemForm 
		scan={getInitialState}
		users={props.users}
		onFormSubmit={props.onAddScanItem}
	/>
);

AddScanListItem.propTypes = {
	onAddScanItem: PropTypes.func,
	users: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		name: PropTypes.string
	}))
};

export default AddScanListItem;