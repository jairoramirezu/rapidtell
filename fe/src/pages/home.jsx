import Navbar from "../components/navbar/navbar.jsx"
import Footer from "../components/footer/footer.jsx"
import DeliveryBanner from "../components/delivery-banner/delivery-banner.jsx"
import AuthMobile from "../components/auth-mobile.jsx"
import LastProducts from "../components/last-products/last-products.jsx"
import AppleSection from "../components/apple-section/apple-section.jsx"
import MostSold from "../components/most-sold/most-sold.jsx"

const Home = () => (
  <AuthMobile>
    <Navbar />
    <DeliveryBanner />
    <LastProducts />
    <AppleSection />
    <MostSold />
    <Footer />
  </AuthMobile>
)

export default Home
