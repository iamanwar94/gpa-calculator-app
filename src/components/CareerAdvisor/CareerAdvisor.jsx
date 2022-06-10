import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Career.css";
import advisor from "./images/advisor.png";
import black from "./images/black.png";
import CareerAdviosrItems from "./CareerAdvisorItems";

const CareerAdvisor = () => {
  const [advisors, setAdvisors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAdvisors() {
      try {
        const response = await axios.get(
          "https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books"
        );
        console.log(response.data);
        setAdvisors(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getAdvisors();
  }, []);

  return (
    <div className="advisors_wrapper">
      <div
        className="advisor_image_para_btn d-flex"
        style={{ backgroundImage: `url('${advisor}')` }}
      >
        <img src={black} alt="black" className="w-50 black_img" />
        <div className="advisor_detail w-50">
          <h1 className="text-white">Ahmed Ali</h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            nesciunt dolorum sunt vero quos est delectus, similique autem
            necessitatibus cumque quia sequi quidem, quisquam voluptatem
            consequatur voluptate fugiat? Iusto modi ipsum incidunt consequatur
            molestiae sunt labore, dolor, qui consectetur, asperiores esse
            debitis. Accusamus consequatur nisi maiores aperiam beatae? Eaque,
            voluptate!
          </p>
          <div className="advisor_btn d-flex justify-content-between">
            <button type="button" class="btn btn-white btn-lg">
              <i className="fa-solid fa-phone"></i>
              Schedule a Call
            </button>
            <button type="button" class="btn btn-primary btn-lg">
              <i className="fa-brands fa-linkedin"></i>
              Linkedin
            </button>
          </div>
        </div>
      </div>
      <div className="container h-100 mt-5">
        <h1 className=""> Career Advisors</h1>
        <div className="">
          <div className="advisor-card-wrapper row rounded">
            {loading ? (
              <h1 className="mb-5 mt-5 mx-auto text-center text-danger">
                Loading...
              </h1>
            ) : (
              advisors.map((book) => (
                <div className="col-md-3 mb-5 mt-5 mx-auto">
                  <CareerAdviosrItems
                    id={advisors.id}
                    title={advisors.title}
                    image={advisors.cover_image}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerAdvisor;
