import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFolderStatus } from "../../features/folderSlice";
import { folded, unFolded } from "../../features/folderSlice";

const ContactAddressAndForm = () => {
  const status = useSelector(selectFolderStatus);
  const dispatch = useDispatch();
  const clickHandler = () => {
    !status ? dispatch(folded()) : dispatch(unFolded());
  };
  return (
    <div className="contact_address_signup_wrapper">
      <div className="address_and_contact_wrapper">
        <div className="contact_address_form">
          <div className="contact_address_text">
            <div className="f-address">
              <h3>United Arab Emirates</h3>
              <p>
                C/o Tochukwu Nkwocha Second Floor, CNN Building Dubai Media
                City, Dubai.
              </p>
              <p>
                <a href="mailto:hello@effikos.com">hello@effikos.com</a>
              </p>
            </div>
            {/* first address div ends here  */}
            <div className="s-address">
              <h3>Nigeria</h3>
              <p>
                Spreadit Limited 5 Olutosin Ajayi Street Ajao Estate, Lagos.
              </p>
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
          <div className="contact_address_black"></div>
        </div>
        <div className="contact_form_wrapper">
          <div className="input_form">
            <h1>Send Us a Message</h1>
            <div className="inputs_wrapper">
              <div className="input_name_email_wrapper">
                <div className="input_name input_relative">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Full Name" />
                </div>
                <div className="input_email input_relative">
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
                !status
                  ? "fa-solid fa-circle-chevron-right"
                  : "fa-solid fa-circle-chevron-left"
              }
            ></i>
          </div>
          {/* dark red */}
          {/* input form ends here  */}
        </div>
      </div>
    </div>
  );
};

export default ContactAddressAndForm;
