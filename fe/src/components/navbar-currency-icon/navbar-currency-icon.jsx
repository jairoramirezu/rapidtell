import { BS } from "../../config/contants"

const NavbarCurrencyIcon = ({ currency, setCurrency }) => (
  <>
    {!currency ? (
      <img
        src="/images/dollar_dad.svg"
        alt="currency"
        onClick={() => setCurrency((prev) => !prev)}
        className="dollar-button-menu-alt"
      />
    ) : (
      <p
        className="my-0 currency bs-button-menu-alt"
        onClick={() => setCurrency((prev) => !prev)}
      >
        {BS}
      </p>
    )}
  </>
)

export default NavbarCurrencyIcon
