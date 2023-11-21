/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import './Header.css'

export function Header ({ title, iconMode, mode, handleMode }) {
  return (
    <>
      <header className='header'>
        <Link to='/'><h1>{title}</h1></Link>
        <button className='btn' onClick={handleMode}>
          {iconMode}
          <span>{mode}</span>
        </button>
      </header>
    </>
    
  )
}