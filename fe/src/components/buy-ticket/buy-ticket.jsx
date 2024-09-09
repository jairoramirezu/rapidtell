import { toast } from "react-toastify"
import { COMPRAR, SELECT_COLOR } from "../../config/contants"
import { Link } from "react-router-dom"

const BuyTicket = ({ id, color }) => (
  <Link
    to={color !== null && `/review/${id}/${color}`}
    onClick={() => {
      color === null && toast.error(SELECT_COLOR)
    }}
    className="buy-ticket"
  >
    {COMPRAR}
  </Link>
)

export default BuyTicket
