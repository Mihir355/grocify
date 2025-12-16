import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Heading from "../heading/Heading";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Customer1 from "../../assets/Grocery Website Assets/customer1.jpg";
import Customer2 from "../../assets/Grocery Website Assets/customer2.jpg";
import Customer3 from "../../assets/Grocery Website Assets/customer3.jpg";
import Customer4 from "../../assets/Grocery Website Assets/customer4.jpg";
import Customer5 from "../../assets/Grocery Website Assets/customer5.jpg";

const Testimonial = () => {
  return (
    <section>
      <div className="max-w-[1400px] px-10 mx-auto">
        <Heading highlight={"Customers "} normal={"Saying"} />

        <div className="flex justify-end py-5 gap-x-3">
          <button className="custom-prev text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center cursor-pointer">
            <IoIosArrowBack />
          </button>
          <button className="custom-next text-2xl rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center cursor-pointer">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="mySwiper mb-5"
        >
          {review.map((item) => (
            <SwiperSlide key={item.id} className="bg-zinc-100 rounded-xl p-8">
              <div className="flex gap-5 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover outline outline-2 outline-orange-500 outline-offset-4"
                />
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span>{item.rating} ⭐</span>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-zinc-600">{item.para}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 3,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
    image: Customer1,
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 4,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
    image: Customer2,
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 5,
    para: "Shopping online with FreshBasket has saved me so much time. I trust them for my family's weekly groceries—always fresh, affordable, and reliable.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
    image: Customer4,
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 3,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
    image: Customer5,
  },
];
