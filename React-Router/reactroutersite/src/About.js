import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
// import Navbar from './Navbar'
// import { NavLink } from 'react-router-dom'
export default function About() {
    const navigateToContact=useNavigate()
    const goToContact=()=>{
        navigateToContact('/contact');


    }
  return (
    <>
    {/* <Navbar/> */}
      <section>
        <h1>About Page</h1>
        <button onClick={()=>{goToContact()}}>Go to Contact</button>
      </section>
    </>
  )
}
