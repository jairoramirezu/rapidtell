import { MOST_SOLD, RAM, ROM } from "../../config/contants"

const MostSoldInfo = ({ phoneIndex, phoneList }) => (
  <>
    <h1 className={phoneList[phoneIndex].white ? "text-white" : undefined}>
      {MOST_SOLD}
    </h1>
    <h3 className={phoneList[phoneIndex].white ? "text-white" : undefined}>
      {phoneList[phoneIndex].name}
    </h3>
    <h3
      className={`phone-detail-ms ${
        phoneList[phoneIndex].white ? "text-white" : undefined
      }`}
    >
      {phoneList[phoneIndex].ram}
      {RAM} - {phoneList[phoneIndex].rom}
      {ROM}
    </h3>
  </>
)

export default MostSoldInfo
