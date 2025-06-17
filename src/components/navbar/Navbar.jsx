import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogin2 } from "react-icons/tb";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav-img">
            <img src="/imgs/logo.svg" alt="" />
          </div>

          <ul className="links">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/shop"}>Shop</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/plan"}>Plant Care</NavLink>
            </li>
            <li>
              {" "}
              <NavLink to={"/blog"}>Blogs</NavLink>
            </li>
          </ul>

          <div className="elements">
            <CiSearch className="search" />
            <div className="shopes">
              <Link to={"/shoppingcard"}>
                <FiShoppingCart className="shopingBags" />
              </Link>
              <div className="count">0</div>
            </div>
            <Link to={"/login"}>
              <TbLogin2 />
              <p>Login</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
