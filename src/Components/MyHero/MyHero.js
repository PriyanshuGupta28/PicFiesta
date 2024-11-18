import React, { useState } from "react";
import "./MyHero.css";
import { withSuccess } from "antd/es/modal/confirm";
import { useDispatch, useSelector } from "react-redux";
import { SEARCHQUERY } from "../../Utility/ReduxConstants/SearchConstants/SearchConstants";
import { useLocation, useNavigate } from "react-router-dom";

const MyHero = ({ heroDetails }) => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const navlink = useSelector((state) => state.navLinks?.currentLink);
  const firstImg =
    "https://cdn.pixabay.com/photo/2014/05/22/16/52/pyrenees-351266_1280.jpg";
  const secondImg =
    "https://c4.wallpaperflare.com/wallpaper/271/986/465/nature-plants-macro-depth-of-field-wallpaper-preview.jpg";
  const thirdImg =
    "https://c4.wallpaperflare.com/wallpaper/799/610/330/blue-stars-mountains-starry-night-wallpaper-preview.jpg";
  const fourthImg =
    "https://c4.wallpaperflare.com/wallpaper/28/23/751/ultra-hd-8k-resolution-7680x4320-nature-wallpaper-preview.jpg";

  const handleChnage = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (search?.length !== 0 && search !== "") {
        dispatch({
          type: SEARCHQUERY,
          payload: search,
        });
      }
      if (location.pathname === "/") {
        navigate(`all/search`);
      } else {
        navigate(`${navlink}/search`);
      }
    }
  };

  const handleSubmit = () => {
    if (search?.length !== 0 && search !== "") {
      console.log(search, "handleKeyDown");
      dispatch({
        type: SEARCHQUERY,
        payload: search,
      });
      if (location.pathname === "/") {
        navigate(`all/search`);
      } else {
        navigate(`${navlink}/search`);
      }
    }
  };

  return (
    <>
      <div className="section-root">
        <div className="section-wraper">
          <div className="left-section">
            <div className="heading">{heroDetails?.title}</div>
            <div className="paragraph">{heroDetails?.description}</div>
            <div className="section-input">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                onClick={handleSubmit}
              >
                <path
                  d="M15 4.125C21.0061 4.125 25.875 8.99391 25.875 15C25.875 17.5978 24.9641 19.9829 23.4443 21.8532L30.7955 29.2045C31.2348 29.6439 31.2348 30.3561 30.7955 30.7955C30.3962 31.1949 29.7711 31.2312 29.3307 30.9044L29.2045 30.7955L21.8532 23.4443C19.9829 24.9641 17.5978 25.875 15 25.875C8.99391 25.875 4.125 21.0061 4.125 15C4.125 8.99391 8.99391 4.125 15 4.125ZM15 6.375C10.2365 6.375 6.375 10.2365 6.375 15C6.375 19.7634 10.2365 23.625 15 23.625C19.7634 23.625 23.625 19.7634 23.625 15C23.625 10.2365 19.7634 6.375 15 6.375Z"
                  fill="black"
                  fill-opacity="0.25"
                />
              </svg>
              <input
                placeholder="Explore"
                value={search}
                onChange={handleChnage}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          <div className="right-section">
            <div className="upper-img-container">
              <div>
                <img src={firstImg || firstImg} alt="img" />
              </div>
              <div>
                <img src={secondImg || secondImg} alt="img" />
              </div>
            </div>
            <div className="lower-img-container">
              <div>
                <img src={thirdImg || thirdImg} alt="img" />
              </div>
              <div>
                <img src={heroDetails?.images || fourthImg} alt="img" />
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
