import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section>
        <div className="container">
          <div className="logins">
            <div className="title">
              <Link>Login</Link>
              <Link>Register</Link>
            </div>

            <p>Enter your username and password to login.</p>

            <div className="inputs">
                <span>
                    <input type="email" />
                </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
