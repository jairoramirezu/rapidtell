import { PROCCESING_BUYING } from "../../config/contants"
import LoaderImg from "/images/audio.svg"

const Loader = ({ isSold = false }) => (
  <div className="loader-container">
    <img className="loader" src={LoaderImg} />
    {isSold && <p className="mt-2 buying-text">{PROCCESING_BUYING}</p>}
  </div>
)

export default Loader
