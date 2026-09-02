import { useState } from "react";
import type { countryType } from "../../type";
import './country.css'

export interface CountryProps{
    country: countryType
}

export default function Country({ country }: CountryProps){

    const [visited, setVisited] = useState<boolean>(false)
    const handleVisit = () => {
        setVisited(!visited)
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
        </div>
    )
}