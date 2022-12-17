import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Header.css'


const Navbar = () => {
  return (
    <nav className='capitalize'>
        <div className='flex items-center gap-x-1 w-full'>
          <input type="text" placeholder='search here' className='outline-none px-2 rounded-md text-black w-full' />
          <AiOutlineSearch />
        </div>
</nav>
  )
}

export default Navbar