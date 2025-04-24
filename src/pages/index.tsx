import Captionarea from "../components/captionarea"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Navbar from "../components/navbar"

const Index = () => {
  return (
    <div className=" min-h-[100%]">
        <Navbar/>
        <Hero/>
        <Captionarea/>
        <Footer/>
    </div>
  )
}

export default Index