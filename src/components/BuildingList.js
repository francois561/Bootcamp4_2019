import React from 'react';

class BuilingList extends React.Component {

	selectedUpdate(val) {
		this.props.selectedUpdate(val)
	}

	render() {
		const { data } = this.props;

		const buildingList = data

			.filter(directory => {
				return directory.name.toLowerCase().indexOf(this.props.filterText.toLowerCase()) >= 0
				})

			.map(directory => {
				return (
					<tr key={directory.id}
						onClick={() => this.selectedUpdate(directory.id)}>
						
						<td>{directory.code} </td>
						<td> {directory.name} </td>
					</tr>
				);
			});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
