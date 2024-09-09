import AvailableInput from "../available-input/available-input"
import InfoOfProduct from "../info-of-product/info-of-product"
import InputsToAct from "../inputs-to-act/inputs-to-act"

const MainForm = ({
  number,
  ele,
  unit,
  setNumber,
  available,
  prices,
  price,
  colors
}) => (
  <form
    className={` form-container-ele ${
      number === ele.id ? "form-container-ele-alt" : ""
    }`}
  >
    <AvailableInput
      ele={ele}
      unit={unit}
      setNumber={setNumber}
      available={available}
      number={number}
    />
    <InfoOfProduct ele={ele} />
    <InputsToAct
      ele={ele}
      prices={prices}
      number={number}
      price={price}
      unit={unit}
      setNumber={setNumber}
      colors={colors}
    />
  </form>
)

export default MainForm
