import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context/Context'

function Country({name,flagImg,population,region,capital,apiCode}) {
    const {darkMode} = useGlobalContext()
  return (
      <div className={`country ${darkMode ? 'dark' :''}`}>
        <Link to={`country/${apiCode}`}>
          <div className={`${darkMode?'dark':''}`}>
            <img className='country__flags-img' src={flagImg} alt={name}/>
            <div className='country__info'>
                <h2 className='country__info__name'>{name}</h2>
                <div><span>Population: </span>{population.toLocaleString('en-US')}</div>
                <div><span>Region: </span>{region}</div>
                <div><span>Capital: </span>{capital}</div>
            </div> 
          </div>
        </Link>
      </div>
  )
}

export default Country