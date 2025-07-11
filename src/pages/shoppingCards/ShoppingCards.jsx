import React, { useState } from "react";
import { LuTrash } from "react-icons/lu";
import "./ShoppingCards.css";
import { Link, useParams } from "react-router-dom";

function ShoppingCards({ homeData, setCardData, cardData }) {
  const [plas, setPlas] = useState(1);

  const { id } = useParams();
  const [count, setCount] = useState(1);

  const filterData = homeData.filter((item) => {
    return item.id == id;
  });


  const delateData = (id)=>{
    

    const filterCard = cardData.filter((item)=>{
      return item.id != id
    })

    setCardData(filterCard)
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="shoppingCard-hero">
            <div className="shopCard-title">
              <span>
                <p>Home</p>
                <p>/ Shop</p>
                <p>/ Shopping Cart</p>{" "}
              </span>
            </div>

            <div className="Product-title">
              <div className="pTitle-left">
                <h4>Products</h4>
              </div>
              <div className="pTitle-right">
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div>
              <div className="card-total">
                <h3>Cart Totals</h3>
              </div>
            </div>
            <div className="all">
              <div className="allProdact">
                {cardData?.map((item) => {
                  return (
                    <div className="Products">
                      <div className="Product-left">
                        <div className="Product">
                          <div className="Pro-left">
                            <span className="pro-img">
                              <img src={item.img} alt="" />
                            </span>
                            <span>
                              <h4>{item.title}</h4>
                              <p>SKU: 1995751877966</p>
                            </span>
                          </div>
                          <div className="pro-rights">
                            <div className="pro-centr1">
                              <p>{item.price}</p>
                            </div>

                            <div className="pro-count">
                              <span
                                onClick={() => {
                                  if (count > 1) {
                                    setCount(count - 1);
                                  }
                                }}
                                className="add tugma"
                              >
                                -
                              </span>
                              <h3 className="plasCount">{count}</h3>
                              <span
                                onClick={() => {
                                  setCount(count + 1);
                                }}
                                className="remove tugma"
                              >
                                +
                              </span>
                            </div>

                            <div className="pro-total">
                              <h3>$119.00</h3>
                              <LuTrash className="trash" onClick={()=>{
                                delateData(item.id)
                              }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="Product-right">
                <div className="pTitle"></div>
                <p>Coupon Apply</p>

                <div className="input">
                  <input type="text" placeholder="Enter coupon code here..." />
                  <button>Apply</button>
                </div>
                <div className="prodact-count">
                  <span>
                    <p>Subtotal</p>
                    <h4>$2,683.00</h4>
                  </span>
                  <span>
                    <p>Coupon Discount</p>
                    <h4>(-) 00.00</h4>
                  </span>
                  <span>
                    <p>Shiping</p>
                    <h4>$16.00</h4>
                  </span>
                </div>
                <p></p>

                <div className="price-total">
                  <h4>Total</h4>
                  <h3>$2,699.00</h3>
                </div>

                <Link to={"/checkoute"}>
                  {" "}
                  <button className="check">Proceed To Checkout</button>
                </Link>
                <p className="Continue">Continue Shopping</p>
              </div>
            </div>  
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCards;
