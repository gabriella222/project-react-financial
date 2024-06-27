import React from 'react'
import  './Header.css'

function Header() {
  return (
    <>
      <div className='background-header'>
        <nav className='navH'>
            <div className='logo-header'>*logo*</div>
            <ul className='list-menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Acesso ao menu</a></li>
            </ul>
        </nav>
      </div>
    </>
  )
}

export default Header
