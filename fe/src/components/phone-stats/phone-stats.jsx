import { phoneDetails } from "../../config/contants"
import BuyTicket from "../buy-ticket/buy-ticket"

const PhoneStats = ({
  size,
  cam,
  id = undefined,
  bat,
  pes,
  sim,
  os,
  chip,
  buy = false,
  color
}) => {
  const detailValues = { size, cam, bat, pes, sim, os, chip }
  return (
    <div className="phone-details-alt d-flex flex-column align-items-center justify-content-center">
      {buy && <BuyTicket id={id} color={color} />}
      {phoneDetails.map(
        ({ key, label, unit }) =>
          detailValues[key] && (
            <p key={key}>
              <span className="fon-per-det">{label}:</span> {detailValues[key]}
              {unit}
            </p>
          )
      )}
    </div>
  )
}

export default PhoneStats
