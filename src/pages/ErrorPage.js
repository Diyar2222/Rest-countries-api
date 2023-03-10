import React from 'react'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'

function ErrorPage() {
  return (
    <div className='error-page'>
      <h1>Page doesn't exist</h1>
      <Link to='/'><button className='back-btn'><BsArrowLeft/>Back</button></Link>
    </div>
  )
}

export default ErrorPage