import React, {useState} from 'react'
import { useGlobalContext } from '../../context/Context'
import Country from './Country'
import Loading from '../Loading'

function Countries() {
  const {countries,loading,darkMode} = useGlobalContext()  
  const [countriesPerPage, setCountriePerPage] = useState(12)
  const noCountries = countries.status || countries.message

  const addCountries = () =>{
    if(countriesPerPage>=countries.length){
    }
    setCountriePerPage(prev=>prev+12)
  }
  return (
    loading ? <Loading/> :
    <div className='countries'>
      {!noCountries ? 
        <>
        <div className='countries__grid'>
        {(countries.slice(0,countriesPerPage).map((country,index)=>{
            return <Country 
            key={index}
            apiCode={country.ccn3}
            name={country.name.common} 
            flagImg={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}/>
        }))}
      </div>
        <button 
        className={`countries__show-more-btn ${darkMode?'dark':''}`} 
        onClick={addCountries} 
        disabled={countriesPerPage>=countries.length?true:false}>
          {countriesPerPage>=countries.length?'No more countries':'Show more...'}
        </button>
        </> 
        :<h1 className='countries__no-found'>No countries found...</h1>}
     
    </div>
    
  )
}
export default Countries