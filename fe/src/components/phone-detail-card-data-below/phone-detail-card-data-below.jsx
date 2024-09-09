import PhoneDetailSelectColor from "../phone-detail-select-color/phone-detail-select-color"
import PhoneDetailsPriceRamRom from "../phone-details-price-ram-rom/phone-details-price-ram-rom"

const PhoneDetailCardDataBelow = ({
  colors,
  name,
  setColor,
  price,
  ram,
  rom
}) => (
  <div className="d-flex align-items-center justify-content-between phone-detail-info-container">
    <div>
      <h1 className="phone-detail-name">{name}</h1>
      <div className="position-relative width-to-help">
        <PhoneDetailSelectColor colors={colors} setColor={setColor} />
        <img
          className="chevron-down position-alt"
          src="/images/chevron-down_000.svg"
        />
      </div>
    </div>
    <PhoneDetailsPriceRamRom price={price} ram={ram} rom={rom} />
  </div>
)

export default PhoneDetailCardDataBelow
