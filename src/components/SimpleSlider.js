import React, { Component } from "react";
import Slider from "react-slick";



import pic1 from "../images/sliders/s1.png";
import pic2 from "../images/sliders/s2.png";
import pic3 from "../images/sliders/s1 copy.png";
import pic4 from "../images/sliders/s2 copy.png";
import "../styles/index.css"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      centerMode: true
      
      
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={pic1} alt="d"/>
          </div>
          <div>
            <img src={pic2} alt="d"/>
          </div>
          <div>
            <img src={pic3} alt="d"/>
          </div>
          <div>
            <img src={pic4} alt="d"/>
          </div>
          
        </Slider>
      </div>
    );
  }
}