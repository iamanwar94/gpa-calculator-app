import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectFolderStatus } from "../../features/folderSlice";
import { folded, unFolded } from "../../features/folderSlice";
import axios from "axios";
const ContactAddressAndForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const status = useSelector(selectFolderStatus);
  const dispatch = useDispatch();

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = async () => {
    const config = {
      method: "POST",
      url: "https://effiko-api.herokuapp.com/api/messages",
      headers: {
        "content-type": "application/json",
      },
      data: { user_name: name, email: email, message: message },
    };
    const response = await axios(config);
    console.log(response);
    setName("");
    setEmail("");
    setMessage("");
  };

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
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={nameChangeHandler}
                  />
                </div>
                <div className="input_email input_relative">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={emailChangeHandler}
                  />
                </div>
              </div>
              {/* name and email wrapper ends  */}
              <div className="contact_form_text_area">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message here..."
                  value={message}
                  onChange={messageChangeHandler}
                ></textarea>
              </div>
              <button
                className="btn btn-white contact_form_submit"
                onClick={submitHandler}
              >
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
