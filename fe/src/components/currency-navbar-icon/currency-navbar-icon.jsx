import { BS } from "../../config/contants"

const CurrencyNavbarIcon = ({ currency, white, setCurrency }) => (
  <div>
    {!currency ? (
      <img
        src={`/images/dollar_${white ? "000" : "dad"}.svg`}
        alt="currency"
        onClick={() => setCurrency((prev) => !prev)}
      />
    ) : (
      <p
        className={`my-0 currency ${white ? "currency-color-alt" : undefined}`}
        onClick={() => setCurrency((prev) => !prev)}
      >
        {BS}
      </p>
    )}
  </div>
)

export default CurrencyNavbarIcon
