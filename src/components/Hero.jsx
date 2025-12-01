import React from "react"
import { FaApple, FaGooglePlay, FaStar } from "react-icons/fa6"
import craving from "../assets/images/craving-mobile.png"

export const Hero = () => {
  return (
    <div className="px-4 py-5 md:px-20 md:py-10">
      <div className="bg-[#F7F7F7] flex flex-col gap-14 items-center justify-between px-5 md:px-12 pt-20 rounded-3xl">
        <div className="flex flex-col gap-7">
          <p className="w-fit bg-[#fff1e5] text-orange-500 font-rubik px-1 rounded-md">
            Fast Food Devlivery 🔥🚀
          </p>
          <div className="font-poppins flex flex-col gap-5">
            <h1 className="font-rubik text-3xl md:text-4xl lg:text-5xl font-bold md:w-115">
              Enjoy Fresh Food in Your
              <span className="text-orange-500">Healthy Life</span>
            </h1>
            <p className="text-xs md:text-sm md:w-125">
              Our commitment is to provide you with a menu that not only
              satisfies your taste buds but also contributes to your overall
              well-being.
            </p>
            <div className="flex items-center gap-5">
            <div className="bg-[#2B2B2B] text-white w-fit flex items-center px-2 py-1 rounded-lg gap-2">
              <FaApple className="text-3xl"/>
              <div className="text-center">
                <p className="text-[10px] leading-tight tracking-tight">Download on the</p>
                <p className="md:text-lg leading-tight tracking-tight -mt-1">App Store</p>
              </div>
            </div>
            <div className="bg-[#2B2B2B] text-white w-fit flex items-center px-2 py-1 rounded-lg gap-2">
              <FaGooglePlay className="text-3xl"/>
              <div>
                <p className="text-[10px] leading-tight tracking-tight">Get it on</p>
                <p className="md:text-lg leading-tight tracking-tight -mt-1">Google Play</p>
              </div>
            </div>
            </div>
            <div className="flex items-center gap-4">
            <p>13k reviews</p>
            <div className="flex items-center text-orange-500">
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            </div>
            </div>
          </div>
        </div>
        <img src={craving} alt="Craving app on mobile" className="" />
      </div>
    </div>
  )
}
