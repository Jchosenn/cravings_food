import Navbar from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Carousel } from "../components/carousel"


export const Home = () => {
  return (
    <div className="py- md:py- md:px-2">
        <Navbar/>
        <Hero/>
        <Carousel/>
    </div>
  )
}
