import NavbarcheckoutData from "../navbar-checkout-data/navbar-checout-data"
import NavbarCheckoutPaymentData from "../navbar-checout-payment-data/navbar-checout-payment-data"

const NavbarCheckout = ({
  white,
  name,
  color,
  currency,
  accounts,
  paymentMethod,
  dollar_payment_methods,
  price,
  dollarPrice,
  finalSold
}) => {
  return (
    <>
      <NavbarcheckoutData
        white={white}
        name={name}
        color={color}
        currency={currency}
        paymentMethod={paymentMethod}
        price={price}
        accounts={accounts}
        dollarPrice={dollarPrice}
        finalSold={finalSold}
      />
      <NavbarCheckoutPaymentData
        dollar_payment_methods={dollar_payment_methods}
        paymentMethod={paymentMethod}
        accounts={accounts}
        name={name}
      />
    </>
  )
}

export default NavbarCheckout
