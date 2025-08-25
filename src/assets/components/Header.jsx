import React from 'react'
import chefIcon from '../images/chef.jpeg'

const Header = () => {
  return (
    <header className='flex justify-center gap-10 items-center pt-8 shadow-md'>
      <img className='h-auto w-20 rounded-full' src={chefIcon} alt="Chef Icon" />
      <h1 className='text-3xl font-bold'>Let's Cook By CG</h1>
    </header>
  )
}

export default Header