import React from "react";
import logo from "../src/images/logo.png";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function Navbar() {
  const { loginWithRedirect,logout,isAuthenticated,user } = useAuth0();
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                  <img
                    src={logo}
                    style={{ width: "50px" }}
                    alt="logo-pic"
                    className="img-thumbnail rounded-circle"
                  />
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                      <NavLink
                        exact
                        className="nav-link active"
                        activeClassName="active_nav"
                        aria-current="page"
                        to="/"
                      >
                        <i class="fa fa-home homeicon" aria-hidden="true"></i>
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active_nav"
                        to="/about"
                      >
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active_nav"
                        to="/musicbank"
                      >
                        Music Bank
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="nav-link"
                        activeClassName="active_nav"
                        to="/contact"
                      >
                        Reviews
                      </NavLink>
                    </li>
                    <li>
                      {
                        isAuthenticated && (
                            <p>{user.name}</p>
                        )
                      }
                    </li>
                    {isAuthenticated ? (
                      <li>
                        <button
                          onClick={() =>
                            logout({ returnTo: window.location.origin })
                          }
                        >
                          Log Out
                        </button>
                      </li>
                    ) : (
                      <li>
                        <button onClick={() => loginWithRedirect()}>
                          Log In
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
