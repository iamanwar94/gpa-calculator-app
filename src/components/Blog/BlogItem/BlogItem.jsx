import React from "react";
import bgitem from "../images/bg-blog-item.png";
import smallone from "../images/blogbgsmall1.png";
import stone from "../images/stone.png";
import "./BlogItem.css";
import Ads from "../../Ad/Ads";

const BlogItem = () => {
  return (
    <div className="blog_item_wrapper">
      <div
        className="blog_item_header"
        style={{ backgroundImage: `url('${bgitem}')` }}
      ></div>
      <div className="blog_item_container container">
        <div className="blog_item_content">
          <h6>June 23 2022</h6>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            adipiscing et tincidunt rutrum eros mauris nibh adipiscing.
            Pellentesque ut risus, ipsum eleifend massa fames. Sed cursus urna
            sed egestas ac lorem eu diam. Nulla non pretium, et sed. Consequat
            non sed tempor lobortis. Dui enim felis sed vitae pulvinar. At
            suspendisse sed est, placerat et, faucibus ut et, amet. Justo
            scelerisque massa egestas pretium eu erat semper nec suspendisse. Mi
            dictum tristique non feugiat amet tincidunt ac lectus. Vitae, tempor
            velit senectus vitae aenean.
            <div className="blog_item_img">
              <img
                src={bgitem}
                alt="blog-img"
                style={{ width: "100%", height: "300px", borderRadius: "8px" }}
              />
            </div>
            Id felis ac tristique sit. Tellus et tincidunt augue interdum enim
            et augue eget pellentesque. Vestibulum at nullam neque varius risus
            et viverra orci, nibh. Ultricies pellentesque maecenas at nunc
            viverra sapien, ac. Egestas elementum euismod nascetur tincidunt
            proin scelerisque iaculis imperdiet. At sit mauris condimentum fusce
            vel potenti enim. Massa a etiam sit consectetur amet euismod lectus.
            Nunc, rhoncus ullamcorper libero libero vitae pharetra massa. In
            commodo morbi risus egestas duis. Vitae risus metus id vel
            fermentum, bibendum scelerisque aliquet cras. Leo dictumst nunc, nec
            adipiscing etiam etiam eu. Mattis velit at vitae tellus arcu.
            Bibendum et sit amet ac. Suspendisse eget erat leo at vel hac vitae.
            Arcu cras sit elementum maecenas sed. Sit eget in tempus fusce
            consectetur gravida enim, felis vitae. Sit in vel feugiat lacus,
            eget mattis placerat proin vitae. Lacus, lectus leo amet, blandit
            mi, faucibus. Leo sem interdum non eget platea enim orci. Volutpat
            justo, orci, nulla vulputate at eu volutpat. Aenean nunc diam elit
            eget sed et, purus risus felis. Arcu platea feugiat suspendisse sit
            at in nec feugiat. Pharetra, diam elementum sociis diam dolor a.
            Ornare curabitur scelerisque quis quam tristique a nunc, mi mattis.
            Lobortis velit nisi purus nunc, tempor. Tortor, habitant vitae nisl
            pellentesque scelerisque nec quam volutpat. Lectus consequat, morbi
            lorem praesent aenean integer dapibus sed mollis. Lectus lacus est
            varius eget non, elementum eget elementum commodo. Posuere felis
            gravida enim vitae faucibus egestas libero vitae ullamcorper. Nunc
            vulputate dui consectetur orci, maecenas ultrices. Eget risus nullam
            tincidunt cum amet, vitae, diam elit. Egestas mattis luctus
            fringilla aliquam turpis. Ultricies vitae est sit feugiat neque
            placerat. Tincidunt viverra ultrices justo, tristique elementum
            purus. Ut tortor augue a tempus parturient natoque turpis metus.
            Aliquet sagittis scelerisque faucibus ullamcorper vestibulum cursus.
            Et ut blandit eget venenatis est lectus nec aliquam. Viverra etiam
            egestas in congue. Urna vitae ornare sed ullamcorper pellentesque.
            Scelerisque fames quis pellentesque sociis viverra dictum duis
            vulputate enim. Nibh lacinia duis in dolor at morbi praesent. Dictum
            mi quam vestibulum proin. Non id arcu donec fames urna morbi. Lacus
            sit hendrerit potenti bibendum nunc. Cras eu, eleifend in nisl
            fermentum, adipiscing id viverra. Massa quam scelerisque sed diam
            rhoncus, ut odio bibendum. Ac scelerisque sapien pellentesque amet
            morbi hac. In mi lacus, facilisis habitant lobortis nunc. Volutpat,
            vel proin sit pharetra, aliquam fames sed. Quis ridiculus quis porta
            faucibus sit cursus aliquet condimentum. Tempus ornare sed elit,
            egestas sed aliquam ut quis hac. Accumsan ultricies amet eu
            malesuada sapien at. Sed dolor at amet, lectus sed elementum, non,
            urna vulputate. Tortor in at amet id cursus nulla.
          </p>
          <div className="blog_item_article_footer">
            <p>Effiko</p>
            <p className="text-secondary">12 May 2022 12:18 AM</p>
            <p>
              <i className="fa-solid fa-share-nodes"></i>Share
            </p>
          </div>
        </div>
        {/* content ends here  */}
        <div className="blog_latest_articles_line mt-5 mb-5">
          <h2 className="">Related Articles</h2>
          <div className="line"></div>
        </div>
        {/* line ends  */}

        <div className="rel_articles_cards_wrapper">
          <div
            className="rel_articles_card"
            style={{
              backgroundImage: `url('${smallone}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="article_detail">
              <div className="article_deatil_heading_para_wrapper">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                  tellus varius.
                </p>
              </div>
              <div className="article_footer">
                <p>Effiko</p>
                <p>12-06-2022</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          </div>
          {/* first small card ends  */}
          <div
            className="rel_articles_card"
            style={{
              backgroundImage: `url('${stone}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="article_detail">
              <div className="article_deatil_heading_para_wrapper">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                  tellus varius.
                </p>
              </div>
              <div className="article_footer">
                <p>Effiko</p>
                <p>12-06-2022</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          </div>
          {/* second card ends here  */}

          <div
            className="rel_articles_card"
            style={{
              backgroundImage: `url('${stone}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="article_detail">
              <div className="article_deatil_heading_para_wrapper">
                <h1>Lorem ipsum dolor sit amet, consectetur adipiscing.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tincidunt tellus varius. Tincidunt tellus varius. Tincidunt
                  tellus varius.
                </p>
              </div>
              <div className="article_footer">
                <p>Effiko</p>
                <p>12-06-2022</p>
                <p>
                  <i className="fa-solid fa-share-nodes"></i>Share
                </p>
              </div>
            </div>
          </div>

          {/* third card ends here  */}
        </div>
        {/* related articles ends here  */}
        <div className="blogs_ads">
          <Ads />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
