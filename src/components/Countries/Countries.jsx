import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'
// import { Linter } from "eslint";


const Countries = () => {
    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([])

    const handleVisitedcountry = (country)=>{
        const newVisited = [...visitedCountries,country];
        setVisitedCountries(newVisited);
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            <h5>visited countries:{visitedCountries.length}</h5>
            <ul>
                {visitedCountries.map(country=> <li key={country.cca3}> {country.name.common}</li>)}
            </ul>
            <div className="countries-container">
            {
                countries.map(country=><Country key={country.cca3} handleVisitedcountry={handleVisitedcountry} country ={country}></Country>)
            }
            </div>
            
        </div>
    );
};

export default Countries;