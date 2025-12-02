import React from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa6"
import burgerCorner from "../assets/images/burger-corner.png"
import burgerCornerLogo from "../assets/images/burger-corner-logo.png"
import cravingMore from "../assets/images/craving-more.png"
import cravingMoreLogo from "../assets/images/craving-more-logo.png"
import pastaPlace from "../assets/images/pasta-place.png"
import pastaPlaceLogo from "../assets/images/pasta-place-logo.png"
import thePlace from "../assets/images/the-place.png"
import thePlaceLogo from "../assets/images/the-place-logo.png"
import burgerClose from "../assets/images/burger-close.png"
import burgerCloseLogo from "../assets/images/burger-close-logo.png"
import wizKitchen from "../assets/images/wiz-kitchen.png"
import wizKitchenLogo from "../assets/images/wiz-kitchen-logo.png"

const FeaturedRestaurant = [
    {
        img: burgerCorner,
        title: "Burger Corner",
        description: "Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit in",
        content: {
            list: "burger",
            list: "burger",
            list: "burger",
        }
    },
]

const content = [
    {
        ingredient: "Burger",
    },
    {
        ingredient: "Beef",
    },
    {
        ingredient: "Chicken",
    },
    {
        ingredient: "Vegetable",
    }
    
]
export const Restaurant = () => {

  return (
    <div className="px-6 py-16 md:px-20 lg:py-20 bg-[#F7F7F7]">
        <div className='font-poppins flex justify-between items-center'>
            <h3 className='font-rubik font-semibold text-3xl w-80'>Our Featured Restuarant</h3>
            <p className='w-100 text-sm'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <Link to="/" className="ml-10">
            <button className="border border-orange-500 text-orange-500 px-7 py-2 text-sm rounded-full hover:shadow-lg active:scale-95 transition-all font-poppins">
              View all
            </button>
          </Link>
        </div>
        <div className='py-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
            <div className='bg-white rounded-lg p-3 w-fit font-poppins shadow-md'>
            <img src={burgerCorner} alt=""  className='w-full'/>
            <div className='py-4 flex flex-col gap-4 border-b border-b-gray-300'>
                <p className='text-lg font-semibold'>Burger Corner</p>
                <p className='text-[13px]'>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit in</p>
                <div className='flex justify-between gap-4 w-fit'>
                    {content.map((text, index) => (
                        <p
                        key={index}
                        className='bg-[#F7F7F7] text-xs rounded-full px-3 py-2'
                        >
                        {text.ingredient}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex gap-3 pt-4 items-center'>
                <div>
                <img src={burgerCornerLogo} alt="" />
                </div>
                <div className='text-sm space-y-2'>
                    <p>Located at 173  new castle street</p>
                    <div className='flex gap-2'>
                        <p>Open at 7:00am -11:00pm</p>
                        <div className='flex items-center text-[16px] text-orange-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-white rounded-lg p-3 w-fit font-poppins shadow-md'>
            <img src={burgerCorner} alt=""  className='w-full'/>
            <div className='py-4 flex flex-col gap-4 border-b border-b-gray-300'>
                <p className='text-lg font-semibold'>Burger Corner</p>
                <p className='text-[13px]'>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit in</p>
                <div className='flex justify-between gap-4 w-fit'>
                    {content.map((text, index) => (
                        <p
                        key={index}
                        className='bg-[#F7F7F7] text-xs rounded-full px-3 py-2'
                        >
                        {text.ingredient}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex gap-3 pt-4 items-center'>
                <div>
                <img src={burgerCornerLogo} alt="" />
                </div>
                <div className='text-sm space-y-2'>
                    <p>Located at 173  new castle street</p>
                    <div className='flex gap-2'>
                        <p>Open at 7:00am -11:00pm</p>
                        <div className='flex items-center text-[16px] text-orange-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-white rounded-lg p-3 w-fit font-poppins shadow-md'>
            <img src={burgerCorner} alt=""  className='w-full'/>
            <div className='py-4 flex flex-col gap-4 border-b border-b-gray-300'>
                <p className='text-lg font-semibold'>Burger Corner</p>
                <p className='text-[13px]'>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit in</p>
                <div className='flex justify-between gap-4 w-fit'>
                    {content.map((text, index) => (
                        <p
                        key={index}
                        className='bg-[#F7F7F7] text-xs rounded-full px-3 py-2'
                        >
                        {text.ingredient}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex gap-3 pt-4 items-center'>
                <div>
                <img src={burgerCornerLogo} alt="" />
                </div>
                <div className='text-sm space-y-2'>
                    <p>Located at 173  new castle street</p>
                    <div className='flex gap-2'>
                        <p>Open at 7:00am -11:00pm</p>
                        <div className='flex items-center text-[16px] text-orange-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-white rounded-lg p-3 w-fit font-poppins shadow-md'>
            <img src={burgerCorner} alt=""  className='w-full'/>
            <div className='py-4 flex flex-col gap-4 border-b border-b-gray-300'>
                <p className='text-lg font-semibold'>Burger Corner</p>
                <p className='text-[13px]'>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit in</p>
                <div className='flex justify-between gap-4 w-fit'>
                    {content.map((text, index) => (
                        <p
                        key={index}
                        className='bg-[#F7F7F7] text-xs rounded-full px-3 py-2'
                        >
                        {text.ingredient}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex gap-3 pt-4 items-center'>
                <div>
                <img src={burgerCornerLogo} alt="" />
                </div>
                <div className='text-sm space-y-2'>
                    <p>Located at 173  new castle street</p>
                    <div className='flex gap-2'>
                        <p>Open at 7:00am -11:00pm</p>
                        <div className='flex items-center text-[16px] text-orange-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='bg-white rounded-lg p-3 w-fit font-poppins shadow-md'>
            <img src={burgerCorner} alt=""  className='w-full'/>
            <div className='py-4 flex flex-col gap-4 border-b border-b-gray-300'>
                <p className='text-lg font-semibold'>Burger Corner</p>
                <p className='text-[13px]'>Borem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit in</p>
                <div className='flex justify-between gap-4 w-fit'>
                    {content.map((text, index) => (
                        <p
                        key={index}
                        className='bg-[#F7F7F7] text-xs rounded-full px-3 py-2'
                        >
                        {text.ingredient}
                        </p>
                    ))}
                </div>
            </div>
            <div className='flex gap-3 pt-4 items-center'>
                <div>
                <img src={burgerCornerLogo} alt="" />
                </div>
                <div className='text-sm space-y-2'>
                    <p>Located at 173  new castle street</p>
                    <div className='flex gap-2'>
                        <p>Open at 7:00am -11:00pm</p>
                        <div className='flex items-center text-[16px] text-orange-500'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}
