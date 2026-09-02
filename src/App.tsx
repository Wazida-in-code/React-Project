import { Suspense } from 'react';
import './App.css'
import type { countryType } from './type';
import Countries from './components/countries/countries';


// step-1 -> creat a promise to load data
const countriesPromise = async():Promise<countryType[]> => {
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}


function App() {


   return (
    <>
    <h2>React-Project</h2>

    <Suspense fallback={<div>Loading...</div>}>
      <Countries countriesPromise={countriesPromise()}></Countries>
    </Suspense>

    </>


 )
}

export default App