import React from "react";
import { FaStar } from "react-icons/fa6";
import { motion } from "framer-motion";

// IMAGES
import burgerCorner from "../assets/images/burger-corner.png";
import burgerCornerLogo from "../assets/images/burger-corner-logo.png";
import cravingMore from "../assets/images/craving-more.png";
import cravingMoreLogo from "../assets/images/craving-more-logo.png";
import pastaPlace from "../assets/images/pasta-place.png";
import pastaPlaceLogo from "../assets/images/pasta-place-logo.png";
import thePlace from "../assets/images/the-place.png";
import thePlaceLogo from "../assets/images/the-place-logo.png";
import burgerClose from "../assets/images/burger-close.png";
import burgerCloseLogo from "../assets/images/burger-close-logo.png";
import wizzKitchen from "../assets/images/wizz-kitchen.png";
import wizzKitchenLogo from "../assets/images/wizz-kitchen-logo.png";

const restaurants = [
  {
    name: "Burger Corner",
    image: burgerCorner,
    logo: burgerCornerLogo,
    address: "173 New Castle Street",
    ingredients: ["Burger", "Beef", "Chicken", "Vegetable"],
  },
  {
    name: "Craving & More",
    image: cravingMore,
    logo: cravingMoreLogo,
    address: "Adrenele Street",
    ingredients: ["Rice", "Beef", "Chicken", "Side dishes"],
  },
  {
    name: "Pasta Place",
    image: pastaPlace,
    logo: pastaPlaceLogo,
    address: "New Road Street",
    ingredients: ["Pasta", "Beef", "Chicken", "Vegetable"],
  },
  {
    name: "The Place",
    image: thePlace,
    logo: thePlaceLogo,
    address: "43 Open Door Street",
    ingredients: ["Rice", "Beef", "Chicken", "Protein"],
  },
  {
    name: "Burger Close",
    image: burgerClose,
    logo: burgerCloseLogo,
    address: "17 Village Street",
    ingredients: ["Burger", "Beef", "Chicken", "Vegetable"],
  },
  {
    name: "Wizz Kitchen",
    image: wizzKitchen,
    logo: wizzKitchenLogo,
    address: "143 Opebi Street",
    ingredients: ["Burger", "Pasta", "Chicken", "Vegetable"],
  },
];

export const RestaurantCard = () => {
  return (
    <div className="py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {restaurants.map((item, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-xl p-4 w-full max-w-xs font-poppins shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {/* IMAGE */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full rounded-lg object-cover"
          />

          {/* DETAILS */}
          <div className="py-4 flex flex-col gap-3 border-b border-gray-200">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-[13px] leading-snug">
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
              libero et velit interdum.
            </p>

            {/* INGREDIENT TAGS */}
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((tag, i) => (
                <span
                  key={i}
                  className="bg-[#F7F7F7] text-xs rounded-full px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex gap-3 pt-4 items-center">
            <img src={item.logo} alt="" className="w-10 h-10 object-contain" />

            <div className="text-sm space-y-1">
              <p className="font-medium">{item.address}</p>

              <div className="flex items-center gap-3">
                <p>7:00am - 11:00pm</p>

                <div className="flex items-center text-orange-500 text-[16px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
