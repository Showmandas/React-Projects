import React from "react";
import aboutpic from "../src/images/about.png";
import CommonPart from "./Components/CommonPart";
import mypic from '../src/images/mypic.jpg'
export default function About() {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="row">
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <div className="card">
  <img src={mypic} className="card-img-top rounded-circle img-thumbnail mypic" style={{float:'left'}} alt="Profile Pic"/>
  <div className="card-body">
    <h5 className="card-title">Showman Das</h5>
    <p className="card-text">
Hi,my name is Showman.I am studying B.Sc Engineering at SYLHET ENGINEERING COLLEGE.I m from Chattogram,Bangladesh.I m a music lover.I very much love music.I like singing,playing tabla,dancing etc.These are my passionor my hobbiesI m a tabla player also.
      This site is created for the music lovers to entertain them.I m also a music lover.So,I want to show my talent and share music contents for you for just entertainment purpose.</p>
    <a href="#" className="visit-btn">Go somewhere</a>
  </div>
</div>
            </div>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <img src={aboutpic} alt="about pic'Musical Showman'"  className="img-fluid img-thumbnail"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



