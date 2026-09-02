import { use, useState } from 'react';
import type { countryType } from "../../type";
import Country from '../country/country';
import './countries.css'

export interface countriesProps {
    countriesPromise: Promise<countryType[]>
}


export default function Countries({ countriesPromise } : countriesProps){
    const [visitedCountry, setVisitedCountry] = useState<countryType[]>([]);
    const [visitedFlag, setVisitedFlag] = useState<string[]>([])

    const countries = use(countriesPromise)

    const handleVisitedCountry = (country: countryType):void => {
        
        // good way to check
        const exist = visitedCountry.find(c => c.ccn3.ccn3 === country.ccn3.ccn3);
        if (exist){
            const remainingCountry = visitedCountry.filter(c => c.ccn3.ccn3 !== country.ccn3.ccn3);
            setVisitedCountry(remainingCountry)
        }
        else{
            const newSetVisitedCountry = [...visitedCountry, country];
            setVisitedCountry(newSetVisitedCountry)
        }
    }

    // bad way to check
    const handleVisitedFlag = (flag : string):void => {
        console.log("flag visited", flag);

        if (visitedFlag.includes(flag)){
            const remainingFlag = visitedFlag.filter(f => f !== flag);
            setVisitedFlag(remainingFlag)
        }
        else{
            const newSetVisitedFlag = [...visitedFlag, flag];
            setVisitedFlag(newSetVisitedFlag)
        }

    }

    // console.log(countries);
    return(
        <div>
            <h2>Countries: {countries.length}</h2>
            <h4>Visited Country: {visitedCountry.length}</h4>
            <h4>Visited Flag: {visitedFlag.length}</h4>

            <div>
                <ul>
                    {
                        visitedCountry.map(country => <li key={country.ccn3.ccn3}>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className='visited-flegs'>
                {
                visitedFlag.map((flag, index) => <img key={index} src={flag} alt="visited flag" />)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country => <Country 
                    key={country.ccn3.ccn3} 
                    country={country}
                    handleVisitedCountry = {handleVisitedCountry}
                    handleVisitedFlag = {handleVisitedFlag}
                    ></Country>)
                }
            </div>
            
        </div>
    )
}