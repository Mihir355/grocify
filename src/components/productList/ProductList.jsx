import Butter from "../../assets/Grocery Website Assets/butter.png";
import Strawberry from "../../assets/Grocery Website Assets/strawberry.png";
import Eggs from "../../assets/Grocery Website Assets/eggs.png";
import Cabbage from "../../assets/Grocery Website Assets/cabbage.png";
import Eggplant from "../../assets/Grocery Website Assets/eggplant.png";
import Shrimp from "../../assets/Grocery Website Assets/shrimp.png";
import Kiwi from "../../assets/Grocery Website Assets/kiwi.png";
import Capsicum from "../../assets/Grocery Website Assets/capsicum.png";
import Broccoli from "../../assets/Grocery Website Assets/broccoli.png";
import Yogurt from "../../assets/Grocery Website Assets/yogurt.png";
import Beef from "../../assets/Grocery Website Assets/beef.png";
import ChickenBreast from "../../assets/Grocery Website Assets/chicken-breast.png";
import Kale from "../../assets/Grocery Website Assets/kale.png";
import Cheese from "../../assets/Grocery Website Assets/cheese.png";
import CondensedMilk from "../../assets/Grocery Website Assets/condensed-milk.png";
import Salmon from "../../assets/Grocery Website Assets/salmon.png";
import Banana from "../../assets/Grocery Website Assets/banana.png";
import Milk from "../../assets/Grocery Website Assets/milk.png";
import Pineapple from "../../assets/Grocery Website Assets/pineapple.png";
import Tofu from "../../assets/Grocery Website Assets/tofu.png";
import Tilapia from "../../assets/Grocery Website Assets/tilapia.png";
import SliceCheese from "../../assets/Grocery Website Assets/slice-cheese.png";
import RicottaCheese from "../../assets/Grocery Website Assets/ricotta-cheese.png";
import Grapes from "../../assets/Grocery Website Assets/grapes.png";
import Lettuce from "../../assets/Grocery Website Assets/lettuce.png";
import { FaHeart, FaPlus } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Button from "../button/Button";

const ProductList = ({ categories }) => {
  const PList = [
    {
      id: 1,
      name: "Strawberry",
      price: 3.0,
      category: "Fruits",
      image: Strawberry,
    },
    {
      id: 2,
      name: "Butter",
      price: 3.5,
      category: "Dairy",
      image: Butter,
    },
    {
      id: 3,
      name: "Eggs",
      price: 2.05,
      category: "Dairy",
      image: Eggs,
    },
    {
      id: 4,
      name: "Cabbage",
      price: 3.0,
      category: "Vegetables",
      image: Cabbage,
    },
    {
      id: 5,
      name: "Eggplant",
      price: 4.0,
      category: "Vegetables",
      image: Eggplant,
    },
    {
      id: 6,
      name: "Shrimp",
      price: 3.5,
      category: "SeaFood",
      image: Shrimp,
    },
    {
      id: 7,
      name: "Kiwi",
      price: 2.05,
      category: "Fruits",
      image: Kiwi,
    },
    {
      id: 8,
      name: "Green Capsicum",
      price: 4.0,
      category: "Vegetables",
      image: Capsicum,
    },
    {
      id: 9,
      name: "Broccoli",
      price: 2.0,
      category: "Vegetables",
      image: Broccoli,
    },
    {
      id: 10,
      name: "Yogurt",
      price: 3.0,
      category: "Dairy",
      image: Yogurt,
    },
    {
      id: 11,
      name: "Beef",
      price: 8.0,
      category: "Meat",
      image: Beef,
    },
    {
      id: 12,
      name: "Chicken Breast",
      price: 7.0,
      category: "Meat",
      image: ChickenBreast,
    },
    {
      id: 13,
      name: "Kale Leaves",
      price: 3.0,
      category: "Vegetables",
      image: Kale,
    },
    {
      id: 14,
      name: "Mozzarella Cheese",
      price: 7.0,
      category: "Dairy",
      image: Cheese,
    },
    {
      id: 15,
      name: "Condensed Milk",
      price: 5.0,
      category: "Dairy",
      image: CondensedMilk,
    },
    {
      id: 16,
      name: "Salmon Filet ",
      price: 4.0,
      category: "SeaFood",
      image: Salmon,
    },
    {
      id: 17,
      name: "Banana ",
      price: 2.0,
      category: "Fruits",
      image: Banana,
    },
    {
      id: 18,
      name: "Milk Bottle (3)",
      price: 8.0,
      category: "Dairy",
      image: Milk,
    },
    {
      id: 19,
      name: "PineApple",
      price: 5.0,
      category: "Fruits",
      image: Pineapple,
    },
    {
      id: 20,
      name: "Tofu Cubes",
      price: 4.0,
      category: "Dairy",
      image: Tofu,
    },
    {
      id: 21,
      name: "Tilapia Fish",
      price: 3.0,
      category: "SeaFood",
      image: Tilapia,
    },
    {
      id: 22,
      name: "Slice Cheese",
      price: 5.0,
      category: "Dairy",
      image: SliceCheese,
    },
    {
      id: 23,
      name: "Ricotta Cheese",
      price: 7.0,
      category: "Dairy",
      image: RicottaCheese,
    },
    {
      id: 24,
      name: "Grapes",
      price: 3.0,
      category: "Fruits",
      image: Grapes,
    },
    {
      id: 25,
      name: "Lettuce Leaf",
      price: 3.0,
      category: "Vegetables",
      image: Lettuce,
    },
  ];

  const [likedItems, setLikedItems] = useState([]);
  const [bagItems, setBagItems] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setVisibleCount(8);
  }, [categories]);

  const toggleBag = (id) => {
    setBagItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleLike = (id) => {
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const filteredProducts =
    !categories || categories.length === 0 || categories.includes("All")
      ? PList
      : PList.filter((item) => categories.includes(item.category));

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5">
        {visibleProducts.map((item) => (
          <div className="bg-gray-200 p-5 rounded-2xl" key={item.id}>
            <div className="flex justify-between">
              <FaHeart
                className={`${
                  likedItems.includes(item.id) ? "text-red-500" : "text-white"
                } text-2xl cursor-pointer`}
                onClick={() => toggleLike(item.id)}
              />
              <FaPlus
                className={`${
                  bagItems.includes(item.id) ? "text-black" : "text-white"
                } bg-orange-500 text-2xl p-1 rounded cursor-pointer`}
                onClick={() => toggleBag(item.id)}
              />
            </div>

            <div className="flex justify-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover"
              />
            </div>

            <div className="flex flex-col gap-y-2 items-center">
              <span className="text-xl">{item.name}</span>
              <span className="font-bold">${item.price}</span>
              <Button props={"Shop Now"} />
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL BUTTON */}
      {visibleCount < filteredProducts.length && (
        <div className="flex justify-center pt-5">
          <button
            onClick={() => setVisibleCount(filteredProducts.length)}
            className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition"
          >
            View All
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
