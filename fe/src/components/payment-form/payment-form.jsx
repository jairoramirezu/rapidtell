import { useState, useContext, useRef } from "react"
import { toast } from "react-toastify"
import NavContext from "../context/context"
import formatPrice from "../../utils/format-price"
import { validatePaymentForm } from "../../utils/validate-payment-form"
import textForNewSell from "../../hooks/text-for-new-sell"
import PaymentInputFormData from "../payment-input-form-data/payment-input-form-data"
import PaymentGiftCheck from "../payment-gift-check/payment-gift-check"
import PaymentBuyConditions from "../payment-buy-conditions/payment-buy-conditions"
import PaymentFinalButton from "../payment-final-button/payment-final-button"
import {
  PAY_METHOD,
  SUCCESS_BUY,
  INGRESAR_UN,
  DONT_SUCCESS_BUY,
  SUCCESS,
  FAILED
} from "../../config/contants"
import SaveDataOfSell from "../../hooks/save-data-of-sell"
import sendInvoiceEmail from "../../hooks/send-email"
import { useEffect } from "react"
import Loader from "../loader/loader"

const PaymentForm = ({
  name: phoneName,
  color,
  price,
  ram,
  rom,
  buyed,
  setBuyed
}) => {
  const [final, setFinal] = useState(false)
  const [loader, setLoader] = useState(false)
  const {
    paymentMethod: [paymentMethod, setPaymentMethod],
    dollarPrice: [dollarPrice],
    final: [, setFinalSold]
  } = useContext(NavContext)
  const name = useRef("")
  const last = useRef("")
  const id = useRef("")
  const phone = useRef("")
  const email = useRef("")
  const address = useRef("")
  const point = useRef("")
  const city = useRef("")
  const state = useRef("")
  const payNumber = useRef("")
  const [gift, setGift] = useState(false)
  const paymentsFields = {
    name,
    last,
    id,
    phone,
    email,
    address,
    point,
    city,
    state,
    payNumber
  }
  const dataFields = [
    name,
    last,
    id,
    phone,
    email,
    address,
    point,
    city,
    state,
    payNumber,
    phoneName,
    color,
    formatPrice(paymentMethod, price, dollarPrice),
    paymentMethod,
    gift ? "🎁" : "",
    ram,
    rom
  ]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [final])

  useEffect(() => {
    if (loader) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [loader])

  const success = async () => {
    try {
      toast.dismiss()
      setLoader(true)
      setPaymentMethod(null)
      setFinal((prev) => !prev)
      setFinalSold((prev) => !prev)
      await textForNewSell(...dataFields)
      await SaveDataOfSell(...dataFields)
      await sendInvoiceEmail(...dataFields)
      setBuyed(SUCCESS)
      setLoader(false)
      toast.success(SUCCESS_BUY)
    } catch (error) {
      setBuyed(FAILED)
      setLoader(false)
      toast.error(DONT_SUCCESS_BUY)
    }
  }

  const Final = () => {
    toast.dismiss()
    if (!paymentMethod) {
      toast.error(`${INGRESAR_UN} ${PAY_METHOD}`)
      return false
    }
    const allValid = Object.values(paymentsFields).every((field) =>
      validatePaymentForm(field)
    )
    if (allValid) success()
  }

  return (
    <>
      {loader && <Loader isSold />}
      <div>
        <form className={buyed ? "d-none" : ""}>
          <PaymentInputFormData paymentsFields={paymentsFields} />
          <PaymentGiftCheck setGift={setGift} />
        </form>
        <PaymentBuyConditions buyed={buyed} />
        {buyed !== FAILED && (
          <PaymentFinalButton final={final} Final={Final} buyed={buyed} />
        )}
      </div>
    </>
  )
}

export default PaymentForm
