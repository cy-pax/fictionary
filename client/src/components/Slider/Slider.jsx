
import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://ultrawidewallpapers.com/wp-content/uploads/2017/12/bible-3440x1440.jpg",

];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
        <img src="https://ultrawidewallpapers.com/wp-content/uploads/2017/12/bible-3440x1440.jpg" alt="" />
        <img src={data[0]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" >
          
        </div>
        <div className="icon" >
          
        </div>
      </div>
    </div>
  );
};

export default Slider;