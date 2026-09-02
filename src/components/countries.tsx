import { use } from 'react';
import type { countryType } from "../type";

export interface countriesProps {
    countriesPromise: Promise<countryType[]>
}


export default function Countries({ countriesPromise } : countriesProps){
    const countries = use(countriesPromise)
    console.log(countries);
    return(
        <div>
            <h2>Countries: </h2>
            <ul>
                {
                countries.map(country => <li>{country.name.common}</li>)
                }
            </ul>
        </div>
    )
}