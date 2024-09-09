import { useContext } from "react"
import { COLOR, RAM, ROM } from "../../config/contants"
import NavContext from "../context/context"

const ReviewPhoneData = ({ phone, colors }) => {
  const {
    color: [phoneColor, setPhoneColor]
  } = useContext(NavContext)
  return (
    <>
      <div className="container-select-color d-flex justify-content-start align-items-center mt-2 position-relative">
        <h1 className="review-phone-title mb-0">{phone?.name} -</h1>
        <select
          className="phone-detail-display-select phone-detail-display-select-alt"
          onChange={(e) => setPhoneColor(e.target.value)}
          value={phoneColor || ""}
        >
          <option value="" disabled>
            {COLOR}
          </option>
          {colors?.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))}
        </select>
        <img
          className="chevron-down"
          src="/images/chevron-down_000.svg"
          alt="seleccionar color"
        />
      </div>
      <div className="d-flex justify-content-between review-phone-det-container">
        <h3 className="review-phone-det mb-2 mt-1 phone-detail-ms">
          {phone?.features[1]?.name}
          {RAM} - {phone?.features[2]?.name}
          {ROM}
        </h3>
      </div>
    </>
  )
}

export default ReviewPhoneData
