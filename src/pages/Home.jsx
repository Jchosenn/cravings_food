import Navbar from "../components/Navbar"
import { Hero } from "../components/Hero"
import { PageCarousel } from "../components/PageCarousel"

export const Home = () => {
  return (
    <div className="py- md:py- md:px-2">
        <Navbar/>
        <Hero/>
        <PageCarousel/>
    </div>
  )
}
