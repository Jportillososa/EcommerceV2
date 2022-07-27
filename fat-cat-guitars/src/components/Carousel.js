import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="carousel-container">
        <h2> Top-Sellers</h2>
        <Slider {...settings}>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/bluestrat.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">Fender American Ultra Stratocaster</h3>
            <h4 className="product-price">$2,199.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/jimihendrix.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">Jimi Hendrix Fender Stratocaster</h3>
            <h4 className="product-price">$1,099.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/epiphone.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">
              Epiphone J-200 Acoustic-Electric Guitar
            </h3>
            <h4 className="product-price">$949.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/strat3.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">
              American Ultraa Luxe Fender Stratocaster
            </h3>
            <h4 className="product-price">$2,099.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/bluetelecaster.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">Fender American Ultra Telecaster</h3>
            <h4 className="product-price">$1399.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/kurt.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">Kurt Cobaine Fender Jag-Stang</h3>
            <h4 className="product-price">$1,299.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/morello.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">Tom Morello Fender Stratocaster</h3>
            <h4 className="product-price">$1,599.99</h4>
            <button>Check it out!</button>
          </div>
          <div className="slide-container">
            <img
              className="featured-products"
              src="/images/martin.jpg"
              alt="guitar"
            />
            <h3 className="slide-text">
              Martin D-28 Dreadnought Acoustic Guitar
            </h3>
            <h4 className="product-price">$2,399.99</h4>
            <button>Check it out!</button>
          </div>
        </Slider>
      </div>
    );
  }
}
