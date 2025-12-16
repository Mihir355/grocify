import React from "react";
import Hero from "../hero/Hero";
import Heading from "../heading/Heading";
import Card from "../card/Card";
import Value from "../value/Value";
import Product from "../product/Product";
import Discount from "../discount/Discount";
import FruitCat from "../../assets/Grocery Website Assets/fruits-and-veggies.png";
import DiaryCat from "../../assets/Grocery Website Assets/dairy-and-eggs.png";
import MeatCat from "../../assets/Grocery Website Assets/meat-and-seafood.png";
import Process from "../process/Process";
import Testimonial from "../testimonial/Testimonial";
const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Fruits & Veggies",
      description:
        "Fresh organic produce sourced daily from localfarms. Explore a wide range of seasonal fruits and crisp vegetables.",
      image: FruitCat,
      path: "/fruits",
    },
    {
      id: 2,
      title: "Dairy & Eggs",
      description:
        "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
      image: DiaryCat,
      path: "/dairy",
    },
    {
      id: 3,
      title: "Meats & Seafood",
      description:
        "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
      image: MeatCat,
      path: "/seafood",
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 pt-[14vh]">
      <Hero />
      <Heading highlight={"Shop "} normal={"by Category"} />
      <Card array={categories} />
      <Value />
      <Product />
      <Discount />
      <Process />
      <Testimonial />
    </div>
  );
};

export default Home;
