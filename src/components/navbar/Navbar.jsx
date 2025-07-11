import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { TbLogin2 } from "react-icons/tb";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Navbar({setShowModal, cardData, searchFilter}) {
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
            <Link to={"/search"}>
               
                <TextField onInput={(e)=>{
                  console.log(e.target.value);
                }} id="standard-basic" label="Standard" variant="standard" />
              <CiSearch className="search" onClick={()=>{
            }} />

            </Link>
            <div className="shopes">
              <Link to={"/shoppingcard"}>
                <FiShoppingCart className="shopingBags" />
              </Link>
              <div className="count">{cardData.length}</div>
            </div>
            <span onClick={()=>{
              setShowModal(true)
            }}>
              <TbLogin2 />
              <p>Login</p>
            </span>
          </div>                    
        </div>
      </nav>
    </>
  );
}

export default Navbar;
