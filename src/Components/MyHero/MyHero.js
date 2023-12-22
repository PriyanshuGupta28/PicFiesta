import React from "react";
import "./MyHero.css";

const MyHero = () => {
  const firstImg =
    "https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_1280.jpg";
  const secondImg =
    "https://pixabay.com/get/g626b2f9949730dd8ab3fc6b2198b24d3f2acddb4597f0f498e0a9df86ed49a361c0945d0e896ef40acec066048f91f03cecdd76847e7e1246bacdc845ea85d85_1280.jpg";
  const thirdImg =
    "https://pixabay.com/get/g2433c8631b6894de9c27796a7266d342c77c82bd8d0385447a0faeab407f11c7e0136974840d4dd6d8692c8291904cea5aa3584dbaabae5fa99f734267accad1_1280.jpg";
  const fourthImg =
    "https://pixabay.com/get/gdc6efe1add51da281129d935e0977466bb0b29e833e9d4f04fa095a5f1538d895799242a90b873eeb727ee53736c84691aae606a38411115ef59f1a920523787_1280.jpg";
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
