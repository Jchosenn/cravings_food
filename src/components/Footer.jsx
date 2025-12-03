import logo from "../assets/images/Craving.svg"
import { Link } from "react-router-dom"
import {FaFacebook, FaInstagram, FaXTwitter} from "react-icons/fa6"

export const Footer = () => {
    const company= [
        {name: "Products" , path: "/"},
        {name: "Restaurant" , path: "/"},
        {name: "About" , path: "/"},
        {name: "Delivery" , path: "/"},
    ]
    const support= [
        {name: "Terms and Condition" , path: "/"},
        {name: "Privacy Policy" , path: "/"},
        {name: "Blogs" , path: "/"},
        {name: "Contact Us" , path: "/"},
    ]
    const footerLinks = [
    { icon: <FaFacebook />, path: "/" },
    { icon: <FaInstagram />, path: "/" },
    { icon: <FaXTwitter /> ,path: "/" },
  ]
  return (
    <div className="px-4 py-15 lg:px-20 flex flex-col gap-9 md:flex-row justify-between md:items-center font-rubik">
        <div className="space-y-7 lg:space-y-20">
            <img src={logo} alt="Craving Logo" />
            <div>
                <p>Customer service</p>
                <p>24/7 support by chat, email & calls</p>
            </div>
        </div>
        <div className="space-y-3">
            <p className="font-bold text-lg">Company</p>
            {company.map((link, index) => (
                <div
                key={index}
                 className="flex flex-col gap-3 w-fit"
                >
                    <Link 
                    to={link.path}
                    > {link.name} </Link>

                </div>
            ))}

        </div>
        <div className="space-y-3">
            <p className="font-bold text-lg">Support</p>
            {support.map((link, index) => (
                <div
                key={index}
                 className="flex flex-col gap-3 w-fit"
                >
                    <Link 
                    to={link.path}
                    > {link.name} </Link>

                </div>
            ))}

        </div>
        <div className="flex items-center md:justify-between gap-9 md:gap-8">
            {footerLinks.map((social, index) => (
                    <Link 
                    to={social.path}
                    className="text-2xl"
                    > {social.icon} </Link>
            ))}

        </div>
    </div>
  )
}
