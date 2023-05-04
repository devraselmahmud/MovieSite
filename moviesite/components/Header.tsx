import React from 'react'
import logo from '../public/logo.png'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {
  ShareIcon, EnvelopeIcon, HomeIcon, TicketIcon, MagnifyingGlassIcon, UserIcon 

} from '@heroicons/react/24/outline'



const Header = ({}) => {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title="Home" Icon={HomeIcon}/>
        <HeaderItem title="Ticket" Icon={TicketIcon}/>
        <HeaderItem title="Badge" Icon={ShareIcon}/>
        <HeaderItem title="Email" Icon={EnvelopeIcon}/>
        <HeaderItem title="Search" Icon={MagnifyingGlassIcon}/>
        <HeaderItem title="User" Icon={UserIcon}/>
      </div>

      <Image 
        src={logo} alt="Logo"
        width={100}
        height={100}
        className='object-contain'
      />

    </header>
  )
}

export default Header