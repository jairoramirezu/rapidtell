import Navbar from "../components/navbar/navbar.jsx"
import Footer from "../components/footer/footer.jsx"
import ProductsRender from "../components/products-render/products-render.jsx"
import DeliveryBanner from "../components/delivery-banner/delivery-banner.jsx"
import AuthMobile from "../components/auth-mobile.jsx"

const Phones = () => (
  <AuthMobile>
    <Navbar />
    <DeliveryBanner />
    <ProductsRender />
    <Footer />
  </AuthMobile>
)

export default Phones
