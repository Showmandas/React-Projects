import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
// import { Link,NavLink } from "react-router-dom";
import Navbar from "./Navbar";
export default function Home() {
    const navigateToAbout=useNavigate()
    const goToAbout=()=>{
        navigateToAbout('/about')

    }
  return (
    <>
    <Navbar />
    {/* <section>
        <h1>Home Page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, alias!</p>
        <button onClick={()=>{goToAbout()}}>Go to About</button>
      </section>  */}
      <Outlet/>
    </>
  );
}
