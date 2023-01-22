import React from 'react'
import {BsMoon,BsFillMoonFill} from 'react-icons/bs'
import { useGlobalContext } from '../context/Context'

function Header() {
  const {setFilterValue,darkMode, setDarkMode,fetchData} = useGlobalContext()
  const reset = () =>{
    fetchData()
    setFilterValue('')
  }
  return (
    <nav className={`navbar ${darkMode ? 'dark':''}`}>
      <h2 onClick={reset}>Where in the world</h2>
      <div className='darkmode' onClick={()=>setDarkMode(prev=>!prev)}>
          {darkMode ? <BsFillMoonFill className='moon-icon'/> : <BsMoon/>}Dark Mode
      </div>
    </nav>
  )
}

export default Header