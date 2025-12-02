import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import customer1 from "../assets/images/craving-customer1.png";
import customer2 from "../assets/images/craving-customer2.png";
import customer3 from "../assets/images/craving-customer3.png";

const review = [
  {
    image: customer1,
    name: "Darrell Steward",
    occupation: "Student",
  },
  {
    image: customer2,
    name: "Kathryn Murphy",
    occupation: "Worker",
  },
  {
    image: customer3,
    name: "Esther Howard",
    occupation: "CEO",
  },
 {
    image: customer1,
    name: "Darrell Steward",
    occupation: "Student",
  },
  {
    image: customer2,
    name: "Kathryn Murphy",
    occupation: "Worker",
  },
  {
    image: customer3,
    name: "Esther Howard",
    occupation: "CEO",
  },
];

export const Review = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % review.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + review.length) % review.length);
  };

  return (
    <div className="px-6 py-16 lg:px-20 lg:py-24 flex flex-col gap-8">
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-rubik text-3xl font-semibold text-center"
      >
        What Customers Say
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="font-poppins text-sm text-center max-w-xl mx-auto"
      >
        Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </motion.p>

      {/* Slider for mobile */}
      <div className="relative block md:hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-[#F7F7F7] p-5 rounded-lg space-y-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <img
              src={review[current].image}
              alt={review[current].name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{review[current].name}</p>
              <p className="text-xs text-gray-600">
                {review[current].occupation}
              </p>
            </div>
          </div>

          <p className="text-sm font-light">
            The attention to detail in crafting each dish is truly commendable.
            Every ingredient seems to have a purpose, contributing to a symphony
            of tastes that is both delightful and satisfying.
          </p>
        </motion.div>

        {/* Arrows */}
        <div className="flex justify-center gap-5 mt-4">
          <button
            onClick={handlePrev}
            className="p-2 bg-white rounded-full shadow-md active:scale-95"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            className="p-2 bg-white rounded-full shadow-md active:scale-95"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Desktop slider for md+ screens */}
      <div className="hidden md:block relative">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-7"
            animate={{ x: `-${current * 360}px` }} 
            transition={{ type: "spring", stiffness: 50 }}
          >
            {review.map((user, index) => (
              <motion.div
                key={index}
                className="bg-[#F7F7F7] p-6 rounded-lg font-rubik space-y-5 shadow-sm hover:shadow-lg transition-all min-w-[340px]"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-xs text-gray-600">{user.occupation}</p>
                  </div>
                </div>

                <p className="text-sm font-light">
                  The attention to detail in crafting each dish is truly
                  commendable. Every ingredient seems to have a purpose,
                  contributing to a symphony of tastes that is both delightful 
                  and satisfying.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Desktop arrows */}
        <div className="flex justify-center gap-5 mt-6">
          <button
            onClick={handlePrev}
            className="p-3 bg-white rounded-full shadow-md active:scale-95"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={handleNext}
            className="p-3 bg-white rounded-full shadow-md active:scale-95"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
