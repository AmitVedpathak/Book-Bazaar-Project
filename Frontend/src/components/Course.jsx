import React, { useEffect, useState } from "react";
import Bookcard from "./Bookcard";
import axios from 'axios'
import {Link} from 'react-router-dom'
function Course() {
  const [book,setBook] =useState([]);
  useEffect(()=>{
    const getBook =async ()=>{
      try {
       const res = await axios.get("http://localhost:3045/book")
       console.log(res.data);
       setBook(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20-2 px-4">
        <div className="pt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighed to have you{" "}
            <span className="text-pink-500">Here! :)</span>{" "}
          </h1>
          <p className="mt-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
            reiciendis quis dicta! Nulla fuga placeat dignissimos doloribus
            eveniet aperiam aliquid sunt fugiat, eum quibusdam ut expedita
            deserunt! Nam, qui deserunt. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Et eius nulla, quasi quos culpa iste.{" "}
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white rounded-md px-3 py-2 mt-3 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Bookcard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
