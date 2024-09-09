import { db } from "../../firebase"
import { doc, setDoc } from "firebase/firestore"
import capitalize from "../utils/capitalize"
import dollarPrice from "./get-dollar-price"

const saveDataOfSell = async (
  name,
  last,
  id,
  phone,
  email,
  address,
  point,
  city,
  state,
  payNumber,
  phoneName,
  color,
  price,
  index,
  gift,
  ram,
  rom
) => {
  const date = new Date()
  const timestamp = date.getTime()
  const readDate = date.toLocaleString()
  const { price: dollar } = await dollarPrice()
  const isBS = price.includes("BS")
  await setDoc(doc(db, "sells", `${timestamp}`), {
    name: name.current.value,
    last: last.current.value,
    id: id.current.value,
    phone: phone.current.value,
    email: email.current.value,
    address: address.current.value,
    point: point.current.value,
    city: city.current.value,
    state: state.current.value,
    payNumber: payNumber.current.value,
    phoneName,
    color,
    price: price,
    price_in_dollar: isBS
      ? `$${Math.ceil(
          Number(price.match(/\d+\.\d+/)[0].replace(".", "")) / (dollar + 1)
        )}`
      : price,
    payment_method: capitalize(index),
    gift,
    ram,
    rom,
    date: readDate
  })
}

export default saveDataOfSell
