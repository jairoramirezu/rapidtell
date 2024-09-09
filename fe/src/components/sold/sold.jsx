import { useContext, useEffect } from "react"
import { toast } from "react-toastify"
import NavContext from "../context/context"
import {
  PAYPAL,
  PAYPAL_TAX,
  dollar_payment_methods
} from "../../config/contants"
import { useNavigate } from "react-router-dom"
import Loader from "../loader/loader"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import ReviewContainer from "../review-container/review-container"

const SoldComponent = () => {
  const navigate = useNavigate()
  const location = window.location.pathname.split("/")
  const product = location[location.length - 2]
  const {
    phones: [products],
    color: [phoneColor],
    paymentMethod: [paymentMethod, setPaymentMethod],
    currency: [, setCurrency]
  } = useContext(NavContext)
  const phone = products?.productsData?.find(({ id }) => id === product)
  const price = products?.pricesData?.find(
    ({ id }) => id === phone.default_price
  )?.unit_amount

  useEffect(() => {
    if (paymentMethod) {
      !dollar_payment_methods.includes(paymentMethod)
        ? setCurrency(true)
        : setCurrency(false)
    }
    if (paymentMethod === PAYPAL) {
      toast(PAYPAL_TAX)
    }
  }, [paymentMethod])

  useEffect(() => {
    if (!phoneColor) {
      navigate(`/review/${product}/`, { replace: true })
    }
  }, [phoneColor, navigate, product])

  return (
    <>
      {products.length !== 0 && phoneColor ? (
        <div>
          <Navbar
            white
            checkout
            name={phone.name}
            price={price}
            color={phoneColor}
          />
          <ReviewContainer
            phone={phone}
            phoneColor={phoneColor}
            phoneSelectedPrice={price}
            setPaymentMethod={setPaymentMethod}
          />
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default SoldComponent
