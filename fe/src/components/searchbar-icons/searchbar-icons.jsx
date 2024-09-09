import NavbarCurrencyIcon from "../navbar-currency-icon/navbar-currency-icon"

const SearchbarIcons = ({ currency, setCurrency, clear }) => (
  <div className="position-relative d-flex flex-row p-5">
    <img
      src="/images/close_thin.svg"
      alt="close"
      onClick={clear}
      className="close-button-menu-alt"
    />
    <NavbarCurrencyIcon currency={currency} setCurrency={setCurrency} />
  </div>
)

export default SearchbarIcons
