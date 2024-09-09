import { Link } from "react-router-dom"
import { MCBO_SAN } from "../../config/contants"

const LogoNavbar = ({ white }) => (
  <div className="nav-logo-container">
    <Link to="/" className="d-flex justify-content-center align-items-center">
      <img
        width="28"
        height="28"
        src={`/images/rapidtell_${white ? "000" : "dad"}.svg`}
        alt="logo"
      />
    </Link>
    {!white && <h6 className="nav-text-city">{MCBO_SAN}</h6>}
  </div>
)

export default LogoNavbar
