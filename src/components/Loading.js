import React from 'react'
import { useGlobalContext } from '../context/Context'

function Loading() {
  const {darkMode} = useGlobalContext()
  return (
      <div className='spinner-box'>
          <div className='circle-box'>
            <div className={`circle-core ${darkMode ? 'dark-loading':''}`}></div>
          </div>
      </div>
  )
}

export default Loading