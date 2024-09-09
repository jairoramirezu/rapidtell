import formatPrice from "../../utils/format-price"

const ReviewPhonePrice = ({ currency, price, dollarPrice }) => (
  <div className="d-flex justify-content-between mb-3 mt-0 review-phone-det-container">
    <h3 className="review-phone-det mt-0">1</h3>
    <h3 className="review-phone-det mt-0">
      {formatPrice(currency, price, dollarPrice)}
    </h3>
  </div>
)

export default ReviewPhonePrice
