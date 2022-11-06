import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// import Navbar from './Navbar'
export default function Contact() {
    const navigateToHome=useNavigate()
    const goToHome=()=>{
        navigateToHome('/');

    }
    const goBack=()=>{
        navigateToHome(-1)
    }
  return (
    <>
    {/* <Navbar/> */}
      <section>
        <h1>Contact Page</h1>
        <button onClick={()=>{goToHome()}}>Go to home</button>
        <button onClick={()=>{goBack()}}>Go back</button>
      </section>
    </>
  )
}
