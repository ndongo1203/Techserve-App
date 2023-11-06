import React from 'react'
import Navebar from './Navebar'
import Banner from './Banner'

function Header() {
  return (
    <div className='header'>
        <Navebar />
        <Banner />
    </div>
  )
}

export default Header