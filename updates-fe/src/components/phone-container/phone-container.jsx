import { useState, useEffect } from "react"
import ActButtons from "../act-buttons/act-buttons"
import MainForm from "../main-form/main-form"

const PhoneContainer = ({ ele, prices, fetchProd, number, setNumber }) => {
  const [available, setAvailable] = useState("")
  const [price, setPrice] = useState("")
  const [colors, setColors] = useState("")

  const unit = (e) => {
    setNumber(e.target.parentElement.parentElement.parentElement.parentElement.id)
    if (e.target.id === "available") setAvailable(e.target.checked)
    if (e.target.id === "price") setPrice(e.target.value)
    if (e.target.id === "colors") setColors(e.target.value)
  }

  useEffect(() => {
    setPrice("")
    setColors("")
  }, [number])

  return (
    <div
      key={ele.id}
      id={ele.id}
      className={`main-container-ele ${
        number === ele.id ? "main-container-ele-alt" : ""
      }`}
    >
      <div className="form-buttons-container">
        <MainForm
          number={number}
          ele={ele}
          unit={unit}
          setNumber={setNumber}
          available={available}
          prices={prices}
          price={price}
          colors={colors}
        />
        <ActButtons
          number={number}
          ele={ele}
          available={available}
          price={price}
          colors={colors}
          setAvailable={setAvailable}
          setPrice={setPrice}
          setColors={setColors}
          setNumber={setNumber}
          fetchProd={fetchProd}
        />
      </div>
    </div>
  )
}

export default PhoneContainer
