import React from 'react'
// import image from '../src/images/home.gif'
import { NavLink } from 'react-router-dom'
export default function CommonPart(props) {
    const {name,caption,imgsrc,btnname,visit}=props
  return (
    <>
        <section id='header-part' className='d-flex align-items-center'>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
          <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1 className='heading'>{name}</h1>
            <caption className="jumbotron text">
            <i>{caption}</i>
            </caption>
            <div className="mt-3">
                <NavLink to={visit} className='visit-btn'>{btnname}</NavLink>
            </div>
          </div>
        
        <div className="col-lg-6 order-1 order-lg-2 ">
          <img src={imgsrc} className='img-fluid img-thumbnail' alt="header image" />
        </div>
          </div>
          </div>
          
      </div>
    </div>
    </section>

    </>
  )
}
