import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import fruits from "../../assets/Grocery Website Assets/fruits-banner.jpg";
const Fruits = () => {
  return (
    <div>
      <CategoryPage
        title={"Fruits & Vegetables"}
        categories={["Fruits", "Vegetables"]}
        bgImage={fruits}
      />
    </div>
  );
};

export default Fruits;
