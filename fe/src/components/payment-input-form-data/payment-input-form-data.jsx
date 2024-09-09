import { inputFullname, inputPaymentData } from "../../config/contants"
import InputPayment from "../input-payment/input-payment"

const PaymentInputFormData = ({ paymentsFields }) => (
  <>
    <div className="d-flex align-items-center justify-content-between">
      {inputFullname.map(({ title, justify, reference }) => (
        <InputPayment
          key={title}
          title={title}
          justify={justify}
          width
          required
          type="text"
          ref={paymentsFields[reference]}
        />
      ))}
    </div>
    {inputPaymentData.map(({ title, type, reference }) => (
      <InputPayment
        key={title}
        title={title}
        justify="center"
        width={false}
        required
        type={type}
        ref={paymentsFields[reference]}
      />
    ))}
  </>
)

export default PaymentInputFormData
