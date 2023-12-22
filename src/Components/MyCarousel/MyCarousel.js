import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "560px",
  color: "#fff",
  lineHeight: "560px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};

const MyCarousel = () => {
  return (
    <Carousel autoplay dotPosition="right">
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  );
};

export default MyCarousel;
