import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import colors from "./images/colors.png";
import black from "./images/black.png";
import "./Linkedin.css";

const Linkedin = () => {
  const fileTypes = ["PDF"];
  const File = () => {
    return (
      <div className="file_style">
        <p>
          Drag and drop or <span>Browse</span>
        </p>
      </div>
    );
  };
  function DragDrop() {
    const [file, setFile] = useState([]);
    const handleChange = (file) => {
      setFile(file.FileList);
      console.log(file);
    };
    return (
      <div className="file_uploader">
        <FileUploader
          handleChange={handleChange}
          types={fileTypes}
          file={file}
          children={<File />}
          onDrop={(file) => console.log(file)}
        />
      </div>
    );
  }
  return (
    <div className="linkedin_wrapper">
      <div
        className="linkedin_header"
        style={{ backgroundImage: `url('${colors}')` }}
      >
        <div
          className="linkedin_header_content"
          style={{ backgroundImage: `url('${black}')` }}
        >
          <h1>LinkedIn Profile Optimization</h1>
          <p>
            LinkedIn is the perfect hub for your personal brand. Your LinkedIn
            profile highlights your achievements, what sets you apart, and your
            professional swagger. And, bonus, you'll prime your first-page
            results for influencers and decision makers searching for you.
            Because like other social networking sites, LinkedIn ranks high in
            search results. Your skills, recommendations, and achievements will
            only be a click or two away. - Betts Recruiting. Let our LinkedIn
            Optimization Experts give you a befitting Linkedln profile.
          </p>
        </div>
      </div>
      <div className="linkedin_form_wrapper">
        <div className="linkedin_form_content">
          <div className="linkedin_form">
            <h2>Fill out the form below</h2>
            <div className="linkedin_form_inputs">
              <div className="linkedin_form_name">
                <label htmlFor="name">Name</label>
                <input type="text" autoComplete="off" />
              </div>
              <div className="linkedin_form_email">
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete="off" />
              </div>
              <div className="linkedin_form_cv">
                <label htmlFor="cv">CV</label>
                <DragDrop />
              </div>
              <div className="linkedin_form_button_wrapper">
                <button className="pay">Pay</button>
                <button className="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Linkedin;
