import React from "react";
import axios from 'axios'

class Destinations extends React.Component {
    constructor() {
        super();
        this.state = {
            searchText: "",
            country: [],
            activeSuggestions: 0,
            filteredSuggestions: [],
            showSuggestions: false
        };
    }
    onChangeHandle = (event) => {
        this.setState({ searchText: event.target.value });
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { searchText } = this.state;
        fetch(`https://restcountries.eu/rest/v1/name/${searchText}`)
        .then(response => response.json())
        .then( data => {
                this.setState({ country: data });
            }
        );
    }

    render() {
        let response = JSON.stringify(this.state.country);
        return (
            <main>
                <section class="search">
                    <form onSubmit={this.onSubmit}>
                        <h2>Country search engine</h2>
                        <input 
                            id="country-name" 
                            placeholder="e.g. Poland" 
                            type="text" 
                            onChange={this.onChangeHandle}
                            value={this.state.searchText}
                        />
                    </form>
                </section>
             <section class="results">
               <div class="country-info">
                  <ul id="countries">
                    {this.state.country.map(country => <li key={country.name}><p>{country .name}</p>
                    <p>{country.region}</p></li>)}
                  </ul>
              </div>
            </section>
          
            </main>
        );
    }
}

export default Destinations