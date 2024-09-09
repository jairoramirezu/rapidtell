import { useNavigate } from "react-router-dom"
import {
  FINALIZAR_PEDIDO,
  SUCCESS,
  VOLVER_A_INCIO
} from "../../config/contants"

const PaymentFinalButton = ({ final, Final, buyed }) => {
  const navigate = useNavigate()
  const home = () => {
    navigate("/", { replace: true })
  }
  return (
    <button
      className={`total-buy-ticket-container ${
        buyed === SUCCESS ? "green-button" : ""
      }`}
      onClick={!final ? Final : home}
    >
      {!buyed ? FINALIZAR_PEDIDO : buyed === SUCCESS ? VOLVER_A_INCIO : ""}
    </button>
  )
}

export default PaymentFinalButton
