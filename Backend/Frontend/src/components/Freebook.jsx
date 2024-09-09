import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Bookcard from "./Bookcard";
import axios from 'axios'

function Freebook() {
  const [book,setBook] =useState([]);
  useEffect(()=>{
    const getBook =async ()=>{
      try {
       const res = await axios.get("/book")
       setBook(res.data.filter((data) => data.category === "free"));
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
//   console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <>
      <div className="max-w-screen-2xl container px-3 md:container mx-auto md:px-20">
        <div>
          <h1 className="font-bold">Free Offered Book</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
            molestiae tempore amet cupiditate tenetur assumenda at reiciendis
            perspiciatis error non, ipsa, suscipit pariatur enim ullam. Nobis
            nulla enim reiciendis quibusdam.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item)=>(
                <Bookcard item={item} key={item.key}/>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
