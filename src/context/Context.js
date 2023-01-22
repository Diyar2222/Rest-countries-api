import React, { useState,useContext, useEffect } from "react"
const urlAll = 'https://restcountries.com/v3.1/all'
const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [countries,setCountries] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const [loading,setLoading] = useState(false)
    const [filterValue, setFilterValue] = useState('')
    const fetchData = async () => {
        setLoading(true)
        const response = await fetch(urlAll)
        const data = await response.json()
        setCountries(data)
        setLoading(false)
    }
    useEffect(()=>{
        fetchData()
    },[])
    return <AppContext.Provider 
        value={{
            filterValue,
            setFilterValue,
            darkMode,
            fetchData,
            setDarkMode,
            loading,
            setLoading,
            countries,
            setCountries}}>
        {children}
    </AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}