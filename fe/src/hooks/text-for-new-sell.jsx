import axios from "axios"

const botToken = process.env.REACT_APP_TELE_TOKEN
const chat_id = process.env.REACT_APP_TELE_CHAT_ID
const url = `https://api.telegram.org/bot${botToken}/sendMessage`

const textForNewSell = async (
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
  try {
    await axios.post(url, {
      chat_id,
      text: `${phoneName}\n${color}\n${ram}GB / RAM\n${rom}GB / ROM\n-------------------\n${index}\n${price}\n${payNumber.current.value}\n-------------------\n${name.current.value} ${last.current.value}\n${id.current.value}\n${phone.current.value}\n${email.current.value}\n${address.current.value}\n${point.current.value}\n${city.current.value} - ${state.current.value}\n-------------------\n${gift}
      `,
      parse_mode: "HTML"
    })
  } catch (err) {
    console.error(err)
  }
}

export default textForNewSell
