import ReviewCardProduct from "../review-card-product/review-card-product"
import ReviewPhoneData from "../review-phone-data/review-phone-data"
import ReviewPhonePrice from "../review-phone-price/review-phone-price"
import ReviewTitle from "../review-title/review-title"

const ReviewMainSection = ({
  info,
  setInfo,
  phone,
  setColor,
  color,
  colors,
  currency,
  price,
  dollarPrice,
}) => (
  <>
    <ReviewTitle />
    <div>
      <ReviewCardProduct
        info={info}
        setInfo={setInfo}
        phone={phone}
      />
      <ReviewPhoneData
        phone={phone}
        setColor={setColor}
        color={color}
        colors={colors}
      />
      <ReviewPhonePrice
        currency={currency}
        price={price}
        dollarPrice={dollarPrice}
      />
      <hr />
    </div>
  </>
)

export default ReviewMainSection
