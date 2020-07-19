import React from "react";
import { Link } from "react-router-dom";
import Shoes from "./../data.json";

export const Products = () => {
  return (
    <div>
      <h1>Welcome to Products</h1>
      <div>
        {Object.keys(Shoes).map((keyName) => {
          const shoe = Shoes[keyName];
          return (
            <div className="products">
              <Link key={keyName} className="link" to={`/product/${keyName}`}>
                {/* <h4>{shoe.name}</h4> */}
                <img src={shoe.img} height={300} alt="shoe" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
