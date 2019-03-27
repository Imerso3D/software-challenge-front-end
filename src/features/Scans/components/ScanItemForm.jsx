import React from 'react';

class ScanItemForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = this.props.scan;
	}

	onNameChange = (e) => {
		this.setState({
			name: e.target.value
		});
	}

	onSelectUser = (e) => {
		this.setState({
			scannedByUserId: e.target.value ? parseInt(e.target.value) : ''
		});
	}

	onElevationMinChange = (e) => {
		this.setState({
			elevationMin: e.target.value ? parseFloat(e.target.value) : ''
		});
	}

	onElevationMaxChange = (e) => {
		this.setState({
			elevationMax: e.target.value ? parseFloat(e.target.value) : ''
		});
	}

	onResetForm = () => {
		this.setState(this.props.scan);
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state);
		this.onResetForm();
	}
	
	render() {
		const { users } = this.props;
		const userOptions = [ 
			<option key="-1" value="">--Select User--</option>, 
			...users.map((user, i) => <option key={user.id} value={user.id}>{user.name}</option>)
		];
		const selectUser = (
			<select 
				value={this.state.scannedByUserId}
				onChange={this.onSelectUser}
				placeholder="Select User"
				required
			>
				{userOptions}
			</select>
		);

		return (
			<form onSubmit={this.onFormSubmit}>
				<div>
					<input 
						type="text"
						value={this.state.name}
						placeholder="Scan Name"
						onChange={this.onNameChange}
						required
					/>
					{selectUser}
					<input
						type="number"
						value={this.state.elevationMin}
						onChange={this.onElevationMinChange}
						placeholder="Elevation Min"
						required
					/>
					<input
						type="number"
						value={this.state.elevationMax}
						onChange={this.onElevationMaxChange}
						placeholder="Elevation Max"
						required
					/>
					<button type="submit">Save</button>
					<button onClick={this.onResetForm}>Cancel</button>
				</div>
			</form>
		);
	}
}

export default ScanItemForm;