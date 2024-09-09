import { useState, useEffect, useContext } from "react"
import { phoneList } from "../../data/phone-cover.js"
import NavContext from "../context/context.jsx"
import Chevron from "../chevron/chevron.jsx"
import PriceTagMostSold from "../price-tag-most-sold/price-tag-most-sold.jsx"
import MostSoldHeader from "../most-sold-header/most-sold-header.jsx"

const MostSold = () => {
  const [phoneIndex, setPhoneIndex] = useState(0)
  const {
    currency: [currency],
    dollarPrice: [dollarPrice],
    color: [_color, setPhoneColor]
  } = useContext(NavContext)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (phoneIndex <= phoneList.length - 2) {
        setPhoneIndex((prev) => prev + 1)
      } else {
        setPhoneIndex(0)
      }
    }, 3000)

    return () => clearInterval(intervalId)
  }, [phoneIndex])

  return (
    <div
      className="hero-container last-products mt-12"
      style={{ backgroundImage: `url(${phoneList[phoneIndex].url})` }}
    >
      <MostSoldHeader
        phoneList={phoneList}
        phoneIndex={phoneIndex}
        setPhoneColor={setPhoneColor}
      />
      <PriceTagMostSold
        phoneList={phoneList}
        phoneIndex={phoneIndex}
        dollarPrice={dollarPrice}
        currency={currency}
        setPhoneColor={setPhoneColor}
      />
      <Chevron
        phoneIndex={phoneIndex}
        setPhoneIndex={setPhoneIndex}
        phoneList={phoneList}
      />
    </div>
  )
}

export default MostSold
