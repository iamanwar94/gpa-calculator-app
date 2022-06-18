import React from "react";
import { useState } from "react";

const ContactAddressAndForm = () => {
  const [folded, setFolded] = useState(false);
  const clickHandler = () => {
    folded ? setFolded(false) : setFolded(true);
  };
  return (
    <div className="contact_address_signup_wrapper">
      <div className="contact_address_form">
        <div className="contact_address_text">
          <div className="f-address">
            <h3>United Arab Emirates</h3>
            <p>
              C/o Tochukwu Nkwocha Second Floor, CNN Building Dubai Media City,
              Dubai.
            </p>
            <p>
              <a href="mailto:hello@effikos.com">hello@effikos.com</a>
            </p>
          </div>
          {/* first address div ends here  */}
          <div className="s-address">
            <h3>Nigeria</h3>
            <p>Spreadit Limited 5 Olutosin Ajayi Street Ajao Estate, Lagos.</p>
            <p>
              <a href="mailto:hello@effikos.com">hello@effikos.com</a>
            </p>
          </div>
          {/* second address div ends  */}
          <div className="address_icons">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          {/* icons ends  */}
        </div>
        {/* address text ends here  */}
        {/* address div dark black  */}
        <div className="contact_address_black"></div>
        {/* address div dark black ends */}
        <div className="contact_form_wrapper">
          <div className="input_form">
            <h1>Send Us a Message</h1>
            <div className="inputs_wrapper">
              <div className="input_name_email_wrapper">
                <div className="input_name">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Full Name" />
                </div>
                <div className="input_email">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Email" />
                </div>
              </div>
              {/* name and email wrapper ends  */}
              <div className="contact_form_text_area">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="4"
                  placeholder="Message here..."
                ></textarea>
              </div>
              <button className="btn btn-white contact_form_submit">
                Send
              </button>
            </div>
          </div>
          <div className="input_form_dark_red" onClick={clickHandler}>
            <i
              className={
                folded
                  ? "fa-solid fa-circle-chevron-right"
                  : "fa-solid fa-circle-chevron-left"
              }
            ></i>
          </div>
          {/* dark red */}
          {/* input form ends here  */}
        </div>
      </div>
      {/* contact address and form ends here  */}
    </div>
  );
};

export default ContactAddressAndForm;
