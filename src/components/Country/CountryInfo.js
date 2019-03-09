import React from 'react';

require('./CountryInfo.scss');

export class CountryInfo extends React.Component {
	render() {
		const { countryInfo } = this.props;
		if (!countryInfo) {
			return null;
		}

		return (
			<React.Fragment>
				<div className="CountryInfo">
					<div className="CountryInfo__Location">
						<h2 className="CountryInfo__Location__Name">
							{countryInfo[0].name}
						</h2>
					</div>
					<div className="CountryInfo__Capital">
						<p>{countryInfo[0].capital}</p>
					</div>
					<div className="CountryInfo__Subregion">
						<p>{countryInfo[0].subregion}</p>
					</div>
					<div className="CountryInfo__Flag">
						<img src={countryInfo[0].flag} />
					</div>

					<div className="CountryInfo__Infos">
						<div className="CountryInfo__Infos__Details">
							<span>population</span>
							<p>{countryInfo[0].population}</p>
						</div>
						<div className="CountryInfo__Infos__Details">
							<span>area</span>
							<p>{countryInfo[0].area}</p>
						</div>
						<div className="CountryInfo__Infos__Details">
							<span>languages</span>
							<p>{countryInfo[0].languages[0].name}</p>
						</div>
						<div className="CountryInfo__Infos__Details">
							<span>currencies</span>
							<p className="CountryInfo__Infos__Details__Currency">
								{countryInfo[0].currencies[0].name}
								<span className="CountryInfo__Infos__Details__Currency__Symbol">
									{countryInfo[0].currencies[0].symbol}
								</span>
							</p>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CountryInfo;
