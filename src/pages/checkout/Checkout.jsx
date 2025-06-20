import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <>
      <section>
        <div className="container">
          <div className="check-title">
            <h4>Home / Shop / Checkout</h4>
          </div>

          <div className="pay-inputs">
            <div className="inputs-left">
              <span>
                <h4>
                  First Name <div className="star">*</div>
                </h4>
                <input type="text" />
              </span>

              <span>
                <h4>
                  Country / Region <div className="star">*</div>
                </h4>

                <select id="country" name="country">
                  <option value="" disabled selected hidden>
                    Select a country / region
                  </option>
                  <option value="uzbekistan">O‘zbekiston</option>
                  <option value="kazakhstan">Qozog‘iston</option>
                  <option value="turkey">Turkiya</option>
                  <option value="russia">Rossiya</option>
                  <option value="usa">AQSH</option>
                  <option value="uk">Buyuk Britaniya</option>
                  <option value="germany">Germaniya</option>
                  <option value="japan">Yaponiya</option>
                  <option value="china">Xitoy</option>
                  <option value="uae">BAA (Dubay)</option>
                </select>
              </span>

              <span>
                <h4>
                  Street Address <div className="star">*</div>
                </h4>
                <input type="text" />
              </span>

              <span>
                <h4>
                  State <div className="star">*</div>
                </h4>
                <select id="state" name="state" class="select-box">
                  <option value="" disabled selected hidden>
                    Shtatni tanlang
                  </option>
                  <option value="andijon">Andijon</option>
                  <option value="samarqand">Samarqand</option>
                  <option value="california">California</option>
                  <option value="texas">Texas</option>
                  <option value="england">England</option>
                  <option value="scotland">Scotland</option>
                  <option value="moskva">Moskva</option>
                  <option value="sankt-peterburg">Sankt-Peterburg</option>
                  <option value="bavaria">Bavaria</option>
                  <option value="berlin">Berlin</option>
                  <option value="istanbul">Istanbul</option>
                  <option value="ankara">Ankara</option>
                  <option value="dubai">Dubay</option>
                  <option value="abu-dhabi">Abu-Dhabi</option>
                  <option value="tokyo">Tokyo</option>
                  <option value="osaka">Osaka</option>
                  <option value="beijing">Beijing</option>
                  <option value="shanghai">Shanghai</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                </select>
              </span>

              <span>
                <h4>
                  Email address <div className="star">*</div>
                </h4>
                <input type="text" />
              </span>
              <div className="checkbox">
                <input type="checkbox" />
                <p>Ship to a different address?</p>
              </div>

              <span>
                <p>Order notes (optional)</p>
                <textarea name="" id=""></textarea>
              </span>
            </div>

            <div className="inputs-right">
              <span>
                <h4>
                  Last Name <div className="star">*</div>
                </h4>
                <input type="text" />
              </span>
              <span>
                <h4>
                  Town / City <div className="star">*</div>
                </h4>
                <input type="text" />
              </span>

              <span>
                <h4>
                  enter <div className="star"> *</div>
                </h4>
                <input type="text" />
              </span>

              <span>
                <h4>Zip</h4>
                <input type="text" />
              </span>

              <span>
                <h4>
                  Phone Number <div className="star">*</div>
                </h4>
                <select id="phone-code">
                  <option value="" disabled selected hidden>
                    Telefon kodini tanlang
                  </option>
                  <option value="+998">O‘zbekiston (+998)</option>
                  <option value="+1">AQSH (+1)</option>
                  <option value="+44">Buyuk Britaniya (+44)</option>
                  <option value="+90">Turkiya (+90)</option>
                  <option value="+971">BAA (+971)</option>
                  <option value="+7">Rossiya (+7)</option>
                  <option value="+49">Germaniya (+49)</option>
                  <option value="+33">Fransiya (+33)</option>
                  <option value="+91">Hindiston (+91)</option>
                  <option value="+81">Yaponiya (+81)</option>
                </select>
                <input type="tel" />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
