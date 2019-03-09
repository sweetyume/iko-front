import React from 'react';
import { CountryInfo } from '../../components/Country/CountryInfo';
import SearchBar from '../../components/SearchBar/SearchBar';
import { SimpleMap } from '../../components/Map/Map';

require('./Destinations.scss');

export class Destinations extends React.Component {
	state = {
		countriesList: [],
		matchedCountries: [],
		renderSuggestions: false,
		countryDataToDisplay: '',
		chosenCountry: 'Japan',
		countriesData: ''
	};

	componentDidMount() {
		fetch(`https://restcountries.eu/rest/v2/all`)
			.then(res => {
				return res.json();
			})
			.then(data => {
				console.log(data);
				const countriesData = data.map(country => {
					return {
						country: [
							{
								name: country.name,
								flag: country.flag,
								latlng: country.latlng,
								capital: country.capital,
								region: country.region,
								area: country.area,
								subregion: country.subregion,
								population: country.population,
								currencies: country.currencies,
								languages: country.languages
							}
						]
					};
				});
				this.setState({ countriesData }, () => {
					const country = this.state.chosenCountry;
					this.getCountryData(country);
				});
			});
	}

	handleChosenCountry = country => {
		this.setState({
			chosenCountry: country
		});

		this.getCountryData(country);
	};

	getCountryData = chosenCountry => {
		const { countriesData } = this.state;
		let countryDataToDisplay = [];
		if (countriesData) {
			countryDataToDisplay = countriesData
				.filter(e => {
					return e.country[0].name.includes(chosenCountry);
				})
				.map(e => {
					return e.country[0];
				});
		}
		this.setState({
			countryDataToDisplay: countryDataToDisplay
		});
	};
	// getCountriesList = () => {
	// 	return fetch(`https://restcountries.eu/rest/v2/all`)
	// 		.then(res => {
	// 			return res.json();
	// 		})
	// 		.then(data => {
	// 			console.log(data);
	// 			const countries = data.map(country => {
	// 				return country.name;
	// 			});
	// 			return countries;
	// 		});
	// };
	onChange = async e => {
		const userInput = e.target.value;
		if (userInput.length > 1) {
			const countriesList = await this.getCountriesList(userInput);
			const matchedCountries = countriesList.filter(country => {
				return country.toLowerCase().includes(userInput.toLowerCase());
			});
			console.log('matchedCountries', matchedCountries);
			this.setState({
				matchedCountries: matchedCountries
			});
		} else {
			this.setState({
				matchedCountries: []
			});
		}
	};

	renderSuggestions = () => {
		this.setState({
			renderSuggestions: true
		});
	};

	hideSuggestions = () => {
		this.setState({
			renderSuggestions: false
		});
	};

	render() {
		const {
			countriesData,
			chosenCountry,
			countryDataToDisplay
			// isAuth
		} = this.state;
		console.log(countryDataToDisplay);
		const center = countryDataToDisplay
			? {
					lat: countryDataToDisplay[0].latlng[0],
					lng: countryDataToDisplay[0].latlng[1]
			  }
			: null;

		return (
			<React.Fragment>
				{/* <Section className="Destinations" title="Destinations"> */}
				{/* <input
						type="text"
						name="search"
						autoComplete="off"
						onChange={this.onChange}
						onFocus={this.renderSuggestions}
						onBlur={this.hideSuggestions}
					/> */}
				{/* {isAuth && ( */}
				<div className="Destinations">
					{countriesData ? (
						<SearchBar
							countriesData={countriesData}
							handleChosenCountry={this.handleChosenCountry}
						/>
					) : (
						<p>Loading ...</p>
					)}
					{chosenCountry && countryDataToDisplay ? (
						<section className="CountryInfo">
							<div className="CountryInfo_container">
								<CountryInfo countryInfo={countryDataToDisplay} />
								<div
									style={{
										width: '100%',
										height: '300px',
										float: 'left'
									}}
								>
									<SimpleMap centerMap={center} />
								</div>
							</div>
						</section>
					) : null}
				</div>
				{/* )} */}

				{/* <div>
						{this.state.renderSuggestions && (
							<div>
								{this.state.matchedCountries.map((country, index) => (
									<Link to="/register" key={index}>
										<Country key={index} name={country} />
									</Link>
								))}
							</div>
						)}
					</div> */}
				{/* </Section> */}
			</React.Fragment>
		);
	}
}

export default Destinations;
