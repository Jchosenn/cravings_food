import React from "react"
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa6"
import craving from "../assets/images/craving-mobile.png"
import { motion } from "framer-motion"

export const Hero = () => {
  return (
    <div className="px-4 py-10 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-[#F7F7F7] rounded-3xl px-6 md:px-12 pt-16 md:pt-20 flex flex-col md:flex-row items-center justify-between gap-16 shadow-sm"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-7"
        >
          <p className="w-fit bg-[#fff1e5] text-orange-500 font-rubik px-3 py-1 rounded-md text-sm shadow-sm">
            Fast Food Delivery 🔥🚀
          </p>
          <div className="font-poppins flex flex-col gap-5">
            <h1 className="font-rubik text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:w-[500px]">
              Enjoy Fresh Food in Your{" "}
              <span className="text-orange-500">Healthy Life</span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 md:w-[480px]">
              Our commitment is to provide you with a menu that satisfies your
              taste buds and nourishes your overall well-being. 
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="bg-black text-white flex items-center px-4 py-2 rounded-xl gap-3 cursor-pointer"
              >
                <FaApple className="text-3xl" />
                <div>
                  <p className="text-[10px] leading-none">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="bg-black text-white flex items-center px-4 py-2 rounded-xl gap-3 cursor-pointer"
              >
                <FaGooglePlay className="text-3xl" />
                <div>
                  <p className="text-[10px] leading-none">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <p className="text-gray-700 font-medium">13k reviews</p>
              <div className="flex items-center text-orange-500 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        </motion.div>

        {/* IMAGE SECTION */}
        <motion.img
          src={craving}
          alt="Craving app interface"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="w-[250px] md:w-[340px] lg:w-[380px] drop-shadow-xl"
        />
      </motion.div>
    </div>
  )
}
