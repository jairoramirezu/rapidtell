import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import { COMPRAR, SELECT_COLOR } from "../../config/contants"
import { useContext } from "react"
import NavContext from "../context/context"

const PhoneDetailContainerBuyTicket = ({ color, id, name }) => {
  const {
    color: [, setColorPhone]
  } = useContext(NavContext)
  const handleClick = () => {
    if (color === null) {
      toast.dismiss()
      toast.error(SELECT_COLOR)
    } else {
      setColorPhone(color)
    }
  }
  return (
    <Link
      to={color !== null && `/review/${id}/`}
      onClick={handleClick}
      className="buy-ticket"
      name={name}
    >
      {COMPRAR}
    </Link>
  )
}

export default PhoneDetailContainerBuyTicket
