import React from "react";
import pin from "./images/pin.png";
import building from "./images/building.png";
import triangle from "./images/triangle.png";
import "./Contact.css";
import Map from "./Map";
import ContactAddressAndForm from "./ContactAddressAndForm";
import { useSelector } from "react-redux";
import { selectFolderStatus } from "../../features/folderSlice";

const Contact = () => {
  const status = useSelector(selectFolderStatus);
  return (
    <div className="contact_wrapper">
      {/* header  */}
      <div className="contact_header">
        {/* contact_header_logo and text */}
        <div className="contact_header_logo_text_wrapper">
          <div className="contact_header_logo_and_text">
            <div className="contact_header_text_heading">
              <h1>Contact Us</h1>
            </div>
            <div className="contact_header_text_line"></div>
            <div className="contact_header_text_img">
              <img src={pin} alt="pin" />
            </div>
          </div>
        </div>
        {/* contact header right side images  */}
        <div
          className="contact_header_img"
          style={{
            backgroundImage: `url('${building}')`,
          }}
        >
          <img src={triangle} alt="triangle" />
        </div>
      </div>
      {/* contact header ends here */}
      {/* map */}
      <div className="contact_map_wrapper">
        <div className="contact_map_component">
          <Map />
        </div>
        <div
          className="contact_form_component"
          style={!status ? { left: "-1132px" } : { left: "0" }}
        >
          <ContactAddressAndForm />
        </div>
      </div>
      {/* map ends here  */}
      {/* signup form and our address starts here  */}
    </div>
  );
};

export default Contact;
