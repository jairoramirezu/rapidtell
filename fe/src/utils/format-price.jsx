import { EARN, bs_payments_methods, paypalComision } from "../config/contants"

const formatPrice = (currency, price, dollarPrice) => {
  const unitAmount = price ? price / 100 + EARN : 0
  const bolivarPrice = unitAmount * dollarPrice
  const isBolivar =
    typeof currency === "boolean"
      ? currency
      : bs_payments_methods.includes(currency)
  const formattedAmount = isBolivar
    ? bolivarPrice.toLocaleString("de-DE")
    : currency !== "paypal"
    ? unitAmount.toLocaleString("de-DE")
    : Math.ceil(unitAmount + unitAmount * paypalComision).toLocaleString(
        "de-DE"
      )
  return isBolivar ? `BS ${formattedAmount}` : `$${formattedAmount}`
}

export default formatPrice
