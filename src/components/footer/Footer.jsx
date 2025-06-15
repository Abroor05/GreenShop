import React from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuContactRound } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer({ footerData }) {
  return (
    <>
      <footer>
        <div className="container">
          <div className="fot-top">
            <div className="fotTop-left">
              {footerData.map((item) => {
               return <div className="fot-card">
                  <div className="fotCard-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="fotCard-info">
                    <h3>{item.title}</h3>
                    <p>{item.info}</p>
                  </div>
                </div>;
              })}
            </div>

            <div className="fotTop-right">
              <h3>Would you like to join newsletters?</h3>
              <span>
                <input type="text" placeholder="enter your email address..." />
                <button>Join</button>
              </span>
              <p>
                We usually post offers and challenges in newsletter. We’re your
                online houseplant destination. We offer a wide range of
                houseplants and accessories shipped directly from our
                (green)house to yours!{" "}
              </p>
            </div>
          </div>

          <div className="fot-center">
            <div className="green">
              <span>
                <img src="/imgs/logo.svg" alt="" />
              </span>

              <span>
                <IoLocationOutline />
                <p>
                  70 West Buckingham Ave. <br /> Farmingdale, NY 11735
                </p>
              </span>

              <span>
                <LuContactRound />
                <p>contact@greenshop.com</p>
              </span>

              <span>
                <TbPhoneCall />
                <p>+88 01911 717 490</p>
              </span>
            </div>
          </div>

          <div className="fot-bottom">
            <span>
              <h3>My Account</h3>
              <ul>
                <li>My Account</li>
                <li>Our stores</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </span>

            <span>
              <h3>Help & Guide</h3>
              <ul>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </span>

            <span>
              <h3>Categories</h3>
              <ul>
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </span>

            <span className="fot-endl">
              <h3>Social Media</h3>
              <div className="tarmoq">
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaTwitter />
                </span>
                <span>
                  <FaLinkedinIn />
                </span>
                <span>
                  <AiOutlineYoutube />
                </span>
              </div>
              <h3>We accept</h3>
              <div className="pay">
                <img src="/imgs/pay.png" alt="" />
              </div>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
