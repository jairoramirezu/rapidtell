import { toast } from "react-toastify"
import { updateProduct } from "../hooks/info"

const updateData = async (
  id,
  active,
  rom,
  screenSize,
  camera,
  batery,
  weight,
  sim,
  os,
  chip,
  colorsO,
  ramO,
  urlO,
  available,
  price,
  colors,
  setAvailable,
  setPrice,
  setColors,
  setNumber,
  fetchProd
) => {
  const res = await updateProduct(
    id,
    active,
    available,
    Number(price),
    colors || colorsO,
    ramO,
    urlO,
    rom,
    screenSize,
    camera,
    batery,
    weight,
    sim,
    os,
    chip
  )
  res ? toast.success("Cambios realizados!") : ""
  setAvailable("")
  setPrice("")
  setColors("")
  setNumber("")
  fetchProd()
}

export default updateData
