import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import NavContext from "../context/context.jsx"
import Loader from "../loader/loader"
import Total from "../total/total.jsx"
import ReviewMainSection from "../review-main-section/review-main-section.jsx"

const Review = () => {
  const { pathname } = useLocation()
  const location = window.location.pathname.split("/")
  const product = location[location.length - 2]
  const [info, setInfo] = useState(false)
  const [color, setColor] = useState(null)
  const [colors, setColors] = useState(null)
  const {
    paymentMethod: [, setPaymentMethod],
    currency: [currency],
    dollarPrice: [dollarPrice],
    phones: [phones],
    color: [phoneColor]
  } = useContext(NavContext)
  const phone = phones?.productsData?.find(({ id }) => id === product)
  const price = phones?.pricesData?.find(
    ({ id }) => id === phone?.default_price
  )?.unit_amount

  useEffect(() => {
    setColor(location[location.length - 1])
    setPaymentMethod(null)
  }, [pathname])

  useEffect(() => {
    if (phone?.features?.length > 0) {
      const newColors = phone.features[0]?.name.split(", ")
      setColors(newColors)
    }
  }, [phone])

  return (
    <div className="review-container">
      {phones.length !== 0 ? (
        <>
          <ReviewMainSection
            info={info}
            setInfo={setInfo}
            phone={phone}
            setColor={setColor}
            color={color}
            colors={colors}
            currency={currency}
            price={price}
            dollarPrice={dollarPrice}
          />
          <Total
            amount={price}
            product={product}
            phoneColor={phoneColor}
            currency={currency}
            dollarPrice={dollarPrice}
          />
        </>
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default Review
