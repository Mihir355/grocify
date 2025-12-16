import React from "react";
import CategoryPage from "../categoryPage/CategoryPage";
import dairy from "../../assets/Grocery Website Assets/dairy-banner.jpg";
const Dairy = () => {
  return (
    <div>
      <CategoryPage title={"Dairy"} categories={["Dairy"]} bgImage={dairy} />
    </div>
  );
};

export default Dairy;
