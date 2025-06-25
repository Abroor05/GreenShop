import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./CheckModal.css";
import LittleCard from "../littleCard/LittleCard";

function CheckModal({ showPostModal, setShowPostModal }) {
  return (
    <>
      {showPostModal && (
        <div className="checkModal">
          <div className="totalModal">
            <AiOutlineClose
              className="close  "
              onClick={() => {
                setShowPostModal(false);
              }}
            />
            <div className="total-title">
              <span>
                <img src="/imgs/post.png" alt="" />
                <p>Your order has been received</p>
              </span>
            </div>

            <div className="information">
              <span>
                <p>Order Number</p>
                <h4>19586687</h4>
              </span>
              <span className="borders">
                <p>Date</p>
                <h4>15 Sep, 2021</h4>
              </span>

              <span className="borders">
                <p>Total</p>
                <h4>2,699.00</h4>
              </span>

              <span>
                <p>Payment Method</p>
                <h4>Cash on delivery</h4>
              </span>
            </div>

            <div className="modalOrder-title">
              <h4 className="Details">Order Details</h4>

              <div className="title">
                <h4>Products</h4>

                <span>
                  <h4>Qty</h4>
                  <h4>Subtotal </h4>
                </span>
              </div>

              <div className="produkts">
                <LittleCard/>
              </div>

              <div className="price-total">
                <div className="shopping">
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckModal;
