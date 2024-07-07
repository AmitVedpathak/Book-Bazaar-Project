import React from "react";

function Bookcard({item}){
// console.log(item)
  return (
    <div className="mt-4 p-4">
      <div className="mx-auto p-6 hover:scale-105 duration-200">
        <div className="card bg-base-100 shadow-xl mx-auto hover:scale hover:shadow-md  dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="badge badge-outline p-3 hover:bg-pink-500 hover:text-white duration-300">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookcard;
