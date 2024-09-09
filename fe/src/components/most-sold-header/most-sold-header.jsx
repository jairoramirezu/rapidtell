import MostSoldInfo from "../most-sold-info/most-sold-info"
import BuyTagMostSold from "../buy-tag-most-sold/buy-tag-most-sold"

const MostSoldHeader = ({ phoneIndex, phoneList, setPhoneColor }) => (
  <div>
    <MostSoldInfo phoneList={phoneList} phoneIndex={phoneIndex} />
    <BuyTagMostSold
      phoneList={phoneList}
      phoneIndex={phoneIndex}
      setPhoneColor={setPhoneColor}
    />
  </div>
)

export default MostSoldHeader
