import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import seafood from "../../assets/Grocery Website Assets/seafood-banner.jpg";
const SeaFood = () => {
  return (
    <div>
      <CategoryPage
        title={"SeaFood & Meat"}
        categories={["SeaFood", "Meat"]}
        bgImage={seafood}
      />
    </div>
  );
};

export default SeaFood;
