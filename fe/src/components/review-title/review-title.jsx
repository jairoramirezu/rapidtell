import { REVIEW_COMPRA, DELIVERY_FREE } from "../../config/contants"

const ReviewTitle = () => (
  <>
    <h1 className="review-title">{REVIEW_COMPRA}</h1>
    <h3 className="review-des">{DELIVERY_FREE}</h3>
  </>
)

export default ReviewTitle
