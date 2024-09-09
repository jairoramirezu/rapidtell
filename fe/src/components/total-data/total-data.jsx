import { SUB_TOTAL, ENVIO, GRATIS, TOTAL } from "../../config/contants"
import formatPrice from "../../utils/format-price"

const TotalData = ({ amount, currency, dollarPrice }) => {
  const totalAmount = formatPrice(currency, amount, dollarPrice)
  return (
    <>
      <div className="d-flex alig-items-center justify-content-between">
        <p>{SUB_TOTAL}</p>
        <p>{totalAmount}</p>
      </div>
      <div className="d-flex alig-items-center justify-content-between">
        <p className="mb-2">{ENVIO}</p>
        <p className="mb-2">{GRATIS}</p>
      </div>
      <hr />
      <div className="d-flex alig-items-center justify-content-between">
        <p className="mb-2 total-des">{TOTAL}</p>
        <p className="mb-2 total-des">{totalAmount}</p>
      </div>
    </>
  )
}

export default TotalData
