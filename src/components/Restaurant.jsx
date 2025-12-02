import React from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "../components/RestaurantCard";
import { motion } from "framer-motion";

export const Restaurant = () => {
  return (
    <div className="px-6 py-16 lg:px-20 lg:py-20 bg-[#F7F7F7]">
      {/* HEADER */}
      <motion.div
        className="font-poppins flex flex-col md:flex-row justify-between gap-6 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="font-rubik font-semibold text-3xl md:text-4xl md:w-80 text-center md:text-left">
          Our Featured Restaurants
        </h3>

        <p className="md:w-100 text-sm text-center md:text-left leading-relaxed">
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero
          et velit interdum, ac aliquet odio mattis.
        </p>

        <Link to="/" className="hidden md:block">
          <button className="border border-orange-500 text-orange-500 px-7 py-2 text-sm rounded-full hover:shadow-lg active:scale-95 transition-all font-poppins">
            View all
          </button>
        </Link>
      </motion.div>

      {/* RESTAURANT CARDS */}
      <RestaurantCard />
    </div>
  );
};
