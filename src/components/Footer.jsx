import logo from "../assets/images/Craving.svg"
import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6"
import { motion } from "framer-motion"

export const Footer = () => {
  const company = [
    { name: "Products", path: "/" },
    { name: "Restaurant", path: "/" },
    { name: "About", path: "/" },
    { name: "Delivery", path: "/" },
  ];

  const support = [
    { name: "Terms and Condition", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  const footerLinks = [
    { icon: <FaFacebook />, path: "/" },
    { icon: <FaInstagram />, path: "/" },
    { icon: <FaXTwitter />, path: "/" },
  ];

  return (
    <footer className="px-6 py-14 lg:px-20 bg-[#FAFAFA] font-rubik">
      <div className="flex flex-col gap-14 md:gap-10 lg:flex-row justify-between">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 max-w-xs"
        >
          <img src={logo} alt="Craving Logo" className="w-32 md:w-36" />
          <p className="font-medium text-gray-700">Customer service</p>
          <p className="text-sm text-gray-500">
            24/7 support by chat, email & calls
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="font-bold text-lg">Company</p>

          <div className="flex flex-col gap-2">
            {company.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-600 hover:text-black transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <p className="font-bold text-lg">Support</p>

          <div className="flex flex-col gap-2">
            {support.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-gray-600 hover:text-black transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex gap-6 md:gap-4 items-center"
        >
          {footerLinks.map((social, index) => (
            <Link
              key={index}
              to={social.path}
              className="text-2xl p-3 rounded-full shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              {social.icon}
            </Link>
          ))}
        </motion.div>

      </div>
    </footer>
  )
}
