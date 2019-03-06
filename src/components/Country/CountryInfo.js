import React from 'react';

export class CountryInfo extends React.Component {
	render() {
		const { countryInfo } = this.props;
		if (!countryInfo) {
			return null;
		}

		return (
			<div>
				<div className="countryinfo__container__col1">
					<div className="row">
						<h2>country</h2>
						<p>{countryInfo[0].name}</p>
					</div>
					<div className="row">
						<img src={countryInfo[0].flag} />
					</div>
				</div>
				<div className="countryinfo__container__col2">
					<div className="countryinfo__container__col2__col1">
						<div className="row">
							<h2>capital</h2>
							<p>{countryInfo[0].capital}</p>
						</div>
						<div className="row">
							<h2>subregion</h2>
							<p>{countryInfo[0].subregion}</p>
						</div>
					</div>
					<div className="countryinfo__container__col2__col2">
						<div className="row">
							<h2>
								area km<sup>2</sup>
							</h2>
							<p>{countryInfo[0].area}</p>
						</div>
						<div className="row">
							<h2>currencies - symbol</h2>
							<p>
								{countryInfo[0].currencies[0].name}
								{countryInfo[0].currencies[0].symbol}
							</p>
						</div>
						<div className="row">
							<h2>language</h2>
							<p>{countryInfo[0].languages[0].name}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CountryInfo;
