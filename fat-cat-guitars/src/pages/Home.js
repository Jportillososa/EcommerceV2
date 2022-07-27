import React from "react";
import "./Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../components/Carousel";
import "../components/Carousel.css";

function Home() {
  return (
    <div>
      <div className="hero-image"></div>
      <SimpleSlider />
    </div>
  );
}
export default Home;
