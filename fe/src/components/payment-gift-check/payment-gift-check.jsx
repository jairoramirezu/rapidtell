import { REGALO } from "../../config/contants"

const PaymentGiftCheck = ({ setGift }) => (
  <div className="d-flex align-items-center justify-content-start form-check form-switch mt-3">
    <input
      className="form-check-input"
      type="checkbox"
      onChange={() => setGift((prev) => !prev)}
      id="gift"
    />
    <label className="text-placeholder-alt" htmlFor="gift">
      {REGALO}
    </label>
  </div>
)

export default PaymentGiftCheck
