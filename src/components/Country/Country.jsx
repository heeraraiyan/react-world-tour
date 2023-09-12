
import { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedcountry}) => {
    const [visited,setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }
   
    console.log(country)
    const {flags,name,area,population,cca3} = country;
    return (
        <div className= {`'country' ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color: visited ? 'red' : 'green'}}>Name {name?.common} </h3>
            <img  src={flags.png} alt="" />
            <p>population: {population}</p>
            <p>area:{area} </p>
            <p>Code:{cca3} </p>
            <button onClick={()=>handleVisitedcountry(country)}>Mark as Visited</button>
            <button onClick={handleVisited}>{visited ? 'visited' : 'visit'}</button>
            {visited ? 'i visited this country' : 'i want to visit'}

        </div>
    );
};

export default Country;