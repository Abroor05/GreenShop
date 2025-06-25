import React from "react";
import "./Cards.css";
import { CiHeart, CiSearch, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

function Cards({item, addToCard}) {
  return (
    <>
        <div className="container">
          {item?.map((item) => {
            return (
              <Link to={`/shop/${item.id}`} className="card">
                <div className="card-img">
                  <img src={item.img} alt="" />
                  <div className="cardlike">
                    <Link to={"/shoppincard"}><CiShoppingCart  className="heardLike1" onClick={(e)=>{
                      e.preventDefault()
                      addToCard(item, 1, "default");
                      
                    }} /></Link>
                    <CiHeart className="heardLike2 " />
                    <CiSearch className="heardLike3" />
                  </div>
                </div>
                <div className="card-info">
                  <h5>{item.title}</h5>
                  <p>{item.price}</p>
                </div>
              </Link>
            );
          })}
        </div>
    </>
  );
}

export default Cards;
