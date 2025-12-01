import React from 'react'
import order from "../assets/images/craving-order.png"
import track from "../assets/images/craving-track-order.png"
import review from "../assets/images/craving-review.png"
import { div } from 'framer-motion/client'


const OrderFeatures =[
    {
        img: order,
        title: "Order Processing",
        description: "Add a personal touch to your order. Customize ingredients, choose portion sizes, and make your meal truly yours.",
    },

    {
        img: track,
        title: "Track Order",
        description: "Watch as your order is prepared, dispatched, and arrives at your doorstep. Real-time updates ensure you're always in the loop.",
    },
    
    {
        img: review,
        title: "Review",
        description: "Write down your reviews on your favorite restaurants and we will appreciate how good the food was for you.",
    },

]

export const Features = () => {
  return (
    <div className="px-6 py-10 md:px-20 lg:py-15">
        <div className='font-poppins flex flex-col gap-9'>
            <h2 className='text-3xl md:text-4xl font-bold font-rubik mx-auto'>Our Features</h2>
            <p className='mx-auto -mt-3 text-sm md:text-[16px] md:w-150 text-center'>Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>
                {OrderFeatures.map((card, index) =>(
                    <div
                    key={index}
                    className='border-2 border-[#F7F7F7] rounded-lg flex flex-col py-3 px-3  gap-5 md:w-92 items-center'
                    >
                    <img 
                    src={card.img}
                    alt={card.title} 
                    className='bg-[#F7F7F7] w-fit px-7 py-13 rounde'
                    />
                    <h2 className='self-start text-2xl font-bold font-rubik w-fit'>
                        {card.title}
                    </h2>
                    <p className='-mt-4 text-sm'>
                        {card.description}
                    </p>
                    </div>
                ))}
            {/* <div className='border-2 border-[#F7F7F7] rounded-lg flex flex-col py-3 px-3  gap-5 md:w-92 items-center'>
                    <img src={order} alt="" className='bg-[#F7F7F7] w-fit px-7 py-13 rounded-md' />
                <h2 className='self-start text-2xl font-bold font-rubik w-fit'>Order Processing</h2>
                <p className='-mt-4 text-sm'>Add a personal touch to your order. Customize ingredients, choose portion sizes, and make your meal truly yours.</p>
            </div>
            <div className='border-2 border-[#F7F7F7] rounded-lg flex flex-col py-3 px-3  gap-5 md:w-92 items-center'>
                    <img src={track} alt="" className='bg-[#F7F7F7] w-fit px-7 py-13 rounded-md' />
                <h2 className='self-start text-2xl font-bold font-rubik w-fit'>Track Order</h2>
                <p className='-mt-4 text-sm'>Watch as your order is prepared, dispatched, and arrives at your doorstep. Real-time updates ensure you're always in the loop.</p>
            </div>
            <div className='border-2 border-[#F7F7F7] rounded-lg flex flex-col py-3 px-3  gap-5 md:w-92 items-center'>
                    <img src={review} alt="" className='bg-[#F7F7F7] w-fit px-7 py-8 rounded-md' />
                <h2 className='self-start text-2xl font-bold font-rubik w-fit'>Reviews</h2>
                <p className='-mt-4 text-sm'>Write down your reviews on your favorite restaurants and we will appreciate how good the food was for you.</p>
            </div> */}
            </div>
        </div>
    </div>
  )
}
