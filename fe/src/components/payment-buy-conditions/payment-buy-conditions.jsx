import { BUY_CONDITIONS } from "../../config/contants"

const PaymentBuyConditions = ({ buyed }) => (
  <>
    {!buyed && <hr className="my-4" />}
    <div
      className="info-notes-container"
      dangerouslySetInnerHTML={{ __html: BUY_CONDITIONS }}
    ></div>
  </>
)

export default PaymentBuyConditions
