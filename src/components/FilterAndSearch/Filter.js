import React, { useRef, useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useGlobalContext } from '../../context/Context'

function FilterByDiv() {
    const {filterValue,
      setFilterValue,
      fetchData,
      setLoading,
      setCountries,
      darkMode} = useGlobalContext()
      
    const [isFilterMenuActive, setIsFilterMenuActive] = useState(false)
    const domTarget = useRef()
    function reset(){
        fetchData()
        setFilterValue('')
        setIsFilterMenuActive(false)
    }
    async function filterByRegion(e){
        // if(e.target.closest('.filter-reset-btn')) return 
        setLoading(true)
        if(domTarget.current === e.target) return 
        const response = await fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
        const data = await response.json()
        setCountries(data)
        setFilterValue(e.target.innerText)
        setIsFilterMenuActive(false)
        setLoading(false)
  }
  return (
    <div className={`filter ${darkMode ? 'dark':''}`}>
        <input
        className={`filter__input ${darkMode ? 'dark':''}`}
        type="text"
        placeholder="Filter by Region"
        value={filterValue}
        readOnly
        onClick={()=>setIsFilterMenuActive(prev=>!prev)}
      />
      {isFilterMenuActive ? (
        <MdKeyboardArrowDown className="filter__icon" />
      ) : (
        <MdKeyboardArrowUp className="filter__icon" />
      )}
        {isFilterMenuActive && <div 
        className={`filter-options ${darkMode ? 'dark':''}`}
        onClick={(e)=>filterByRegion(e)}>
            <div className="option">Africa</div>
            <div className="option">America</div>
            <div className="option">Asia</div>
            <div className="option">Europe</div>
            <div className="option">Oceania</div>
            <h4 ref={domTarget} className='filter-reset-btn' onClick={reset}>Reset</h4>
        </div>}
    </div>
  )
}

export default FilterByDiv