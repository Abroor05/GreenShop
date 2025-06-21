import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./CheckModal.css";

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
                <img src="/public/imgs/post.png" alt="" />
                <p>Your order has been received</p>
              </span>
            </div>

            <div className="information">
              <span>
                <p>Order Number</p>
                <h4>19586687</h4>
              </span>
              <span>
                <p>Date</p>
                <h4>15 Sep, 2021</h4>
              </span>

              <span>
                <p>Total</p>
                <h4>2,699.00</h4>
              </span>

              <span>
                <p>Payment Method</p>
                <h4>Cash on delivery</h4>
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CheckModal;
