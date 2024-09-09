import { SEEALL, BRANDS, TODOS, SEE_NOW } from "../../config/contants"
import { Link } from "react-router-dom"

const ProductsListSeeNowText = ({ name }) => (
  <div>
    <h1>{name === SEEALL ? BRANDS : name}</h1>
    <Link to={`/${name === SEEALL ? TODOS : name.toLowerCase()}`}>
      <h6 className="info-text-phones">{SEE_NOW} &gt;</h6>
    </Link>
  </div>
)

export default ProductsListSeeNowText
