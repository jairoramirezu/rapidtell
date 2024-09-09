import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { accounts } from "../../data/phone-cover.js"
import NavContext from "../context/context.jsx"
import Menu from "../menu/menu.jsx"
import Search from "../search/search.jsx"
import { dollar_payment_methods } from "../../config/contants.jsx"
import NavbarAlt from "../navbar-alt/navbar-alt.jsx"

const Navbar = ({
  white = false,
  checkout = false,
  name = undefined,
  price = undefined,
  color = undefined
}) => {
  const { pathname } = useLocation()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = window.location.pathname.split("/")
  const validate = location[1]
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [searchDisplay, setSearchDisplay] = useState(false)
  const {
    dollarPrice: [dollarPrice],
    paymentMethod: [paymentMethod],
    currency: [currency, setCurrency],
    final: [finalSold],
  } = useContext(NavContext)

  useEffect(() => {
    if (!menuDisplay || !searchDisplay) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [menuDisplay, searchDisplay])

  useEffect(() => {
    setMenuDisplay(true)
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const searchFun = () => {
    setSearchDisplay((prev) => !prev)
  }

  return (
    <div
      className={`nav-container-box ${white && "nav-alt"} ${
        validate === "final" && "position-sticky"
      } ${validate === "final" && isScrolled && "new-bg-color"}`}
    >
      <NavbarAlt
        checkout={checkout}
        isScrolled={isScrolled}
        white={white}
        currency={currency}
        searchFun={searchFun}
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        setCurrency={setCurrency}
        name={name}
        color={color}
        accounts={accounts}
        paymentMethod={paymentMethod}
        dollar_payment_methods={dollar_payment_methods}
        price={price}
        dollarPrice={dollarPrice}
        finalSold={finalSold}
      />
      <Menu
        menuDisplay={menuDisplay}
        setMenuDisplay={setMenuDisplay}
        pathname={pathname}
      />
      <Search
        searchDisplay={searchDisplay}
        setSearchDisplay={setSearchDisplay}
        pathname={pathname}
      />
    </div>
  )
}

export default Navbar
