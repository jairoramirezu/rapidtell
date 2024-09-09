import { COLOR } from "../../config/contants"

const PhoneDetailSelectColor = ({ setColor, colors }) => (
  <select
    className="phone-detail-display-select position-sticky"
    onChange={(e) => setColor(e.target.value)}
    defaultValue=""
  >
    <option value="" disabled>
      {COLOR}
    </option>
    {colors.map((color) => (
      <option key={color} value={color}>
        {color}
      </option>
    ))}
  </select>
)

export default PhoneDetailSelectColor
