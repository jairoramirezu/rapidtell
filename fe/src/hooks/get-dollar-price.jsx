import axios from "axios"

const dollarPrice = async () => {
  const res = await axios(process.env.REACT_APP_DOLLAR_URL)
  const {
    data: {
      monitors: {
        enparalelovzla: { price }
      }
    }
  } = res
  return { price }
}

export default dollarPrice
