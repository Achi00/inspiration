import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <Link href="/">In.</Link>
      <Link href="/product">Products</Link>
      <Link href="/about">About</Link>
      <Link href="/Three">3D</Link>
    </div>
  )
}

export default Navbar