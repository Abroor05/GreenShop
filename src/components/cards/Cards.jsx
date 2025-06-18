import React from "react";
import "./Cards.css";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cards({ data }) {
  return (
    <>
      <section className="cardsFile">
        <div className="container">
          {data.map((item) => (
            <div key={item.id} className="card-wrapper">
              <Link to={`/shop/${item.id}`} className="card">
                <div className="card-img">
                  <img src={item.img} alt="" />
                  <span className="cardlike">
                    <CiHeart className="heardLike2" />
                    <CiSearch className="heardLike3" />
                  </span>
                </div>
                <div className="card-info">
                  <h5>{item.title.data}</h5>
                  <p>{item.price}</p>
                </div>
              </Link>
              <Link to="/shoppincard" className="shopping-icon">
                <CiShoppingCart className="heardLike1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}


export default Cards;
