import Navbar from "../components/Navbar"
import { Hero } from "../components/Hero"


export const Home = () => {
  return (
    <div className="py-4 md:py-5 md:px-2">
        <Navbar/>
        <Hero/>
    </div>
  )
}
