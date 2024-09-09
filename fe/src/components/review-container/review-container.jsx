import { useState } from "react"
import {
  FINALIZAR_PEDIDO,
  DELIVERY_FREE,
  PEDIDO_FINALIZADO,
  SUCCESS,
  FAILED,
  ERROR_PEDIDO
} from "../../config/contants"
import WaitImageLoad from "../wait-image-load/wait-image-load"
import SelectPaymentMethod from "../select-payment-method/select-payment-method"
import PaymentForm from "../payment-form/payment-form"
import Image from "../../../public/images/wait-for-upload.png"

const ReviewContainer = ({
  phone,
  phoneColor,
  phoneSelectedPrice,
  setPaymentMethod
}) => {
  const [buyed, setBuyed] = useState(false)

  const renderTitle = () => {
    if (!buyed) return FINALIZAR_PEDIDO
    if (buyed === SUCCESS) return PEDIDO_FINALIZADO
    if (buyed === FAILED) return ERROR_PEDIDO
  }

  return (
    <div className="review-container">
      <h1 className="review-title">{renderTitle()}</h1>
      {!buyed && <h3 className="review-des">{DELIVERY_FREE}</h3>}
      <WaitImageLoad
        imgAlt={Image}
        img={phone.images[0]}
        className="phone-detail-img my-4"
      />
      {!buyed && <SelectPaymentMethod setPaymentMethod={setPaymentMethod} />}
      <PaymentForm
        name={phone.name}
        color={phoneColor}
        price={phoneSelectedPrice}
        ram={phone.features[1].name}
        rom={phone.features[2].name}
        buyed={buyed}
        setBuyed={setBuyed}
      />
    </div>
  )
}

export default ReviewContainer
