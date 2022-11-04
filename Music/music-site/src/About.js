import React from "react";
import aboutpic from "../src/images/about.png";
import CommonPart from "./Components/CommonPart";
import mypic from "../src/images/mypic.jpg";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <div className="card my-5">
                  <img
                    src={mypic}
                    className="card-img-top rounded-circle img-thumbnail mypic"
                    alt="Profile Pic"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Showman Das</h5>
                    <p className="card-text">
                      Hi,my name is Showman.I am studying B.Sc Engineering at
                      SYLHET ENGINEERING COLLEGE.I m from
                      Chattogram,Bangladesh.I m a music lover.I very much love
                      music.I like singing,playing tabla,dancing etc.These are
                      my passionor my hobbiesI m a tabla player also. This site
                      is created for the music lovers to entertain them.I m also
                      a music lover.So,I want to show my talent and share music
                      contents for you for just entertainment purpose.
                    </p>
                    <a
                      href="https://www.facebook.com/profile.php?id=100086643611559"
                      className="fb-btn"
                      target="_blank"
                    >
                      Musical Showman
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <img
                  src={aboutpic}
                  alt="about pic'Musical Showman'"
                  className="img-fluid img-thumbnail"
                />
                <div className="social-icon col-12 my-5 d-flex justify-content-center">
                  <span>You Can Follow me:</span>
                  <div className="icons d-flex justify-content-center align-items-center">
                    <a href="https://www.facebook.com/showmandas1632" target="_blank">
                      <i class="fa fa-facebook-square" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.instagram.com/showmandas/" target="_blank">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmdXEW7P_Bw0mEu6fOkn7tg" target="_blank">
                      <i class="fa fa-youtube" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
