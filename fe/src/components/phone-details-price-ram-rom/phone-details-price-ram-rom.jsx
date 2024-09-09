import { RAM, ROM } from "../../config/contants"

const PhoneDetailsPriceRamRom = ({ price, ram, rom }) => (
  <div>
    <h6 className="phone-detail-display right">{price}</h6>
    <h6 className="phone-detail-display right">
      {ram}
      {RAM}
    </h6>
    <h6 className="phone-detail-display right">
      {rom}
      {ROM}
    </h6>
  </div>
)

export default PhoneDetailsPriceRamRom
