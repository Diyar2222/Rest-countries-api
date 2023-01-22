import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { useGlobalContext } from '../../context/Context'
function Search() {
  const {fetchData,darkMode,setCountries,setLoading} = useGlobalContext()
  async function filterByName(name){
        setLoading(true)
        if(name.length>=1){
          const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
          const data = await response.json()
          setCountries(data)
        } else {
          fetchData()
        }
        setLoading(false)
}
  return (
    <div className={`search ${darkMode ? 'dark':''}`}>
        <BsSearch className='search-icon'/>
        <input 
        onChange={(e)=>filterByName(e.target.value)} 
        className={`search-input ${darkMode ? 'dark':''}`} 
        type='text' 
        placeholder='Search by a country'/>
    </div>
  )
}

export default Search