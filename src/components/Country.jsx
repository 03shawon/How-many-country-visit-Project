import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries}) => {

    const [visited, setVisited] = useState(false)
    const btnHandle = () =>{
        // console.log('btn clicked')
        if(visited){
            setVisited(false)
        }
        else{
            setVisited(true)
        }

        handleVisitedCountries(country);
    }
    // console.log(country.population.population)
    // console.log(country.flags.flags.png)
    // console.log(country)
    // console.log(country.languages.languages)
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            
            <img src={country.flags.flags.png} alt={country.flags.flags.png} />
            <h3> name: {country.name.common}</h3>
            <p>Capital: {country.capital.capital} </p>
            <p> population: {country.population.population}</p>
            {/* <p> Languages: {country.languages.languages.eng}</p> */}
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area}      {country.area.area > 200000 ? 'big country': 'small country'}</p>
            
            <button onClick={btnHandle}> {visited ? 'Visited': 'Not Visited'}</button>

        </div>
    );
};

export default Country;