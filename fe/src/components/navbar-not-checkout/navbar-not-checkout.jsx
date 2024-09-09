import CurrencyNavbarIcon from "../currency-navbar-icon/currency-navbar-icon"
import LogoNavbar from "../logo-navbar/logo-navbar"
import MenuNavbarIcon from "../menu-navbar-icon/menu-navbar-icon"
import SearchNavbarIcon from "../search-navbar-icon/search-navbar-icon"

const NavbarNotCheckout = ({
  isScrolled,
  white,
  currency,
  searchFun,
  menuDisplay,
  setMenuDisplay,
  setCurrency
}) => (
  <div
    className={`nav-container ${isScrolled && "opacity-alt"} ${
      white && "nav-alt"
    }`}
  >
    <LogoNavbar white={white} />
    <div className="nav-items-container">
      <CurrencyNavbarIcon
        currency={currency}
        white={white}
        setCurrency={setCurrency}
      />
      <SearchNavbarIcon white={white} searchFun={searchFun} />
      <MenuNavbarIcon
        white={white}
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
      />
    </div>
  </div>
)

export default NavbarNotCheckout
