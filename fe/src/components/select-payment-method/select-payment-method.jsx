import { allPaymentMethods, METODO_DE_PAGO } from "../../config/contants"
import capitalize from "../../utils/capitalize"

const SelectPaymentMethod = ({ setPaymentMethod }) => (
  <select
    className="mt-3 payment-method"
    defaultValue=""
    onChange={(e) => setPaymentMethod(e.target.value)}
  >
    {allPaymentMethods.map((el) => (
      <option
        key={el}
        value={el === METODO_DE_PAGO ? "" : el}
        disabled={el === METODO_DE_PAGO}
      >
        {capitalize(el)}
      </option>
    ))}
  </select>
)

export default SelectPaymentMethod
