import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountries,setVisitedCountries]=useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data));


    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited Country');
        // console.log(country);
        const newVisitedCountry = [...visitedCountries,country];
        setVisitedCountries(newVisitedCountry)
    }

    return (

        
            <div>
                <h3>Countries : {countries.length}</h3>
                <div>
                <h3>Visited Countries :{visitedCountries.length} </h3>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
                </div>

                <div className='container'>
            {
                countries.map(country => <Country 
                    handleVisitedCountry={handleVisitedCountry}
                    key={country.cca3} 
                    country={country}></Country>)
            }
        </div>
            </div>
           
    );
};

export default Countries;