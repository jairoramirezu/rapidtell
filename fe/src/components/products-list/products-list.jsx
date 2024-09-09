import { phones } from "../../data/phone-cover.js"
import { SEEALL } from "../../config/contants.jsx"
import ProductsListSeeNowText from "../products-list-see-now-text/products-list-see-now-text.jsx"

const ProductList = ({ name }) => (
  <div
    className={`hero-container last-products ${name === SEEALL && "mt-0"}`}
    style={{
      backgroundImage: `url(${
        name === SEEALL
          ? "/images/4.jpg"
          : phones.find(({ classPhone }) => classPhone === name)?.url
      })`
    }}
  >
    <ProductsListSeeNowText name={name} />
  </div>
)

export default ProductList
