import React, {useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import { useGlobalContext } from '../context/Context'
import BorderCountries from '../components/CountriesSection/BorderCountries'
import Loading from '../components/Loading'


function CountryPage() {
    const {id} = useParams()
    const [countryData,setCountryData] = useState([])
    const {darkMode,loading,setLoading} = useGlobalContext()
    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`)
            const data = await response.json()
            setCountryData(data)     
            setLoading(false)
        }
        fetchData()
    },[id])
    
  return (
    loading ? <Loading/> :
    <div>
        <Link to='/'><button className={`back-btn ${darkMode ? 'dark':''}`}><BsArrowLeft/>Back</button></Link>
        {countryData.map(country=>{
            const {flags,
                name,
                population,
                region,
                subregion,
                capital,
                tld,
                currencies,
                languages,
                borders} = country
            const languageList = Object.values(languages);
            return <section className='country-page' key={id}>
                    <img className='country-page-img' src={flags.png} alt={name.common}/>
                    <div className='country-page-right'>
                        <h2 className='country-page-name'>{name.common}</h2>
                        <div className='country-page-info'>
                            <div className='country-page-info-1'>
                                <div><span>Native name: </span>{name && Object.values(name.nativeName)[0].official}</div>
                                <div><span>Population: </span>{population.toLocaleString('en-US')}</div>
                                <div><span>Region: </span>{region && region}</div>
                                <div><span>Sub Region: </span>{subregion && subregion}</div>
                                <div><span>Capital: </span>{capital && capital}</div>
                            </div>
                            <div className='country-page-info-2'>
                                <div><span>Top Level Domain: </span>{tld && tld}</div>
                                <div><span>Currencies: </span>{currencies ? Object.values(currencies)[0].name : ''}</div>
                                <div>
                                    <span>Languages: </span> {languageList.map(lang=>{
                                        if(lang===languageList[languageList.length-1]){
                                            return <span className='light-font-weight' key={lang}>{lang}</span>
                                        }
                                        return <span className='light-font-weight' key={lang}>{lang}, </span>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className='border-countries'>
                            <h5>Border Countries:</h5> 
                            <div className={`border-countries-box`}>
                                {borders && borders.map((border,index)=>{
                                return <BorderCountries key={index} border={border}/>
                                })}
                            </div>
                        </div>
                    </div>
                </section>
        })}
    </div>
  )
}

export default CountryPage