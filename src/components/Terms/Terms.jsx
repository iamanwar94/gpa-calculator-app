import React from "react";
import "./Terms.css";
import terms from "./images/terms.png";
const Terms = () => {
  return (
    <div className="term_wrapper">
      <div className="terms_content">
        <h1>Posuere massa quam feugiat ultrices eu.</h1>
        <div className="terms_content_heading_para">
          <h3>
            <button>1</button>
            Luctus sed sodales vestibulum vitae tincidunt non.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla venenatis porttitor diam massa dictum tempor faucibus natoque.
            Velit et lorem leo feugiat amet. Luctus velit tempor et morbi tellus
            massa suspendisse. Fermentum eleifend eget amet, imperdiet enim
            mauris platea magnis id. Integer nulla erat velit faucibus
            scelerisque.
          </p>
        </div>
        <div className="terms_content_heading_para">
          <h3>
            <button>2</button>
            Luctus sed sodales vestibulum vitae tincidunt non.
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla venenatis porttitor diam massa dictum tempor faucibus natoque.
            Velit et lorem leo feugiat amet. Luctus velit tempor et morbi tellus
            massa suspendisse. Fermentum eleifend eget amet, imperdiet enim
            mauris platea magnis id. Integer nulla erat velit faucibus
            scelerisque.
          </p>
        </div>
      </div>
      <div className="terms_images">
        <img src={terms} alt="terms" />
        <div className="terms_faq">
          <h5>Frequently asked questons</h5>
          <p>
            <button>?</button>Lorem ipsum dolor sit amet.
          </p>
          <p>
            <button>?</button>Lorem ipsum dolor sit amet.
          </p>
          <p>
            <button>?</button>Lorem ipsum dolor sit amet.
          </p>
          <p>
            <button>?</button>Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
