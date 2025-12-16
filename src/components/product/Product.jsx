import React, { useState } from "react";
import Heading from "../heading/Heading";
import ProductList from "../productList/ProductList";

const Product = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Heading highlight={"Our "} normal={"Products"} />

      <div className="flex flex-row gap-x-3 px-5 py-2 justify-center">
        {categories.map((item) => (
          <button
            key={item}
            className={`${
              category === item ? "bg-orange-500 text-white" : "bg-gray-300"
            } p-3 rounded-xl cursor-pointer`}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <ProductList categories={category} />
    </div>
  );
};

export default Product;
