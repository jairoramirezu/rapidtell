import NavbarNotCheckout from "../navbar-not-checkout/navbar-not-checkout"
import NavbarCheckout from "../navbar-checkout/navbar-checkout"

const NavbarAlt = ({
  checkout,
  isScrolled,
  white,
  currency,
  searchFun,
  menuDisplay,
  setMenuDisplay,
  setCurrency,
  name,
  color,
  accounts,
  paymentMethod,
  dollar_payment_methods,
  price,
  dollarPrice,
  finalSold
}) => (
  <>
    {!checkout ? (
      <NavbarNotCheckout
        isScrolled={isScrolled}
        white={white}
        currency={currency}
        searchFun={searchFun}
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        setCurrency={setCurrency}
      />
    ) : (
      <NavbarCheckout
        white={white}
        name={name}
        color={color}
        currency={currency}
        accounts={accounts}
        paymentMethod={paymentMethod}
        dollar_payment_methods={dollar_payment_methods}
        price={price}
        dollarPrice={dollarPrice}
        finalSold={finalSold}
      />
    )}
  </>
)

export default NavbarAlt
