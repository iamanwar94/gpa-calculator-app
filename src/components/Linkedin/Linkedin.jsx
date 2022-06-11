import React from "react";
import colors from "./images/colors.png";
import black from "./images/black.png";
import "./Linkedin.css";

const Linkedin = () => {
  return (
    <div className="linkedin bg-danger">
      <div
        className="image_para"
        style={{ backgroundImage: `url('${colors}')` }}
      >
        <div className="images">
          <img src={black} alt="black" className="w-100 image-black" />
        </div>
        <div className="heading_para w-75 text-white p-5">
          <h1 className="linkedin_heading">Linked Profile Optimization</h1>
          <p className="linkedin_para mb-5 mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
            quidem, pariatur nesciunt veniam iste exercitationem impedit vero
            odio, temporibus inventore nobis non quae quod voluptas rerum
            voluptate consectetur adipisci accusamus. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Distinctio iure recusandae
            numquam, quisquam quae id culpa magnam eveniet amet repudiandae sint
            optio obcaecati ducimus dolor voluptatem. Dolore placeat dolores
            veniam sint minus, nostrum alias. Doloribus, laborum voluptatibus.
            Aliquid minima nobis dolores reprehenderit hic, amet nihil!
            Laudantium expedita voluptates aliquid numquam! Natus commodi
            praesentium tempora quidem, tempore vel, repellat eveniet facere
            illum nihil exceptur
          </p>
          <p className="linkedin_para_2 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat,
            quasi.
          </p>
        </div>
      </div>
      <div className="linkedin_form_bg mx-auto p-5">
        <div className="linkedin_form_wrapper bg-white mx-auto rounded-3 p-3">
          <div className="linkedin_form w-50">
            <h3 className="linkedin_form_heading">Fill out the form below</h3>
            <form className="w-100 d-flex justify-content-around flex-column">
              <div className="input">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  autoComplete="off"
                />
              </div>
              <div className="input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="off"
                />
              </div>
              <div className="input">
                <label htmlFor="cv">CV:</label>
                <input type="file" id="cv" value="" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkedin;
