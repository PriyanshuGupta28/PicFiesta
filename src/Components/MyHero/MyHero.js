import React from "react";
import "./MyHero.css";

const MyHero = () => {
  const firstImg =
    "https://pixabay.com/get/g289b6827961331e7a5c9fa3f0598cb6b846fb29a7661109055fcefac61564371a47ece249ed94370863a9de862113012.jpg";
  const secondImg = "";
  const thirdImg = "";
  const fourthImg = "";
  return (
    <>
      <div className="section-root">
        <div className="section-wraper">
          <div className="left-section">
            <div className="heading">
              Where Every Pixel Tells a Story: Explore, Inspire, Create Wonder
            </div>
            <div className="paragraph">
              We Provide Millions of high quality Stocks, Background,
              Illustrations and Much More.
            </div>
            <div className="section-input">
              <input placeholder="Explore" />
            </div>
          </div>
          <div className="right-section">
            <div className="upper-img-container">
              <div>
                <img src={firstImg} alt="img" />
              </div>
              <div>
                <img src={secondImg} alt="img" />
              </div>
            </div>
            <div className="lower-img-container">
              <div>
                <img src={thirdImg} alt="img" />
              </div>
              <div>
                <img src={fourthImg} alt="img" />
              </div>
            </div>
          </div>
          <div className="bottom-section">
            <div className="license-container">
              Read More About <div className="license">License</div>
            </div>
            <div className="pixabay-container">
              Free Image By <div className="pixabay">Pixabay</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyHero;
