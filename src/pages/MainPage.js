import React from 'react'
import Countries from '../components/CountriesSection/Countries'
import FilterAndSearch from '../components/FilterAndSearch/FilterAndSearch'

function MainPage() {
  return (
    <div>
        <FilterAndSearch/>
        <Countries/>
    </div>
  )
}

export default MainPage