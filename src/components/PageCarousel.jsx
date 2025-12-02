import { motion } from "framer-motion"
import clock from "../assets/images/clock.svg"
import user from "../assets/images/securityuser.svg"
import location from "../assets/images/location.svg"
import { LogoCarousel } from "../Layouts/LogoCarousel"

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


export const PageCarousel = () => {
  return (
    <div className="px-6 py-10 lg:px-20 lg:py-24 flex flex-col gap-20">
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
    <LogoCarousel/>
    </div>
  )
}
