import React, { Component } from "react";

export default class country extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCountry: "in" };
  }

  handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    this.setState({ selectedCountry });
    this.props.onCountryChange(selectedCountry);
  };

  render() {
    const countryNames = {
      ar: "Argentina",
      au: "Australia",
      be: "Belgium",
      br: "Brazil",
      ca: "Canada",
      de: "Germany",
      eg: "Egypt",
      fr: "France",
      gb: "United Kingdom",
      id: "Indonesia",
      in: "India",
      it: "Italy",
      jp: "Japan",
      mx: "Mexico",
      ng: "Nigeria",
      ru: "Russia",
      sa: "Saudi Arabia",
      tr: "Turkey",
      ua: "Ukraine",
      us: "United States",
    };

    const options = Object.entries(countryNames).map(([code, name]) => (
      <option key={code} value={code}>
        {name}
      </option>
    ));

    return (
      <div className="container">
        <select
          className="form-select"
          aria-label="Default select example"
          value={this.state.selectedCountry}
          onChange={this.handleCountryChange}
        >
          {options}
        </select>
      </div>
    );
  }
}
