import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context'

function BorderCountries({border}) {
    const [borderCountries, setBounderCountries] = useState([])
    const {darkMode} = useGlobalContext()
    useEffect(()=>{
        const apiByCioc = async(cioc) =>{
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${cioc}`)
            const data = await response.json()
            setBounderCountries(data)
        }
        apiByCioc(border)
    },[border])
    let ccn3 = borderCountries.map(border=>{
        return border.ccn3
    })
  return (
        <Link to={`/country/${ccn3}`}>
            <button className={`border-countries-btns ${darkMode ? 'dark' :''}`}>
            {borderCountries.map(border=>{
                return border.name.common
            })}
            </button>
        </Link>
  )
}

export default BorderCountries
