import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
    )
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => {
        console.error("Failed to fetch countries:", err);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for countries..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="searchBar"
      />
      <div className="cardContainer">
        {filteredCountries.map((country) => (
          <div className="countryCard" key={country.common}>
            <img src={country.png} alt={`${country.common} flag`} />
            <p>{country.common}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
