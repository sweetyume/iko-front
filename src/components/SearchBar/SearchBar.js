import React from 'react';

require('./SearchBar.scss');

export class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchWord: '',
			countryPropositions: '',
			propositionsList: '',
			index: 0
		};
	}

	handlSearchOnChange = event => {
		let word = event.target.value;
		this.setState({
			searchWord: word
		});

		word.length >= 3 ? this.filterCountriesData(word) : null;
	};

	filterCountriesData = searchWord => {
		const countries = this.props.countriesData.slice();
		let countriesProposition = countries
			.filter(e => {
				return e.country[0].name
					.toLowerCase()
					.includes(searchWord.toLowerCase());
			})
			.map(e => {
				return e.country[0].name;
			});

		this.createPropositionList(countriesProposition, searchWord);
	};

	createPropositionList = (countries, searchWord) => {
		let propositions =
			countries.length >= 1 ? (
				countries.map((country, id) => {
					let word = searchWord.toLowerCase();
					let startIndex = country.toLowerCase().indexOf(word);
					let endIndex = word.length + startIndex;
					let begining = country.slice(0, startIndex);
					let middle = country.slice(startIndex, endIndex);
					let end = country.slice(word.length + startIndex);
					return (
						<li
							key={country + id}
							onClick={e => this.handleOnChose(e, country)}
							className="searchbar__list__item"
						>
							{begining}
							<span style={{ fontWeight: 'bold', fontFamily: 'inherit' }}>
								{middle}
							</span>
							{end}
						</li>
					);
				})
			) : (
				<li className="searchbar__list__item">This country doesn't exist.</li>
			);

		this.setState({
			countryPropositions: countries,
			propositionsList: propositions
		});
	};

	handleOnChose = (event, el) => {
		event.preventDefault();
		const { handleChosenCountry } = this.props;

		if (typeof handleChosenCountry == 'function') {
			handleChosenCountry(el);
		}
		this.setState({
			countryPropositions: '',
			searchWord: ''
		});
	};

	handleClickOutside(event) {
		const domNode = this.refs.propList;

		if (!domNode || !domNode.contains(event.target)) {
			this.setState({
				countryPropositions: '',
				searchWord: ''
			});
		}
	}

	handleOnMouseEnter(event) {
		const domNode = this.refs.propList.children;
		for (let i = 0; i < domNode.length; i++) {
			if (domNode[i].classList.contains('activeKey')) {
				domNode[i].classList.remove('activeKey');
			}
		}
		this.setState({
			index: 0
		});
	}

	componentDidMount() {
		document.addEventListener(
			'click',
			this.handleClickOutside.bind(this),
			true
		);
		this.refs.propList.addEventListener(
			'mouseover',
			this.handleOnMouseEnter.bind(this),
			true
		);
	}

	componentWillUnmount() {
		document.removeEventListener(
			'click',
			this.handleClickOutside.bind(this),
			true
		);
	}

	render() {
		const { searchWord, propositionsList } = this.state;
		return (
			<div className="SearchBar">
				<input
					type="text"
					className="SearchBar__Input"
					value={searchWord}
					onChange={this.handlSearchOnChange}
					tabIndex="0"
					placeholder="Type country name in English"
				/>
				<ul
					style={{ display: searchWord.length >= 3 ? 'block' : 'none' }}
					className="SearchBar__List"
					ref="propList"
				>
					{propositionsList}
				</ul>
			</div>
		);
	}
}

export default SearchBar;
