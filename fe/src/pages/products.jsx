import AuthMobile from "../components/auth-mobile.jsx"
import DeliveryBanner from "../components/delivery-banner/delivery-banner.jsx"
import Footer from "../components/footer/footer.jsx"
import Navbar from "../components/navbar/navbar.jsx"
import ProductList from "../components/products-list/products-list.jsx"
import { listOfBrands } from "../config/contants.jsx"

const Products = () => (
  <AuthMobile>
    <Navbar />
    <DeliveryBanner />
    {listOfBrands.map((el) => (
      <ProductList key={el} name={el} />
    ))}
    <Footer />
  </AuthMobile>
)

export default Products
