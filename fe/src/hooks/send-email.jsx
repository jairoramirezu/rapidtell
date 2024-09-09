import axios from "axios"

const sendInvoiceEmail = async (
  name,
  _last,
  _id,
  _phone,
  email,
  _address,
  _point,
  _city,
  _state,
  _payNumber,
  phoneName,
  color,
  price,
  _index,
  _gift,
  ram,
  rom
) => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${process.env.REACT_APP_URL}?email=${email.current.value}&name=${name.current.value}&phone=${phoneName}&color=${color}&price=${price}&ram=${ram}&rom=${rom}`,
    headers: {
      "x-api-key": process.env.API_KEY
    }
  }
  await axios.request(config)
}

export default sendInvoiceEmail
