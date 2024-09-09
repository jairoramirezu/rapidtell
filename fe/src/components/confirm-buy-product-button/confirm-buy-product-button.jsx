import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { SELECT_COLOR, CONFIRMAR_COMPRA } from "../../config/contants"

const ConfirmBuyProductButton = ({ phoneColor, product }) => {
  const handleClick = () => {
    toast.dismiss()
    if (!phoneColor) toast.error(SELECT_COLOR)
  }
  return (
    <Link
      to={phoneColor && `/final/${product}/`}
      onClick={handleClick}
      className="total-buy-ticket"
    >
      <div className="total-buy-ticket-container">{CONFIRMAR_COMPRA}</div>
    </Link>
  )
}

export default ConfirmBuyProductButton
