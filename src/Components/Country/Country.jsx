import { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountry}) => {
    console.log(country)
    const {name,flags,population,area,cca3} = country;
    const [visited,setVisited]=useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name : {name.common}</h2>
            <img className='photo' src={flags.png} alt="" />
            <h2>Population : {population}</h2>
            <h2>Area : {area}</h2>
            <h2>Code : {cca3}</h2>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
           <br />
           <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            {/* {visited ? 'I Have Visited This Country' : 'I Want To Visit This Contry'} */}
        </div>
    );
};

export default Country;