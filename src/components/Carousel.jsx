import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion"
import clock from "../assets/images/clock.svg"
import user from "../assets/images/securityuser.svg"
import location from "../assets/images/location.svg"
import cocacola from "../assets/images/craving-cocaCola.png"

const infoCards = [
  {
    img: clock,
    title: "24hrs Fast Delivery",
    description:
      "Once the order is received, the business processes it, which involves preparing the products, packaging them, and assigning the order to a delivery team.",
  },
  {
    img: user,
    title: "Place An Order",
    description:
      "Customers place their orders through the business's website, mobile app, or other ordering platforms. They select the items they want to purchase and provide.",
  },
  {
    img: location,
    title: "Track Delivery",
    description:
      "Watch as your order is prepared, dispatched, and arrives at your doorstep. Real-time updates ensure you stay informed.",
  },
];

const logos = [cocacola, cocacola, cocacola, cocacola, cocacola];

export const Carousel = () => {
 const carouselRef = useRef(null);
 const [scrollWidth, setScrollWidth] = useState(0)

   useEffect(() => {
    if (carouselRef.current) {
      // total width of the duplicated logos
      setScrollWidth(carouselRef.current.scrollWidth / 2);
    }
  }, [])

  return (
    <div className="px-6 py-10 md:px-20 lg:py-24 flex flex-col gap-20">
      {/* INFO CARDS */}
      <div className="grid md:grid-cols-3 gap-12">
        {infoCards.map((card, index) => (
          <motion.div
            key={index}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-5 w-fit max-sm:mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={card.img}
              alt={card.title}
              className="bg-[#F7F7F7] py-2 px-3 rounded-lg h-fit"
            />
            <div className="space-y-2">
              <h2 className="font-rubik text-xl font-bold max-sm:text-center">
                {card.title}
              </h2>
              <p className="font-poppins text-sm text-gray-700">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* SLIDING LOGO CAROUSEL */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["0%", "-40%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {logos.concat(logos).map((logoSrc, index) => (
            <img key={index} src={logoSrc} alt="CocaCola Logo" className="w-40 shrink-0" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
