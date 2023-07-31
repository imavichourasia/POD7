import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Mainpage = () => {
  return (
    <div className='container'>
        <div className='nav'>
      <Navbar/>
      </div>
      <div className='side'>
      <Sidebar/>
      </div>
    </div>
  )
}

export default Mainpage
