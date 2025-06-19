import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link, NavLink } from 'react-router-dom'
import "./Login.css"

function Login({setShowModal, showModal}) {
  return (
    <>
        {showModal && <section className="modal">
          <div className="login">
              <AiOutlineClose className="exit" onClick={()=>{
                setShowModal(false)
              }} />
            <div className="modal-title">
              <NavLink>Login</NavLink>
              <NavLink>|</NavLink>
              <NavLink>Register</NavLink>
            </div>

            <div className="inputs">
              <p>Enter your username and password to login.</p>
              <span>
                <input type="email" placeholder="almamun_uxui@outlook.com" />
                <input type="password" placeholder="Enter your email password" />
              </span>
              <Link className="forgot">Forgot Password?</Link>
            </div>

           <div className="loginBtn">
             <button >Login</button>
           </div>

            <div className="chiziqlar">
              <div className="chiziq"></div>
              <p>Or login with</p>
              <div className="chiziq"></div>
            </div>

            <div className="enterWith">
              <span>
                {" "}
                <FcGoogle /> Login with Google
              </span>
              <span>
                {" "}
                <FaFacebookF /> Login with Facebook
              </span>
            </div>
          </div>
      </section>}
    </>
  )
}

export default Login