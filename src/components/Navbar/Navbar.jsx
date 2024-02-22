import React, { useState } from "react";
import "./Navbar.css";
import LogoImage from "../../assets/argileLogo.png";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [active, setActive] = useState(false);

  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <header
      className={`header-navbar d-flex justify-content-center align-items-center fw-light fixed-top position-fixed`}
    >
      <nav className=" navbar d-flex align-items-center justify-content-center w-75 border">
        <div className="left-nav col-sm d-flex align-items-center justify-content-start">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/ourStory"
          >
            Hookahs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/collection"
          >
            Flavors
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/blogs"
          >
            Accessories
          </NavLink>
        </div>
        <div className="middle-nav col-sm d-flex align-items-center justify-content-center ">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link d-flex align-items-center justify-content-center"
                : "navbar-brand nav-link d-flex align-items-center justify-content-center"
            }
            to="/"
          >
            <img
              src={LogoImage}
              // width="30"
              height="40"
              alt=""
            />
          </NavLink>
        </div>
        <div className="right-nav col-sm d-flex align-items-center justify-content-end">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/contactus"
          >
            Contact Us
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active-tab navbar-brand nav-link"
                : "nav-tab navbar-brand nav-link"
            }
            to="/findus"
          >
            Find Us
          </NavLink>
          <NavLink
            className="nav-tab navbar-brand nav-link m-0"
            to="/addToCart"
          >
            {/* <i class="bi bi-9-circle"></i> */}
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
