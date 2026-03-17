import { use, useState } from "react"
import Country from "./Country"
// import './countries.css'
import './Countries.css'

export default function Countries({countriesPromise}){
    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    // console.log(countriesData);
    // console.log(countries)

    const [visitedCoutries, setVisitedCountries]=useState ([])
    const handleVisitedCountries = (country)=>{
        // console.log('visited country clicked', country)
        const newVisitedCountries = [...visitedCoutries, country]
        setVisitedCountries(newVisitedCountries);
    }

    return(
        <div>
            <h1> Countries: {countries.length} </h1>
            <h3>Total Country Visited: {visitedCoutries.length} </h3>
            <ol>
                {
                    visitedCoutries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className="countries"> 
                {
                countries.map(country => <Country key={country.cca3.cca3}
                handleVisitedCountries = {handleVisitedCountries}
                country={country}>
                    

                </Country>)
            }
            </div>
        </div>
    )
}
