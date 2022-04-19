import Carousel from "./Components/Carousel"
import DataComponent from "./Components/DataComponent"
import MediaSection from "./Components/MediaSection"
import Notification from "./Components/Notification"
import Charts from "./Components/Charts"
import Footer from "./Components/Layout/Footer"

const Home = () => {
  return (
    <>
      <Carousel />
      <DataComponent />
      <MediaSection />
      <Notification />
      <Charts />
      <Footer />
    </>
  )
}

export default Home;