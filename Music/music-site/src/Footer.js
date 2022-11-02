import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <p className='text-center w-100'>&copy; copyright 2k22,All rights reserved,<NavLink className='footlink' to='/'>Musical Showman</NavLink></p>
    </>
  )
}
