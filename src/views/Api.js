import React from 'react';
import Section from '../components/Section/Section';
import Country from '../components/Country/Country';

class Api extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			country: []
		};
	}
	onChangeHandle = event => {
		this.setState({ search: event.target.value });
	};
	onSubmit = event => {
		event.preventDefault();
		const { search } = this.state;
		fetch(`https://restcountries.eu/rest/v1/name/${search}`)
			.then(response => response.json())
			.then(data => {
				this.setState({ country: data });
			});
	};

	render() {
		// let response = JSON.stringify(this.state.country);
		return (
			<Section className="Destination" title="Destinations">
				<div className="Destinations_Search">
					<form onSubmit={this.onSubmit}>
						<input
							id="country-name"
							placeholder="e.g. Poland"
							type="text"
							onChange={this.onChangeHandle}
							value={this.state.search}
						/>
					</form>
				</div>
				<div className="Destinations_Result">
					<div className="Country">
						{this.state.country.map(country => (
							<Country
								key={country.name}
								name={country.name}
								region={country.region}
								capital={country.capital}
								population={country.population}
							/>
						))}
					</div>
				</div>
			</Section>
		);
	}
}

export default Api;
