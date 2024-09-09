import ButtonForm from "../button-form/button-form"
import updateData from "../../helpers/update-data"

const ActButtons = ({
  number,
  ele,
  available,
  price,
  colors,
  setAvailable,
  setPrice,
  setColors,
  setNumber,
  fetchProd
}) => {
  const erase = () => {
    setAvailable("")
    setPrice("")
    setColors("")
    setNumber("")
  }
  return (
    <div className={`buttons-container ${number === ele.id ? "" : "d-none"}`}>
      <ButtonForm
        classname="btn btn-danger w-100"
        onclick={erase}
        disabled={!available && !price && !colors}
        name="Cancelar"
      />
      <ButtonForm
        classname="btn btn-primary w-100 mx-2"
        onclick={() =>
          updateData(
            ele?.id,
            ele?.active,
            ele?.features[2]?.name,
            ele?.features[3]?.name,
            ele?.features[4]?.name,
            ele?.features[5]?.name,
            ele?.features[6]?.name,
            ele?.features[7]?.name,
            ele?.features[8]?.name,
            ele?.features[9]?.name,
            ele?.features[0]?.name,
            ele?.features[1]?.name,
            ele?.features[10]?.name,
            available,
            price,
            colors,
            setAvailable,
            setPrice,
            setColors,
            setNumber,
            fetchProd
          )
        }
        disabled={!available && !price && !colors}
        name="Actualizar"
      />
    </div>
  )
}

export default ActButtons
