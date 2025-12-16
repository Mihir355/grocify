import React from "react";
import Banner from "../banner/Banner";
import ProductList from "../productList/ProductList";

const CategoryPage = ({ title, categories, bgImage }) => {
  return (
    <div>
      <Banner title={title} bgImage={bgImage} />
      <div className="m-5">
        <ProductList categories={categories} />
      </div>
    </div>
  );
};

export default CategoryPage;
