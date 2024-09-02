import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const Navbar = () => {

const Links = [{
    herf: '/', label: 'Dashborad' 
}, {
    herf: '/issues', label: 'Issues'
}]

  return (
    <>
    <nav className='flex items-center space-x-6 border-b mb-5 px-5 h-14'>
        <Link href={'/'}><AiFillBug></AiFillBug> </Link>
        <ul className='flex items-center space-x-6'>
            {Links.map((link, index) => (
                    <Link href={link.herf} key={index} className='text-zinc-500 hover:text-zinc-800 transition-colors'>{link.label}</Link>
            ))}
        </ul>

    </nav>
    </>
  )
}

export default Navbar