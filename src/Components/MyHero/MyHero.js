import React from "react";
import "./MyHero.css";
import { Input } from "antd";

const MyHero = () => {
  return (
    <>
      <div className="section-root">
        <div className="section-wraper">
          <div className="left-section">
            <div className="heading">
              Where Every Pixel Tells a Story: Explore, Inspire, Create Wonder{" "}
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
                <img
                  src="https://pixabay.com/get/g289b6827961331e7a5c9fa3f0598cb6b846fb29a7661109055fcefac61564371a47ece249ed94370863a9de862113012.jpg"
                  alt="img"
                />
              </div>
              <div>
                <img
                  src="https://pixabay.com/get/g4681ce952a52fd107bbf2016f14142af4fa382ee5a4c2418f14cb01c8a9dc4449c7d1e89b88cd8f81332295ec7e7dc10.jpg"
                  alt="img"
                />
              </div>
            </div>
            <div className="lower-img-container">
              <div>
                <img
                  src="https://pixabay.com/get/g34559c9e587b9082bc94a0d9f93f8294df04e32bd0087599023cba2f353c137c8d45b6b1f09cc7e2bd47f995ec7e2a3f.jpg"
                  alt="img"
                />
              </div>
              <div>
                <img
                  src="https://pixabay.com/get/gb5be89dc465d58a9c11011397eef08b072d1a52bd6c90ed5d7b525ae00cb0f0834106369ecf1054c3b979abc164ae3ce.jpg"
                  alt="img"
                />
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
