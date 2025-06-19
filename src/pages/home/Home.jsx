import React, { useState } from "react";
import "./Home.css";
import { Link, NavLink } from "react-router-dom";
import {
  FaAngleDown,
  FaAngleRight,
  FaArrowRight,
  FaFacebookF,
} from "react-icons/fa";
import Cards from "../../components/cards/Cards";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";

function Home({ homeData, setShowModal, showModal}) {

  
 
  return (
    <>
      
      <div className="homeHero">
        <div className="container">
          <div className="homeHero-left">
            <h4>Welcome to GreenShop</h4>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <button>SHOP NOW</button>
          </div>

          <div className="homeHero-right">
            <img src="/imgs/homehero.png" alt="" />
          </div>
        </div>
      </div>

      <section className="">
        <div className="container">
          <div className="prodact-title">
            <ul>
              <li>
                <NavLink>All Plants</NavLink>
              </li>
              <li>
                <NavLink>New Arrivals</NavLink>
              </li>
              <li>
                <NavLink>Sale</NavLink>
              </li>
            </ul>

            <span>
              <p>Short by:</p>
              <p>Default sorting</p>
              <p>
                <FaAngleDown />
              </p>
            </span>
          </div>

          <div className="asos">
            <div className="catigory-left">
              <h3>Categories</h3>

              <div className="menus">
                <span>
                  <p>House Plants</p>
                  <p>(33)</p>
                </span>
                <span>
                  <p>Potter Plants</p>
                  <p>(12)</p>
                </span>
                <span>
                  <p>Seeds</p>
                  <p>(65)</p>
                </span>
                <span>
                  <p>Small Plants</p>
                  <p>(39)</p>
                </span>
                <span>
                  <p>Big Plants</p>
                  <p>(23)</p>
                </span>
                <span>
                  <p>Succulents</p>
                  <p>(17)</p>
                </span>

                <span>
                  <p>Trerrariums</p>
                  <p>(19)</p>
                </span>

                <span>
                  <p>Gardening</p>
                  <p>(13)</p>
                </span>
                <span>
                  <p>Accessories</p>
                  <p>(18)</p>
                </span>
              </div>

              <div className="priceRange">
                <h3>Price Range</h3>
                <div className="lines">
                  <div className="line1"></div>
                  <div className="line2"></div>
                </div>

                <div className="pric">
                  Price: <p> $39 - $1230</p>
                </div>
                <button>Filter</button>
              </div>

              <div className="size">
                <h3>Size</h3>
                <span>
                  <p>Small</p>
                  <p>(119)</p>
                </span>

                <span>
                  <p>Medium</p>
                  <p>(86)</p>
                </span>
                <span>
                  <p>Large</p>
                  <p>(78)</p>
                </span>
              </div>

              <div className="left-img">
                <img src="/imgs/left.png" alt="" />
              </div>
            </div>
            <div className="catigory-right">
              <span className="Cards">
                <Cards data={homeData} />
              </span>

              <div className="bolim">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fines">
        <div className="container">
          <div className="fine">
            <div className="fine-img">
              <img src="/imgs/card5.png" alt="" />
            </div>
            <div className="fine-info">
              <h3>Summer cactus & succulents</h3>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <button>
                Find More <FaArrowRight />
              </button>
            </div>
          </div>
          <div className="fine">
            <div className="fine-img">
              <img src="/imgs/card5.png" alt="" />
            </div>
            <div className="fine-info">
              <h3>Summer cactus & succulents</h3>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants
              </p>
              <button>
                Find More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="blocPost">
        <div className="container">
          <div className="blocPost-title">
            <h2>Our Blog Posts </h2>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants.{" "}
            </p>
          </div>

          <div className="blogPost-cards">
            <div className="blogPost-card">
              <div className="post-img">
                <img src="/public/imgs/post1.png" alt="" />
              </div>
              <div className="post-info">
                <h5>September 12 I Read in 6 minutes</h5>
                <h3>Cactus & Succulent Care Tips</h3>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.{" "}
                </p>
                <button>
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="blogPost-card">
              <div className="post-img">
                <img src="/public/imgs/post2.png" alt="" />
              </div>
              <div className="post-info">
                <h5>September 12 I Read in 6 minutes</h5>
                <h3>Cactus & Succulent Care Tips</h3>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.{" "}
                </p>
                <button>
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="blogPost-card">
              <div className="post-img">
                <img src="/public/imgs/post3.png" alt="" />
              </div>
              <div className="post-info">
                <h5>September 12 I Read in 6 minutes</h5>
                <h3>Cactus & Succulent Care Tips</h3>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.{" "}
                </p>
                <button>
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>

            <div className="blogPost-card">
              <div className="post-img">
                <img src="/public/imgs/post4.png" alt="" />
              </div>
              <div className="post-info">
                <h5>September 12 I Read in 6 minutes</h5>
                <h3>Cactus & Succulent Care Tips</h3>
                <p>
                  Cacti are succulents are easy care plants for any home or
                  patio.{" "}
                </p>
                <button>
                  Read More
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
