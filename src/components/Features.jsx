import React from "react";
import { motion } from "framer-motion";
import order from "../assets/images/craving-order.png";
import track from "../assets/images/craving-track-order.png";
import review from "../assets/images/craving-review.png";

const OrderFeatures = [
  {
    img: order,
    title: "Order Processing",
    description:
      "Add a personal touch to your order. Customize ingredients, choose portion sizes, and make your meal truly yours.",
  },
  {
    img: track,
    title: "Track Order",
    description:
      "Watch as your order is prepared, dispatched, and arrives at your doorstep. Real-time updates ensure you're always in the loop.",
  },
  {
    img: review,
    title: "Review",
    description:
      "Watch as your order is prepared, dispatched, and arrives at your doorstep. Real-time updates ensure you're always in the loop.",
  },
];

// Animation Variants
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
  }),
};

export const Features = () => {
  return (
    <div className="px-6 py-16 lg:px-20 lg:py-20">
      {/* HEADER */}
      <motion.div
        className="font-poppins flex flex-col gap-4 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold font-rubik">
          Our Features
        </h2>
        <p className="text-sm md:text-[16px] text-gray-600">
          Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </motion.div>

      {/* FEATURE CARDS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12 font-poppins">
        {OrderFeatures.map((card, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-2 border-[#F7F7F7] rounded-xl p-6 flex flex-col gap-5 items-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src={card.img}
              alt={card.title}
              className="bg-[#F7F7F7] rounded-lg px-6 py-10 w-fit"
            />

            <h2 className="text-xl font-bold self-start font-rubik">
              {card.title}
            </h2>

            <p className="text-[13px] text-gray-600">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
