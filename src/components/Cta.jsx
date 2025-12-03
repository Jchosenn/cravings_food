import { FaApple, FaGooglePlay } from "react-icons/fa6"
import craving from "../assets/images/craving-mobile.png"
import { motion } from "framer-motion"

export const Cta = () => {
  return (
    <div className="px-4  lg:px-20 bg-[url('/imageBg/craving-cta-bg.png')]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className=" rounded-3xl px-6 md:px-12 pt-16 md:pt-20 flex flex-col md:flex-row items-center justify-between gap-16 shadow-sm"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-7"
        >
          <div className="font-poppins flex flex-col gap-5 text-white">
            <h1 className="font-rubik text-3xl font-bold leading-tight md:w-[470px]">
              Place an order with our mobile app
            </h1>

            <p className="text-sm  md:w-[480px]">
              Why wait in line or stress about dinner plans when you can have a gourmet experience delivered straight to your doorstep? Our mobile app makes it convenient for you to explore our diverse menu, customize your order, and track it in real-time.
            </p>
            <p className="text-sm   md:w-[480px]">
              Complete your order swiftly and securely with our streamlined checkout process. Your satisfaction is our priority, and that includes making your transaction hassle-free.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="border border-white text-white flex items-center px-4 py-2 rounded-xl gap-3 cursor-pointer"
              >
                <FaApple className="text-3xl" />
                <div>
                  <p className="text-[10px] leading-none">Download on the</p>
                  <p className="text-base font-semibold">App Store</p>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.07 }}
                className="border border-white text-white flex items-center px-4 py-2 rounded-xl gap-3 cursor-pointer"
              >
                <FaGooglePlay className="text-3xl" />
                <div>
                  <p className="text-[10px] leading-none">Get it on</p>
                  <p className="text-base font-semibold">Google Play</p>
                </div>
              </motion.div>
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
