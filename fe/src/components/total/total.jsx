import Warranty from "../warranty/warranty"
import ConfirmBuyProductButton from "../confirm-buy-product-button/confirm-buy-product-button"
import TotalData from "../total-data/total-data"

const Total = ({ amount, product, phoneColor, currency, dollarPrice }) => (
  <div className="mt-4">
    <TotalData amount={amount} currency={currency} dollarPrice={dollarPrice} />
    <Warranty />
    <ConfirmBuyProductButton phoneColor={phoneColor} product={product} />
  </div>
)

export default Total
