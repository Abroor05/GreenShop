import React from "react";

function ShoppingCards() {
  return (
    <>
      <section>
        <div className="container">
          <div className="shoppingCard-hero">
            <div className="shopCard-title">
              <span>Home / Shop / Shopping Cart </span>
            </div>

            <div className="Products">
              <div className="Product-left">
                <div className="Product-title">
                    <div className="pTitle-left">
                        <h4>Products</h4>
                    </div>
                    <div className="pTitle-right">
                        <h4>Price</h4>
                        <h4>Quantity</h4>
                        <h4>Total</h4>
                    </div>      
                </div>
                <div className="Product">
                    
                </div>
              </div>
              <div className="Product-right"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ShoppingCards;
