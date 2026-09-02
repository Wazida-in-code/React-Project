import { use } from 'react';
import type { countryType } from "../../type";
import Country from '../country/country';
import './countries.css'

export interface countriesProps {
    countriesPromise: Promise<countryType[]>
}


export default function Countries({ countriesPromise } : countriesProps){
    const countries = use(countriesPromise)
    console.log(countries);
    return(
        <div>
            <h2>Countries: </h2>
            
            <div className='countries'>
                {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
            
        </div>
    )
}