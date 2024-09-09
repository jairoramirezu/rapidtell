import formatPrice from "../../utils/format-price"
import GoBackButton from "../go-back-button/go-back-button"

const NavbarcheckoutData = ({
  white,
  name,
  color,
  currency,
  paymentMethod,
  price,
  dollarPrice,
  finalSold
}) => (
  <div className={`nav-container ${white && "nav-alt"}`}>
    <div className="nav-logo-container align-items-center alt-nav-logo-sold">
      {!finalSold && <GoBackButton />}
      <p>
        {name} - {color}
      </p>
    </div>
    <div className="nav-items-container color-alt-price">
      {formatPrice(paymentMethod || currency, price, dollarPrice)}
    </div>
  </div>
)

export default NavbarcheckoutData
