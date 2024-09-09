import { Link } from "react-router-dom"
import { COMPRAR } from "../../config/contants"

const BuyTagMostSold = ({ phoneList, phoneIndex, setPhoneColor }) => (
  <div>
    <Link
      to={`/review/${phoneList[phoneIndex].tag}/null`}
      className="info-text-phones"
      onClick={() => setPhoneColor(false)}
    >
      {COMPRAR} &gt;
    </Link>
  </div>
)

export default BuyTagMostSold
