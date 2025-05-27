// Packages:

// Components:
import Hero from "./hero"
import Features from "./features"
import Services from "./services"
import WhyWebsite from "./whyWebsite"
// import Testimonials from "./testimonials"
import BookSession from "./bookSession"

const Home = () => {
    // Return:
    return <div className='mt-[75px] lg:mt-[30px]'>
        <Hero />
        <Features />
        <Services />
        <WhyWebsite />
        {/* <Testimonials /> */}
        <BookSession />
    </div>
}

export default Home