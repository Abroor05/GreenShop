import React from "react";

function LittleCard() {
  return (
    <>
      <div className="order">
        <div className="order-left">
          <div className="orderImg">
            <img src="/imgs/card3.png" alt="" />
          </div>
          <span>
            <h4>Barberton Daisy</h4>
            <p>SKU: 1995751877966</p>
          </span>
        </div>

        <div className="order-right">
          <span>
            <p>(x 2)</p>
          </span>

          <span>
            <h4>$238.00</h4>
          </span>
        </div>
      </div>
    </>
  );
}

export default LittleCard;
