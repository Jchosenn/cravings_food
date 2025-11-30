import React from "react";

export const Hero = () => {
  return (
    <div className="bg-[#F7F7F7] flex items-center justify-between px-7">
      <div>
        <p className="w-fit bg-[#fff1e5] text-orange-500 font-rubik px-1 rounded-md">
          Fast Food Devlivery 🔥🚀
        </p>
        <div className="font-poppins flex flex-col gap-5 w-140 px-6">
            <h1 className="font-rubik text-4xl">Enjoy Fresh Food in Your <span className="text-orange-500">Healthy Life</span></h1>
            <p className="text-sm"> Our commitment is to provide you with a menu that not only satisfies your taste buds but also contributes to your overall well-being.</p>
        </div>
      </div>
    </div>
  );
};
