import { Link } from "react-router-dom"

const PriceTagMostSold = ({
  phoneList,
  phoneIndex,
  dollarPrice,
  currency,
  setPhoneColor
}) => (
  <Link
    className="price"
    to={`/review/${phoneList[phoneIndex].tag}/`}
    onClick={() => setPhoneColor(false)}
  >
    {!currency
      ? `$${phoneList[phoneIndex].price.toLocaleString("de-DE")}`
      : `BS ${(phoneList[phoneIndex].price * dollarPrice).toLocaleString(
          "de-DE"
        )}`}
  </Link>
)

export default PriceTagMostSold
