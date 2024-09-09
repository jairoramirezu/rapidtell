import { DISCLAIMER } from "../../config/contants"

const Rights = () => {
  const date = new Date()
  const year = /\d{4}/.exec(date.toString())
  return (
    <div className="info-notes-container">
      <hr />
      <p>{`© ${year} ${DISCLAIMER}`}</p>
    </div>
  )
}

export default Rights
