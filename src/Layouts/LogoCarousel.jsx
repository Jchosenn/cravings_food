import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import cocacola from "../assets/images/craving-cocaCola.png";

const logos = [cocacola, cocacola, cocacola, cocacola, cocacola, cocacola];

export const LogoCarousel = () => {
  const carouselRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Wait for images to load
  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        setScrollWidth(carouselRef.current.scrollWidth / 2); // half because we duplicate logos
      }
    };

    // Run after a short delay to allow images to load
    const timeout = setTimeout(handleResize, 100);

    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-hidden relative bg-[#F7F7F7] py-10 rounded-lg">
      <motion.div
        ref={carouselRef}
        className="flex gap-8"
        animate={{ x: [0, -scrollWidth] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        {logos.concat(logos).map((logoSrc, index) => (
          <img
            key={index}
            src={logoSrc}
            alt="CocaCola Logo"
            className="w-40 shrink-0"
            onLoad={() => {
              // recalc width after image loads
              if (carouselRef.current) {
                setScrollWidth(carouselRef.current.scrollWidth / 2);
              }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};
