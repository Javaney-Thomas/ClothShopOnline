import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../componentsCSS/bestsellers.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const [info, setInfo] = useState([]);
  // const host = "https://phill-in-the-blank.onrender.com";
  const host = "http://localhost:8000";
  const getData = async () => {
    try {
      const response = await fetch(`${host}/api/products`);
      if (!response.ok) {
        throw new Error(`Error fetching products. Status: ${response.status}`);
      }
      const data = await response.json();
      console.table(data);
      setInfo(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  var settings = {
    dots: false,
    infinite: true,
    speed: 10,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
  };
  return (
    <div className='maincontainer'>
      <div className="carocontainer">
        <h2> Best Sellers </h2>
        <Slider {...settings}>
          {info.map((product, index) => (
            <div className="productcard" key={index}>
                <img
                  className="prodimage"
                  width="200"
                  height="250"
                  src={`${product.imagelink}`}
                  alt={product.name}
                />
                 <ins className="prodtype"><a>{product.style}</a></ins>
                 <ins className="prodbrand"><a>{product.productname}</a></ins>
                 <div className="reviews">
                  <div className="star">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="count">
                    <span>({product.numratings})</span>
                  </div>
                </div>
                <ins className="prodprice"><a>
                  As Low as
                  </a>
                  <b> {product.price}</b>
                </ins>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Carousel;