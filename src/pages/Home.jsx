import Navbar from "../components/Navbar"
import { Hero } from "../components/Hero"
import { PageCarousel } from "../components/PageCarousel"
import { Features } from "../components/Features"
import { Restaurant } from "../components/Restaurant"
import { Review } from "../components/Review"
import { Cta } from "../components/Cta"
import { Footer } from "../components/Footer"

export const Home = () => {
  return (
    <div className="py- md:py- md:px-">
        <Navbar/>
        <Hero/>
        <PageCarousel/>
        <Features/>
        <Restaurant/>
        <Review/>
        <Cta/>
        <Footer/>
    </div>
  )
}
