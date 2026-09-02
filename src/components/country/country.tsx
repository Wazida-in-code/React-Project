import { useState } from "react";
import type { countryType } from "../../type";
import './country.css'

export interface CountryProps{
    country: countryType
    handleVisitedCountry: (country: countryType) => void
    handleVisitedFlag: (flag: string) => void
}

export default function Country({ country, handleVisitedCountry, handleVisitedFlag }: CountryProps){

    const [visited, setVisited] = useState<boolean>(false);

    const handleVisit = () => {
        setVisited(!visited)
        handleVisitedCountry(country);
    }

    return(
        <div className={`country ${visited? 'country-visited' : ''}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h4>Capital: {country.capital.capital}</h4>
            <p>Population: {country.population.population}</p>
            <button onClick={handleVisit} className={`country ${visited? 'country-visited-btn' : 'country-not-visited'}`}>
                {visited? "Visited" : "Mark as visited"}
            </button>
            <button
            onClick={() => handleVisitedFlag(country.flags.flags.png)}
            >Add flag as visited</button>
        </div>
    )
}